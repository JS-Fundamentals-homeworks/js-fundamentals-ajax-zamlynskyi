const puppeteer = require("puppeteer");

describe("Провірка відображення користувачів", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Користувачі відображені на сторінці", async () => {
    await page.goto("http://127.0.0.1:5500/");

    await page.waitForSelector(".usersList li");

    const userItems = await page.$$eval(".usersList li", (items) =>
      items.map((item) => item.textContent)
    );

    expect(userItems.length).toBeGreaterThan(0);
  });
});
