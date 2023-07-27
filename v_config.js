
module.exports = ({
    local: {
        baseURL: 'http://localhost:8080/',
        timeout: 50000,
        username: 'admin@gmail.com',
        password: 'admin',
        productToTestName: 'Macbook Pro 13.3\' Retina MF841LL/A',
        productToTestId: 1,
        launchOptions: {headless: false}
    },
    CI: {
        baseURL : 'http://localhost:8080/',
        username: 'admin@gmail.com',
        password: 'admin',
        launchOptions: { 
            executablePath: process.env.PUPPETEER_EXEC_PATH,
            headless: true,
            args: ['--no-sandbox'],
        },
        timeout: 50000,
    },
    prod: {}
})[process.env.TESTENV || 'local'];