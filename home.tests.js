const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();
const HomePageModel = require('./pom/HomePageModel.js');
const config = require('./config.js');

describe('Home page header', () => {
    let browser;
    let page;
    let homePageModel;

    before(async () => {
        browser = await puppeteer.launch();
    });

    beforeEach(async () => {
        page = await browser.newPage();
        homePageModel = new HomePageModel(page, config);
        await homePageModel.go();
    })

    afterEach(async () => {
        await page.close();
    })

    after(async () => {
        await browser.close();
    })

    it('Title should have name Sprawna dostawa paczek. Meest Post – Twoja poczta.', async () => {
        (await homePageModel.title()).should.contain(config.brandName);
    })

    it('Title should mention Meest Post', async () => {
        expect(await homePageModel.title()).to.contain(config.mainProductName);
    });
});