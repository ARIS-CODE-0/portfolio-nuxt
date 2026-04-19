const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const sites = [
    { url: 'https://tipa.arislabs.online', name: 'tipa' },
    { url: 'https://www.arislabs.online', name: 'arislabs' }
  ];

  for (const site of sites) {
    console.log(`Capturing ${site.url}...`);
    await page.goto(site.url, { waitUntil: 'networkidle' });
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.screenshot({ path: `/home/ubuntu/.openclaw/workspace/portfolio-nuxt/public/images/${site.name}.png`, fullPage: false });
    console.log(`Saved ${site.name}.png`);
  }

  await browser.close();
})();
