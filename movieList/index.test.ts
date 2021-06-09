import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('file:///C:/Users/Elijah/Documents/devmtn/Week%206/Day%203/Lab/automation/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test('add move to list', async () => {
    await driver.findElement(By.xpath('//*/input')).sendKeys('superman\n')
    await (await driver.findElement(By.xpath('//span[contains(text(),"superman")]'))).click()
    await (await driver.findElement(By.id("superman"))).click()
    await driver.sleep(3000)
})

