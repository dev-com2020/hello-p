const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // Wszystkie ramki
    const frames = await page.frames();
    // Możesz przejrzeć ramki i znaleźć tę, której szukasz
    const myFrame = frames.find(f => f.name() === 'frame-name');

    // Teraz możesz używać 'myFrame' jak 'page', np:
    const element = await myFrame.$('#my-element');
    const text = await myFrame.evaluate(element => element.textContent, element);

    console.log(text);

    await browser.close();
}

run();
