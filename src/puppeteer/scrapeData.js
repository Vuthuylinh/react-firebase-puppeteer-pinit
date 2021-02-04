const puppeteer = require('puppeteer');
const fse = require('fs-extra');
const fs = require('fs')

const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';

//GET TITLE and BODY of PAGE
const newArticle = async()=> {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' });

  let title = await page.title();
  // await page.waitForSelector('body')
  // const body = await page.evaluate(() => document.body.innerHTML)

  const html = await page.content();
  fs.writeFileSync("./outputHTML/index.html", html);
  
  await browser.close();
}

newArticle()
