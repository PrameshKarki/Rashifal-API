// *Import modules
const puppeteer = require("puppeteer");

const fetchRashial = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    ignoreDefaultArgs: ["--enable-automation"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.hamropatro.com/rashifal");

  let data = await page.evaluate(() => {
    let fetchedData = [];
    let date = document.querySelector(".date .nep").innerText;
    let temp = Array.from(document.querySelectorAll(".item"));
    temp.forEach((element) => {
      if (!element.children[0].innerText) return;
      fetchedData.push({
        name: element.children[0].innerText,
        imageURL: element.children[1].src,
        data: element.children[2].innerText,
      });
    });
    return {
      date,
      rashifal: fetchedData,
    };
  });
  await browser.close();
  return data;
};
