const puppeteer = require('puppeteer');
const request = require('request');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
 
  // navigate to the page with the CAPTCHA
  await page.goto('https://2captcha.com/demo/normal');
 
  // take a screenshot of the CAPTCHA
  const screenshot = await page.screenshot();
 
  // convert the screenshot to a base64 encoded string
  const image = new Buffer(screenshot).toString('base64');
 
  // send the image to the 2Captcha API
  request.post({
    url: 'http://2captcha.com/in.php',
    formData: {
      key: '716b01a766db2b555ab2149acafb4035',
      method: 'base64',
      body: image
    }
  }, async (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      // get the CAPTCHA ID from the 2Captcha API response
      const captchaId = body.split('|')[1];
 
      // request the CAPTCHA solution from the 2Captcha API
      request.get({
        url: `http://2captcha.com/res.php?key=your_2captcha_api_key&action=get&id=${captchaId}`
      }, async (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          // get the CAPTCHA solution from the 2Captcha API response
          const captchaSolution = body.split('|')[1];
 
          // use the CAPTCHA solution in your Puppeteer script
          await page.type('#captcha-input', captchaSolution);
          await page.click('#submit-button');
        }
        await browser.close();
      });
    }
  });
})();
