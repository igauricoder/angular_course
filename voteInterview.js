function checkVoteEligibility(age) {
    if (age <= 0 || age >= 130) {
      console.log("In valid data");
    } else if (age < 18) {
      console.log("not eligible for vote");
    } else {
      console.log("eligible for vote");
    }
  }
  
  // Test Cases
  checkVoteEligibility(45);
  checkVoteEligibility(17);
  checkVoteEligibility(8);
  checkVoteEligibility(20);
  checkVoteEligibility(-10);
  checkVoteEligibility(200);
  checkVoteEligibility(0);
  checkVoteEligibility(null);
