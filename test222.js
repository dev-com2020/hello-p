const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null
    });
const page = await browser.newPage();
const navigationPromise = page.waitForNavigation()

await page.goto('https://www.onet.pl/');

await page.setViewport({ width: 1200, height: 874 });

await navigationPromise

await page.waitForSelector('.Menu_navWrapper__lQTfH > .Menu_navMenuListItem__IRxhU:nth-child(5) > .CollapsedItems_collapsedMenu__l_XFH > .CollapsedItems_column__EyeRi:nth-child(3) > .CollapsedItem_itemLinkSimple__i5zoz:nth-child(1)')
await page.click('.Menu_navWrapper__lQTfH > .Menu_navMenuListItem__IRxhU:nth-child(5) > .CollapsedItems_collapsedMenu__l_XFH > .CollapsedItems_column__EyeRi:nth-child(3) > .CollapsedItem_itemLinkSimple__i5zoz:nth-child(1)')

await navigationPromise

await page.waitForSelector('.glide__slides > .glide__slide--active > .driverItemContent > .driverItemLeadTitleWrapper > .driverItemTitle')
await page.click('.glide__slides > .glide__slide--active > .driverItemContent > .driverItemLeadTitleWrapper > .driverItemTitle')

await page.waitForSelector('.ucs-infoskin > #adtpl--cbreak > .adtpl__cbreak__header > .adtpl__cbreak__button > span')
await page.click('.ucs-infoskin > #adtpl--cbreak > .adtpl__cbreak__header > .adtpl__cbreak__button > span')

await page.waitForSelector('.glide__slides > .glide__slide:nth-child(2) > .driverItemContent > .driverItemLeadTitleWrapper > .driverItemTitle')
await page.click('.glide__slides > .glide__slide:nth-child(2) > .driverItemContent > .driverItemLeadTitleWrapper > .driverItemTitle')

await navigationPromise

await browser.close();

})();