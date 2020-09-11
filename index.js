// const puppeteer = require('puppeteer');
const request = require('request');
opts = {
    url : 'https://www.instagram.com/prabhu_india/?__a=1'
};
request.get(opts, function (error, response, body) {
    //Handle error, and body
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});
/*
(async () => {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"], silent: true };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // set viewport and user agent (just in case for nice viewing)
    await page.setViewport({width: 1366, height: 768});
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

    // go to Instagram web profile (this example use Cristiano Ronaldo profile)
    await page.goto('https://www.instagram.com/prabhu_india/?__a=1').then(() => {
        return page.content();
    }).then((htmlDocument) => {
        console.log(htmlDocument);
    });

    let pageUrl = await page.evaluate(() => {
        return window.location.href;
    })

    // display the result to console
    console.log({ 
        pageUrl
    });

    // close the browser
    await browser.close();
})();
*/