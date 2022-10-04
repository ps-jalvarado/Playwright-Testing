const { firefox, webkit } = require('playwright');  // Or 'chromium' or 'webkit'.

(async () => {
  const browser = await webkit.launch({
    headless: true
  });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"
  });
  const page = await context.newPage();
  await page.goto('https://www.homedepot.com/p/Simpson-Strong-Tie-9-x-1-1-2-in-1-4-Hex-Drive-Strong-Drive-SD-Connector-Screw-100-Pack-SD9112R100/202071152',{
    waitUntil: 'domcontentloaded',
    timeout: 120000
  });
  await browser.close();
})();