const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null });
    const page = await browser.newPage();
    await page.emulate({
        userAgent:
            'Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',

        viewport: {

            width: 360,
            height: 780,
            deviceScaleFactor: 3,
            isMobile: true,
            hasTouch: true,
            isLandscape: false,

        }

    });
    await page.goto('http://www.seleniumdemo.com');
    await page.screenshot({ path: 'fromhtmlXX.png' });
    await browser.close();
})();



// beforeEach(async () => {
//     page = await browser.newPage();
//     await page.emulate(puppeteer.devices['iPhone 6']);
//     page.setDefaultTimeout(config.timeout);
//     pageModel = new LoginPageModel(page, config);
//     await pageModel.go();
// })