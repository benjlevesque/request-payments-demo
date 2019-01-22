const getData  = ()=> {
  return {
    amount: 110,
    currency: "EUR"
  };
}

const SimplePayment = SimplePaymentModule.default;
new SimplePayment().init("#request-payment", {
  getData
});

