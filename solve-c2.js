const puppeteer = require('puppeteer-extra')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
 
// Use the RecaptchaPlugin with the specified provider (2captcha) and token
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: 'XXXXXXX' 
    },
    visualFeedback: true // Enable visual feedback (colorize reCAPTCHAs)
  })
)
 
// Launch a headless browser instance
puppeteer.launch({ headless: true }).then(async browser => {
  // Create a new page
  const page = await browser.newPage()
 
  // Navigate to a page containing a reCAPTCHA challenge
  await page.goto('https://2captcha.com/demo/recaptcha-v2')
 
  // Automatically solve the reCAPTCHA challenge
  await page.solveRecaptchas()
 
  // Wait for the navigation and click the submit button
  await Promise.all([
    page.waitForNavigation(),
    page.click(`#recaptcha-demo-submit`)
  ])
 
  // Take a screenshot of the response page
  await page.screenshot({ path: 'response.png', fullPage: true })
 
  // Close the browser
  await browser.close()
})
