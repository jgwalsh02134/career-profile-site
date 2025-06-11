export default {
    async fetch(request) {
      const url = new URL(request.url);
  
      // Normalize path (no trailing slash, case-sensitive)
      const cleanPath = url.pathname.replace(/\/+$/, "");
  
      // Redirect /resume to /resume.html
      if (cleanPath === "/resume") {
        return Response.redirect(`${url.origin}/resume.html`, 301);
      }
  
      // Add security headers to all responses
      const response = await fetch(request);
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