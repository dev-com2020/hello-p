const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();

let browser;
let page;

before(async () => {
    browser = await puppeteer.launch();
});
beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://www.meestpost.com/pl/');
});
afterEach(async () => {
    await page.close();
});
after(async () => {
    await browser.close()
});


describe('Home page header', () => {
    it('Title should have name Sprawna dostawa paczek. Meest Post – Twoja poczta.', async () => {
        const title = await page.title();
        title.should.contain('Sprawna dostawa paczek. Meest Post – Twoja poczta.')
    });
    it('Title should mention Meest Post', async () => {
        expect((await page.title())).to.contain('Meest Post')
    });
});