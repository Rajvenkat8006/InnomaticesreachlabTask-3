    //A customer wants to withdraw money from an ATM.
    //  Write a function atmWithdrawal(balance, amount, pin, enteredPin) that checks:
   
    function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }

    balance -= amount;
        return `Withdrawal successful. Remaining balance: ${balance}`;
}
console.log(atmWithdrawal(5000, 1200, 1234, 1234)); 
 
