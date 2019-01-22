const express = require("express");
const bodyParser = require("body-parser");
const Request = require("./request").default;


const request = new Request(process.env.API_KEY, "0x474467F3fac841b5C37B399B6D410B2a3EBC9E41");

const app = express();
app.use(bodyParser.json());
    
app.post("/request", request.handler());
const listener = app.listen(process.env.PORT);
