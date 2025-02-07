//Electricity Bill Calculation with Peak Hours
//Write a function calculateElectricityBill(units, timeOfDay) that returns the total bill.

function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }
    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.10;
    }
    
    return (units * rate).toFixed(2);
}
//console.log(calculateElectricityBill(50, 10)); 
//console.log(calculateElectricityBill(150, 21)); 
//console.log(calculateElectricityBill(350, 7)); 
console.log(calculateElectricityBill(250, 14)); 
