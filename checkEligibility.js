// Function expression to check TCS interview eligibility
const checkEligibility = (gradScore, hscScore, sscScore, candidateName) => {
    const isEligible = gradScore >= 70 || hscScore >= 80 || sscScore >= 90;
    console.log(isEligible ? `Congrats ${candidateName}, you are eligible for TCS interview.` : `Unfortunately ${candidateName}, you are not eligible for interview`);
  };
  
  // Invoking the function with different values
  checkEligibility(80, 86, 90, "GAURI");
  checkEligibility(70, 65, 55, "ADITI");
  checkEligibility(60, 79, 88, "PRANJAL");
  