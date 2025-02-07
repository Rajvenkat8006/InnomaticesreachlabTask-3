function calculateFinalAmount(orderAmount){
  let discount = 0;
  let shipping = 0;

  if(orderAmount> 1000){
    discount =orderAmount*0.20;
  }
  else if(orderAmount>= 500 && orderAmount <=1000){
    discount = orderAmount*0.10;
  }
  else{
    discount = 0;
  }
  let amountAfterDiscount = orderAmount - discount;
  if(amountAfterDiscount>50){
    shipping =0;
  }
  else{
    shipping =10;
  }
  let finalAmount = amountAfterDiscount +shipping;
  return finalAmount;
}
console.log(calculateFinalAmount (2000));
console.log(calculateFinalAmount(200));

