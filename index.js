const express = require('express');
const app = express();
const { scrapeLogic } = require("./scrapelogic");

const puppeteer = require('puppeteer');

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Render puppeteer server is up!")
});

app.get("/scrape", (req, res) => {
    scrapeLogic(res);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // Navigate to the Bing search page
    await page.goto('https://www.bing.com/', {
        waitUntil: 'networkidle0'
    });
    // Continue with typing text...

    const searchInput = await page.$('#sb_form_q'); // Replace with the actual selector for Bing's search box

    await searchInput.type('Puppeteer js');


    await page.keyboard.press('Enter');

    //await browser.close();

}

//main();
