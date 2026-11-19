import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.defer = true;
    // Replace with your actual token from the Cloudflare dashboard
    s.dataset.cfBeacon = JSON.stringify({ token: "YOUR_TOKEN_HERE" }); 
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);
  return null;
}
