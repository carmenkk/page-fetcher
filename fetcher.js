const request = require('request');
const fs = require("fs");


const http = process.argv[2];
const file = process.argv[3];

request(http, (error, response, body) => {
  if (error) {
    console.log('URL', error);
  }
  fs.writeFile(file, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${file}`);
    }
  });
});