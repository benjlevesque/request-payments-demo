// OK~
const SimplePayment = SimplePaymentModule.default;
const payment = new SimplePayment();

// payment.init("#request-payment");

const endpoint = '/request'

payment.init("#request-payment", () => ({
  allowedPaymentCurrencies: ["ETH"],
  baseAmount: 110,
  baseCurrency: "EUR"
}));



// move to library
(async () => {
  const convert = (amount, currency, toCurrency) => ({
    return 100;
  });
    
  const rawResponse = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
    {
      currency: 'ETH',
      amount: "1001000000000000000",
      data: {
        hello: 'world'
      }
    })
  });
  const content = await rawResponse.json();

  console.log(content);
});