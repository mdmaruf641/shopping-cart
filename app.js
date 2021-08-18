// product quentity count
function updateQuentity(product, price, isIncrising){
  const productQuentity = document.getElementById(product + '-quentity');
  let productNumber = productQuentity.value;
  if(isIncrising){
    productNumber = parseInt(productNumber) + 1;
  }
  else if(productNumber > 0){
    productNumber = parseInt(productNumber) - 1;
  }
  productQuentity.value = productNumber;
  
  // product amount
  const productTotal = document.getElementById(product + '-price');
  productTotal.innerText = productNumber * price;

  // calculate Total
  calculateTotal();
}


// total amount calculation
function getInputValue(product){
  const productInput = document.getElementById(product + '-quentity');
  const productQuentity = parseInt(productInput.value);
  return productQuentity;
}

function calculateTotal(){
  const phoneTotal = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 15;
  const totalAmount = subTotal + tax;
  
  // set sub total amount
  document.getElementById('sub-total').innerText = subTotal;  
  document.getElementById('total-tax').innerText = tax;  
  document.getElementById('total-amount').innerText = totalAmount;  
}


// phone quentity plus
document.getElementById('phone-plus').addEventListener('click', function(){
  updateQuentity('phone', 1219, true);
});
// phone quentity plus
document.getElementById('phone-minus').addEventListener('click', function(){
  updateQuentity('phone', 1219, false);
});

// case Quentity Plus
document.getElementById('case-plus').addEventListener('click', function(){
  updateQuentity('case', 59, true);
});

// case Quentity Minus
document.getElementById('case-minus').addEventListener('click', function(){
  updateQuentity('case', 59, false);
});
