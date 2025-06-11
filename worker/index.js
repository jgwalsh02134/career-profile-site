export default {
    async fetch(request) {
      const url = new URL(request.url);
  
      // Redirect `/resume` → `/resume.html`
      if (url.pathname === "/resume") {
        url.pathname = "/resume.html";
        return Response.redirect(url.toString(), 301);
      }
  
      // Add security headers to all responses
      const response = await fetch(request);
      const headers = new Headers(response.headers);
      headers.set("Content-Security-Policy", "default-src 'self'");
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
      headers.set("X-Content-Type-Options", "nosniff");
  
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    },
  };