// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami/", function(request, response) {
  var headers = request.headers;
  response.json({
    ipaddress: headers['x-forwarded-for'].substring(0, headers['x-forwarded-for'].indexOf(',')),
    language: headers['accept-language'],
    software: headers['user-agent']
  });
})
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
