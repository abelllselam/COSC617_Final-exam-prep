const cheerio = require("cheerio");
const axios = require("axios");

const url = "http://quotes.toscrape.com/";

async function scrapPage(url) {
  //accessing the website
  try {
    const { data: html } = await axios.get(url);

    const $ = cheerio.load(html);
    $(".author").each((i, element) => {
      if (i < 10) {
        console.log("The Author is: ", i + 1, ": ", $(element).text());
      }
    });
  } catch (error) {
    console.error("The error: ", error);
  }
}

scrapPage(url);
