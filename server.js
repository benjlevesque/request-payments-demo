const express = require("express");
const bodyParser = require("body-parser");
const request = require("@requestnetwork/payments-server")(process.env.API_KEY);


const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.get("*.woff2", (req, res) => {
  res.redirect(
    "https://cdn.glitch.com/d8b7821c-1897-435c-81c4-78fdce354672%2F478ee99fcfc90f4f.woff2"
  );
});

    
app.post("/request", request.handler(process.env.ETH_ADDRESS));

app.use(function(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});