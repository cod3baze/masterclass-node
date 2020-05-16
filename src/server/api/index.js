const http = require("http");
const URL = require("url");
const fs = require("fs");
const path = require("path");

const data = require("./urls.json");

http
  .createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query;

    // todos recursos
    if (!name || !url) return res.end("Create" + JSON.stringify(data));

    if (del) {
      data.urls = data.urls.filter((item) => item.url !== url);
      fs.readFile(path.join(__dirname, "urls.json"), (err, contect) => {});
    }

    res.end(JSON.stringify(data));
  })
  .listen(5000, () => console.log("API is running"));
