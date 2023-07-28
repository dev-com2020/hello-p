const { chromium } = require('playwright');
const browser = await chromium.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page.goto('https://www.meestpost.com/pl/')

await page.setViewportSize({ width: 1522, height: 874 })

await page.waitForSelector('#vs1__combobox')
await page.click('#vs1__combobox')

await page.waitForSelector('.select > .v-select > #vs1__listbox > #vs1__option-16 > .countries-option-wr')
await page.click('.select > .v-select > #vs1__listbox > #vs1__option-16 > .countries-option-wr')

await page.waitForSelector('.select > .v-select > #vs2__combobox > .vs__selected-options > .vs__search')
await page.click('.select > .v-select > #vs2__combobox > .vs__selected-options > .vs__search')

await page.waitForSelector('.select > .v-select > #vs2__listbox > #vs2__option-0 > .countries-option-wr')
await page.click('.select > .v-select > #vs2__listbox > #vs2__option-0 > .countries-option-wr')

await page.waitForSelector('#calculator-index-page > .form > .form-row > .form-col > .btn')
await page.click('#calculator-index-page > .form > .form-row > .form-col > .btn')

await navigationPromise

await page.waitForSelector('#form-second-step > .sending-methods > div > #carrier-box-107 > .checkbox')
await page.click('#form-second-step > .sending-methods > div > #carrier-box-107 > .checkbox')

await page.waitForSelector('#form-second-step > .delivery-methods > div > #carrier-box-39 > .checkbox')
await page.click('#form-second-step > .delivery-methods > div > #carrier-box-39 > .checkbox')

await page.waitForSelector('#form-second-step-submit-btn')
await page.click('#form-second-step-submit-btn')

await page.waitForSelector('#send-parcel-sender-first-name')
await page.click('#send-parcel-sender-first-name')

await page.type('#send-parcel-sender-first-name', 'Tomek')

await page.type('#send-parcel-sender-last-name', 'Kaniecki')

await page.type('#send-parcel-sender-company-name', '')

await page.waitForSelector('#send-parcel-sender-last-name')
await page.click('#send-parcel-sender-last-name')

await page.waitForSelector('#sender-notes-for-courier')
await page.click('#sender-notes-for-courier')

await page.waitForSelector('#send-parcel-sender-zip-code')
await page.click('#send-parcel-sender-zip-code')

await page.type('#send-parcel-sender-zip-code', '26212')

await page.waitForSelector('#send-parcel-sender-city')
await page.click('#send-parcel-sender-city')

await page.waitForSelector('#send-parcel-sender-street')
await page.click('#send-parcel-sender-street')

await page.type('#send-parcel-sender-street', 'Romiiiii')

await page.type('#send-parcel-sender-house-number', '4')

await page.type('#send-parcel-sender-apartment', '44')

await page.type('#send-parcel-sender-phone', '(+49)5432-321124')

await page.type('#send-parcel-sender-email', '')

await page.waitForSelector('#send-parcel-sender-email')
await page.click('#send-parcel-sender-email')

await browser.close()