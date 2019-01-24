
RequestPayments.init({
  selector:"#request-payment",
  endpoint: '/request', 
  paymentOptions: {
  allowedPaymentCurrencies: ["ETH"],
  baseAmount: 7,
  baseCurrency: "EUR"
  },
  style:{ buttonVariant: "dark" }
});


