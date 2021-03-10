// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");

describe("CryptoSelectorTest", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("CryptoSelectorTest", async function () {
    await driver.get("https://finance.yahoo.com/quote/ETH-USD/");
    {
      const elements = await driver.findElements(
        By.xpath('//*[@id="quote-header-info"]/div[3]/div[1]/div/span[1]')
      );
      assert(elements.length);
    }
  });
});
