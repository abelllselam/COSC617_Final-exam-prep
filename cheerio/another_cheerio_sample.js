const cheerio = require("cheerio");
const axios = require("axios");

const url = "http://quotes.toscrape.com/";

async function scrapePage(url) {
  try {
    const { data: html } = await axios.get(url);

    const $ = cheerio.load(html);
    $(".quote")
      .slice(0, 10)
      .each((i, ele) => {
        const quote = $(ele).find(".text").text().trim();
        const author = $(ele).find(".author").text().trim();

        console.log(i + 1, quote, author);
      });
  } catch (error) {
    console.log("Error message:", error);
  }
}

scrapePage(url);
