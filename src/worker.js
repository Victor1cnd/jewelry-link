export default {
  async fetch(request) {
    const response = await fetch(request);

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
      return response;
    }

    const jewelryLinksBlock = `
<div id="cf-jewelry-internal-links" style="padding:16px 0;font-size:14px;line-height:1.6;">
  <p style="margin:0 0 8px;font-weight:bold;">Explore Our Jewelry Collection:</p>
  <a href="/rings" style="margin-right:12px;">Rings</a>
  <a href="/necklaces" style="margin-right:12px;">Necklaces</a>
  <a href="/bracelets" style="margin-right:12px;">Bracelets</a>
  <a href="/earrings" style="margin-right:12px;">Earrings</a>
  <a href="/engagement-rings" style="margin-right:12px;">Engagement Rings</a>
  <a href="/wedding-bands" style="margin-right:12px;">Wedding Bands</a>
  <a href="/gemstones" style="margin-right:12px;">Gemstones</a>
  <a href="/collections" style="margin-right:12px;">Collections</a>
  <a href="/about-us">About Us</a>
</div>`;

    return new HTMLRewriter()
      .on("body", {
        element(element) {
          element.append(jewelryLinksBlock, { html: true });
        },
      })
      .transform(response);
  },
};
