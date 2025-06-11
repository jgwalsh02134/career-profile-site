export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "");

    // Redirect "/resume" to "/resume.html"
    if (path === "/resume") {
      return Response.redirect(`${url.origin}/resume.html`, 301);
    }

    // Proxy original request and add security headers
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