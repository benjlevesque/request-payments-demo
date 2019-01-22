const getData  = ()=> {
  return {
    amount: 110,
    currency: "EUR"
  };
}

const SimplePayment = SimplePaymentModule.default;
const payment = new SimplePayment();
payment.init("#request-payment");
/*
payment.init("#request-payment", ()=> {
  const amount = document.getElementById("amount").val();
  return {
    amount,
    currency: "EUR"
  };
});

payment.init("#request-payment, {
    amount: 100,
    currency: "EUR"
});*/

