//E-commerce Coupon Redemption
//Write a function applyCoupon(orderAmount, couponCode) that calculates the final price.
function applyCoupon(orderAmount, couponCode) {
    const discount = 500;
    const shipping = 200;
    let finalAmount = orderAmount;
    
    if (couponCode === "DISSPLC12" && orderAmount > discount) {
        finalAmount *= 0.90; 
    } else if (couponCode === "FREESHIP" && orderAmount > shipping) {
        return `Final price: $${finalAmount.toFixed(2)} with free shipping`;
    }
    
    return `Final price: $${finalAmount.toFixed(2)}`;
}
//console.log(applyCoupon(500, "DISSPLC12")); 
//console.log(applyCoupon(230, "FREESHIP")); 
//console.log(applyCoupon(150, "DISSPLC12")); 
console.log(applyCoupon(700, "FREESHIP")); 
