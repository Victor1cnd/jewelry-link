# jewelry-link

A Cloudflare Worker that injects a jewelry internal-links block into HTML pages.

## Files
- `src/worker.js`

## Deploy
1. Create a Cloudflare Worker named `jewelry-link`
2. Upload the contents of `src/worker.js`
3. Deploy the worker
4. Attach it to your site or route

## Behavior
The worker fetches the origin response, checks that it is HTML, and appends the jewelry navigation block before the closing `</body>` tag.
