function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return "Eligible for the job";
    } else {
        return "Not eligible for the job";
    }
}
//console.log(isEligibleForJob(25, 4, "Bachelor's Degree")); 
//console.log(isEligibleForJob(20, 1, "Bachelor's Degree")); 
//console.log(isEligibleForJob(21, 0, "Bachelor's Degree")); 
//console.log(isEligibleForJob(40, 5, "Master's Degree")); 
console.log(isEligibleForJob(48, 3, "Bachelor's Degree"));
