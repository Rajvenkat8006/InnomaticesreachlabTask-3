////Flight Ticket Booking System
//Write a function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) that returns the final price.

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let additionalCharge = 0;
    if (classType === "Business") {
        additionalCharge += 200;
    } else if (classType === "First") {
        additionalCharge += 500;
    }
    if (luggageWeight > 20) {
        additionalCharge += Math.ceil((luggageWeight - 20) / 10) * 50;
    }
    let totalFare = baseFare + additionalCharge;
    if (isStudent) {
        totalFare *= 0.85; 
    } else if (isSenior) {
        totalFare *= 0.90; 
    }
    
    return `Final price: $${totalFare.toFixed(2)}`;
}
//console.log(calculateFlightFare("Economy", 15, false, false));
//console.log(calculateFlightFare("Business", 25, false, false)); 
//console.log(calculateFlightFare("First", 35, true, false)); 
console.log(calculateFlightFare("Economy", 50, false, true)); 
