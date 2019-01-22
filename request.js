const axios = require("axios");
const SIGNER_URL = 'https://baguette-signer.request.network/api/sign-request';

const API_KEY = process.env.API_KEY;


const signRequest = async (ethAmount, paymentAddress) => {
  // you need get the necessary information to sign
  // pass in your API_KEY to be able to sign requests
  
  const data = ({
    currency : 'ETH',
    paymentAddress,
    expectedAmount : ethAmount,
    data: { 
      description: 'request-signer signed request' 
    }
  });
  
  
  const response = await axios.post(SIGNER_URL, data, {
    headers:  { 
      authorization: `${API_KEY}` 
    }
  });
  return response.data;
}

module.exports= { signRequest };