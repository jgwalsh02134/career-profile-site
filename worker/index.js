export default {
  async fetch(request) {
    return new Response(`
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"><title>Worker Test</title></head>
      <body><h1>Hello from Cloudflare Worker</h1></body>
      </html>
    `, { headers: { 'Content-Type': 'text/html' } });
  },
};