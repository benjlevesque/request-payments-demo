const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Request = require("./request").default;
const axios = require('axios');

  
const request = new Request(process.env.API_KEY, "0x4B7B1cBbd739A2A0e95b32B64FD3D249c671bd44", {
        apiUrl: "https://baguette-signer.request.network/api"
      });

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Express app!");
});

app.use(bodyParser.json());
app.get("*.woff2", (req, res) => {
  res.redirect(
    "https://cdn.glitch.com/d8b7821c-1897-435c-81c4-78fdce354672%2F478ee99fcfc90f4f.woff2"
  );
});
app.use(express.static("public"));

app.get("/", (re, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

    
app.post("/request", request.handler());

app.use(function(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});