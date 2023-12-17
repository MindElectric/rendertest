const puppeteer = require('puppeteer');

const searchInput = await page.$('#sb_form_q'); // Replace with the actual selector for Bing's search box

await searchInput.type('Puppetter js');

await page.keyboard.press('Enter');
