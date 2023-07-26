// const puppeteer = require('puppeteer');
// (async function () {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.onet.pl');
//     await page.screenshot({ path: './screen1.png' });
//     browser.close();
// })();


// await Promise.all([
//     page.click('a'),
//     page.waitForNavigation()
// ]);

// await Promise.race([
//     page.screenshot((resolve, reject) => {
//         setTimeout(()=>{
//             reject(new Error('Too long!'));},2000);
//         }
//     )
// ]);

const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();


describe('Home page header', () => {
    it('Title should have name Sprawna dostawa paczek. Meest Post – Twoja poczta.', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.meestpost.com/pl/');
        await browser.close();
    });
    it('Title should mention Meest Post', async () => {
    });
});