import { z } from "zod";

const insertContactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long").regex(/^[^\r\n]+$/, "Name cannot contain line breaks"),
  email: z.string().trim().email("Invalid email address").max(254, "Email is too long"),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200, "Subject is too long").regex(/^[^\r\n]+$/, "Subject cannot contain line breaks"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message is too long"),
  company: z.string().max(200).optional(),
});

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // 1. Handle the API route
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        const data = insertContactSchema.parse(body);

        if (data.company) {
          return Response.json({ success: true }); // Honeypot tripped
        }

        // Send via Resend HTTP API
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: `Portfolio Contact <${env.EMAIL_FROM}>`,
            // IMPORTANT: In test mode, you can ONLY send to your own Resend account email!
            to: ['ujjalsigdel@gmail.com'], 
            reply_to: data.email,
            subject: `New Contact: ${data.subject}`,
            text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Resend error:", errorText);
          throw new Error("Failed to send email");
        }

        return Response.json({ success: true });
      } catch (err) {
        console.error("CONTACT API ERROR:", err);
        if (err instanceof z.ZodError) {
          return Response.json({ message: err.errors[0]?.message || "Invalid input" }, { status: 400 });
        }
        return Response.json({ message: "Server error" }, { status: 500 });
      }
    }

    // 2. For all other routes, serve the React static assets
    return env.ASSETS.fetch(request);
  },
};
