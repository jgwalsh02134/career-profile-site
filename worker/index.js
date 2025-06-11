export default {
    async fetch(request) {
      const url = new URL(request.url);
  
      // Normalize trailing slash and redirect /resume to /resume.html
      if (url.pathname.replace(/\/+$/, "") === "/resume") {
        return Response.redirect(`${url.origin}/resume.html`, 301);
      }
  
      // Fetch original response
      const response = await fetch(request);
  
      // Add security headers
      const headers = new Headers(response.headers);
      headers.set("Content-Security-Policy", "default-src 'self'");
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
      headers.set("X-Content-Type-Options", "nosniff");
  
      return new Response(response.body, {
        status: response.status,
        headers,
      });
    },
  };