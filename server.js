const express = require('express');
const app = express();
const Request = require('./request').default;

const requestOptions = process.env.NODE_ENV === "production" ? {}:{
  apiUrl: "https://baguette-signer.request.network"
};
const request = new Request(process.env.API_KEY, requestOptions);

app.use(express.static('public'));
// workaround for fonts, should be removed when package is used
app.get("/@requestnetwork/*.woff2",(req, res)=>{
  res.redirect('https://cdn.glitch.com/d8b7821c-1897-435c-81c4-78fdce354672%2F478ee99fcfc90f4f.woff2');
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/request', (req,res) => {
  console.log('request received',req.body);
  //await request.getSignedTransaction({});
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
