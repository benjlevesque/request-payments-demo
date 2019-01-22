const axios = require("axios")
const SIGNER_URL = 'https://baguette-signer.request.network/api/sign-request';

const API_KEY = process.env.API_KEY;

const requestData = (ethAmount) =>  {
    currency : 'ETH',
    paymentAddress : '0x474467F3fac841b5C37B399B6D410B2a3EBC9E41',
    expectedAmount : eth,
    data: { description: 'request-signer signed request' },
}

async function signRequest() {
  // you need get the necessary information to sign
  // pass in your API_KEY to be able to sign requests
  
  const response = await axios.post(SIGNER_URL, requestData, {headers: { authorization: `${API_KEY}` }})
  return response.data;
}