const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();
const config = require('./v_config');
const LoginPageModel = require('./pom/LoginPageModel');
const fs = require('fs');
const Path = require('path');


describe('Login Page', () => {
    let browser;
    let page;
    let pageModel;


before(async () => {
    browser = await puppeteer.launch(config.launchOptions);
});

beforeEach(async () => {
    page = await browser.newPage();
    page.setDefaultTimeout(config.timeout);
    pageModel = new LoginPageModel(page,config);
    await pageModel.go();
});

afterEach(async () => {
    await page.close();
});

after(async () => {
    await browser.close();
});

it('Should have the right title', async () => {
    (await pageModel.title()).should.equal('Login');
});

it('It should persist the user', async () => {
    const userDataDir = fs.mkdtempSync('profile');
    const options = config.launchOptions;
    options.userDataDir = userDataDir;
    let persistentBrowser = await puppeteer.launch(options);
    let persistentPage = await persistentBrowser.newPage();
    let loginModel = new LoginPageModel(persistentPage, config);

    await loginModel.go();
    (await loginModel.logState()).should.equal('Login');
    await loginModel.login(config.username, config.password);
    (await loginModel.logState()).should.equal('Logout');

    await persistentBrowser.close();
    deleteFolderRecursive(userDataDir);
});

it('Should load image after login', async() => {
    const promise = page.waitForResponse(config.productImage);
    await pageModel.login(config.username, config.password);
    await promise;
});

const deleteFolderRecursive = function(path) {
    try {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach((file, index) => {
                const curPath = Path.join(path,file);
                if (fs.lstatSync(curPath).isDirectory()){
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    }
    catch {
        console.log('Unabled to delete folder');
    }
};

});