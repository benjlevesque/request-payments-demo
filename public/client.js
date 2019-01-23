// OK~
const SimplePayment = SimplePaymentModule.default;
const payment = new SimplePayment();

// payment.init("#request-payment");

const apiEndpoint = '/request'

payment.init("#request-payment", () => ({
  allowedPaymentCurrencies: ["ETH"],
  baseAmount: 110,
  baseCurrency: "EUR"
}));


// ------------------------------------------------------------
// move to library

const convert = (amount, currency, toCurrency) => amount/100;


const api = async (endpoint, currency, amount, data) => {
  
    
  const rawResponse = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        currency,
        amount ,
        data
      })
  });
  const content = await rawResponse.json();

  return content
};

(async ()=>{
  const amount = convert(100, "EUR", "ETH")
  const result = await api(apiEndpoint, 'ETH',amount , {
        hello: 'world'
      });
  console.log(result);
})();
  
  