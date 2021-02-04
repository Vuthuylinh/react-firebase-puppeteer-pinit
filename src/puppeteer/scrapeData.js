const puppeteer = require('puppeteer');

const fs = require('fs')

const url = 'https://dev.to/nickytonline/pairing-with-community-member-dan-ott-2ge';
const newArticle = async()=> {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' });

//GET TITLE and BODY of PAGE
  let title = await page.title();
  await page.waitForSelector('body')
  const body = await page.evaluate(() => document.body.innerHTML)

// console.log("TITLE: ",title)
// console.log("BODY: ",body)

//EXTRACT HTML FILE
  const html = await page.content();
  fs.writeFileSync("./outputHTML/index.html", html);

//
   const htmlToString = JSON.stringify(html);

  //  console.log("HTML TO STRING: ",htmlToString)
  await browser.close();
}

newArticle()
