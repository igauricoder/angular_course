function checkEligibility(gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
    console.log("Congrats " + candidateName + ", you are eligible for TCS interview.");
  } else {
    console.log("Unfortunately " + candidateName + ", you are not eligible for interview");
  }
}

checkEligibility(80, 86, 90, "gauri");
checkEligibility(70, 65, 55, "aditi");
checkEligibility(60, 79, 88, "pranjal");
