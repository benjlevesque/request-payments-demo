// OK~
const SimplePayment = SimplePaymentModule.default;
const payment = new SimplePayment();

payment.init("#request-payment",'/request', () => ({
  allowedPaymentCurrencies: ["ETH"],
  baseAmount: 7,
  baseCurrency: "EUR"
}),{ buttonVariant: "dark" });


