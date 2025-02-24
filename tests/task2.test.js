const puppeteer = require("puppeteer");

describe("Test User City", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("User City matches the expected city", async () => {
    await page.goto("http://127.0.0.1:5500/");

    const userName = "Leanne Graham";
    await page.type("#userNameInput", userName);
    await page.click("#getUserButton");

    await page.waitForFunction(() => {
      const userCityText = document.querySelector("#userCity").textContent;
      return userCityText !== "Завантаження...";
    });

    const userCity = await page.$eval("#userCity", (el) =>
      el.textContent.trim()
    );

    expect(userCity).toBe("Gwenborough");
  });
});
