// NOK
const getData  = ()=> {
  return {
    amount: 110,
    currency: "EUR"
  };
}

// OK~
const SimplePayment = SimplePaymentModule.default;
const payment = new SimplePayment();

// NOK
payment.init(
  "#request-payment", {
  baseAmount: 70,
  baseCurrency: "EUR"
});


// NOK
(async () => {
  const rawResponse = await fetch('/request', {
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
})();