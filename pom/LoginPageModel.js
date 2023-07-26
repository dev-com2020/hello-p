module.exports = class LoginPageModel {
    constructor(page, config){
        this.page = page;
        this.config = config;
    }

    async go() {
        return await this.page.goto(this.config.baseURL + 'login');
    }

    async title(){
        return await this.page.title();
    }

    async logState(){
        await this.page.waitForSelector('#login-form')
        return await this.page.evaluate(() => document.querySelector('#login-form').innerText);
    }

    async login(user,password){
        await this.page.type('#email',user);
        await this.page.type('#password', password);
        await this.page.click('#login-form .btn-success');
    }
}