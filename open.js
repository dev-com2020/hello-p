const puppeteer = require("puppeteer-extra"); 
 
// Add stealth plugin and use defaults 
const pluginStealth = require("puppeteer-extra-plugin-stealth"); 
const { executablePath } = require("puppeteer"); 
 
// Use stealth 
puppeteer.use(pluginStealth()); 
 
// Launch puppeteer-stealth 
puppeteer.launch({ executablePath: executablePath() }).then(async browser => { 
	// Create a new page 
	const page = await browser.newPage(); 
 
	// Set page view 
	await page.setViewport({ width: 1280, height: 720 }); 
 
	// navigate to the website 
	await page.goto("https://www.opensea.io/"); 
 
	// Wait for page to load
	await page.waitForTimeout(1000); 
 
	// Take a screenshot 
	await page.screenshot({ path: "image.png" }); 
 
	// Close the browser 
	await browser.close(); 
});
