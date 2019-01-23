// OK~
const SimplePayment = SimplePaymentModule.default;
const payment = new SimplePayment();

const api =()=>(
  {
  "to": "0xd88ab9b1691340E04a5BBf78529c11d592d35f57",
  "value": "67527460000000000",
  "data": "0x9dbdd85c00000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001c00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000001688117320f0000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000008cfeea1a9667efad0feb2055a5b8ccbf8ebf1aa1d5000000000000000000000000000000000000000001feea1a9667efad0feb2055a5b8ccbf8ebf1aa1d500000000000000000000000000000000000000000000000000efaa83388c40002e516d624a574145537143736634524643714559376a6563436173686a387573586979444e664b745a4377777a4762000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000004b7b1cbbd739a2a0e95b32b64fd3d249c671bd44000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000efaa83388c400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041f5972571ab53cb0eabd3b3e39d229e8bf153dd2d6eb11f882e5c74a2acdaab3e20ffc9c7d9ad00d7b2815db41cb1ce0b155ffd8b972a1027a87b7f1a1fe04d6e0000000000000000000000000000000000000000000000000000000000000000"
});

payment.init("#request-payment",'/request', () => ({
  allowedPaymentCurrencies: ["ETH"],
  baseAmount: 7,
  baseCurrency: "EUR"
}),{ buttonVariant: "dark" });


