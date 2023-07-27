const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();
const config = require('./v_config');
const HomePageModel = require('./pom/HomePageModel');
const LoginPageModel = require('./pom/LoginPageModel');
const fs = require('fs');
const Path = require('path');


describe('Home Page', () => {
    let browser;
    let page;
    let pageModel;


before(async () => {
    browser = await puppeteer.launch(config.launchOptions);
});

beforeEach(async () => {
    page = await browser.newPage();
    page.setDefaultTimeout(config.timeout);
    pageModel = new HomePageModel(page,config);
    await pageModel.go();
});

afterEach(async () => {
    await page.close();
});

after(async () => {
    await browser.close();
});

it('Should have right price and stock', async() => {
    (await pageModel.getPrice(config.productToTestName)).should.equal('$1199');
    (await pageModel.getStock(config.productToTestName)).should.equal('15 left in stock');
});

});