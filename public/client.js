
const selector = "#request-payment"
const getPaymentOptions = ()=>{
  const element = document.querySelector(selector);
  return {
    baseAmount: element.getAttribute('data-amount'),
    baseCurrency: element.getAttribute('data-currency')
  }
};

RequestPayments.init({
  selector,
  endpoint: '/request', 
  paymentOptions: getPaymentOptions,
  style:{ buttonVariant: "dark" }
});


