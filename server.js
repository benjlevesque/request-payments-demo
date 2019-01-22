const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Request = require('./request').default;

const requestOptions = process.env.NODE_ENV === "production" ? {}:{
  apiUrl: "https://baguette-signer.request.network/api"
};
const request = new Request(process.env.API_KEY, requestOptions);

const jsonParser =bodyParser.json();

app.use(express.static('public'));
// workaround for fonts, should be removed when package is used
app.get("/@requestnetwork/*.woff2",(req, res)=>{
  res.redirect('https://cdn.glitch.com/d8b7821c-1897-435c-81c4-78fdce354672%2F478ee99fcfc90f4f.woff2');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/request',jsonParser, async (req,res) => {
  const {currency, amount, data} =req.body;
  console.log('request received',{
    currency, amount, data
  });
  try{
    const response = await request.getSignedTransaction({
          amount,
          currency,
          data,
          paymentAddress:"0x474467F3fac841b5C37B399B6D410B2a3EBC9E41"
        });
    const x = await response.json();
    response.write(x);
  }
  catch(err)
  {
    console.log(err);
    
  }

});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
