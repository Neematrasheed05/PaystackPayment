const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_bde26b159f527ecf4456af0c69cb28ef6ee2e873', 
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    currency: 'KES',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), 
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}