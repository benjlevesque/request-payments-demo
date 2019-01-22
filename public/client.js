const getData  = ()=> {
  return {
    amount: 110,
    currency: "EUR"
  };
}

const SimplePayment = SimplePaymentModule.default;
const payment = new SimplePayment();

payment.init("#request-payment"/*,  {
  baseAmount: 70,
  baseCurrency: "EUR"
}*/);

