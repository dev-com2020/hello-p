const puppeteer = require('puppeteer');

(async () => {
    // const browser = await puppeteer.launch({ headless: false, defaultViewport: null});
    // const page = await browser.newPage();
    // await page.emulateTimezone('Europe/London')
    // await page.goto('https://www.unixtimestamp.com/');
    // await browser.close();
    // const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
    // const page = await browser.newPage();
    // await page.setExtraHTTPHeaders({
    //     'Accept-Language': 'fr'
    // });
    // await page.goto('https://www.google.com/');
    // await browser.close();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.pl');
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
    await page.screenshot({ path: 'dark.png' });
    await page.emulateVisionDeficiency('achromatopsia');
    await page.screenshot({ path: 'achromatopsia.png' });
    await page.emulateVisionDeficiency('blurredVision');
    await page.screenshot({ path: 'blurred-vision.png' });
    await browser.close();
})();