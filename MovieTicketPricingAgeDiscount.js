//Movie Ticket Pricing with Time and Age Discount
//Write a function calculateTicketPrice(age, showTime) that returns the final ticket price.

function calculateTicketPrice(age, showTime) {
    const standardPrice = 12;
    let discount = 0;
    if (age < 12) { 
        discount = 0.40;
        return `Total Price is:: ${discount}`
    } else if (age > 60) { 
        discount = 0.30;
        return `Total Price is:: ${discount}`
    } else if (showTime < 17) { 
        discount = 0.20;
        return `Total Price is:: ${discount}`
    }
    
    const finalPrice = standardPrice * (1 - discount);
    return `Total Price is:: ${finalPrice.toFixed(2)}`
 
}
//console.log(calculateTicketPrice(20, 13)); 
//console.log(calculateTicketPrice(10, 16)); 
//console.log(calculateTicketPrice(30, 17)); 
console.log(calculateTicketPrice(60, 14)); 
