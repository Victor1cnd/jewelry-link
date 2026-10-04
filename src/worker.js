/**
 * Jewelry Links Block Worker
 * Injects a jewelry navigation block into HTML pages
 * Deploy this worker to Cloudflare and attach to your domain route
 */

export default {
  async fetch(request) {
    try {
      // Fetch the origin response
      const response = await fetch(request);

      // Only process HTML responses
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("text/html")) {
        return response;
      }

      // Create the jewelry links block HTML
      const jewelryLinksBlock = `
<div id="cf-jewelry-internal-links" style="padding:16px 0;font-size:14px;line-height:1.6;border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin:16px 0;">
  <p style="margin:0 0 8px;font-weight:bold;">Explore Our Jewelry Collection:</p>
  <a href="/rings" style="margin-right:12px;color:#0066cc;text-decoration:none;">Rings</a>
  <a href="/necklaces" style="margin-right:12px;color:#0066cc;text-decoration:none;">Necklaces</a>
  <a href="/bracelets" style="margin-right:12px;color:#0066cc;text-decoration:none;">Bracelets</a>
  <a href="/earrings" style="margin-right:12px;color:#0066cc;text-decoration:none;">Earrings</a>
  <a href="/engagement-rings" style="margin-right:12px;color:#0066cc;text-decoration:none;">Engagement Rings</a>
  <a href="/wedding-bands" style="margin-right:12px;color:#0066cc;text-decoration:none;">Wedding Bands</a>
  <a href="/gemstones" style="margin-right:12px;color:#0066cc;text-decoration:none;">Gemstones</a>
  <a href="/collections" style="margin-right:12px;color:#0066cc;text-decoration:none;">Collections</a>
  <a href="/about-us" style="color:#0066cc;text-decoration:none;">About Us</a>
</div>`;

      // Use HTMLRewriter to inject the block before </body>
      return new HTMLRewriter()
        .on("body", {
          element(element) {
            element.append(jewelryLinksBlock, { html: true });
          },
        })
        .transform(response);
    } catch (error) {
      // If anything fails, return the original response
      return new Response(`Worker error: ${error.message}`, { status: 500 });
    }
  },
};
