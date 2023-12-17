const puppeteer = require("puppeteer");

const scrapeLogic = async (res) => {

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });

    try {
        const page = await browser.newPage();

        // Navigate the page to a URL
        await page.goto('https://www.bing.com/', {
            waitUntil: 'networkidle0'
        });

        // Set screen size
        await page.setViewport({ width: 1080, height: 1024 });

        // Continue with typing text...

        const searchInput = await page.$('#sb_form_q'); // Replace with the actual selector for Bing's search box

        await searchInput.type('Puppeteer js');


        await page.keyboard.press('Enter');

        const url = await page.url();

        // Print the full title
        console.log('The title of this blog post is "%s".', url);

        res.send(url);
    } catch (e) {
        console.error(e);

    } finally {

        await browser.close();
    }

}
module.exports = { scrapeLogic };