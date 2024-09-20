// Create objects with data members
const sbiBank = {
    bankName: "SBI Bank",
    location: "Pune", // Replace with actual location
    accountNo: "1234567890", // Replace with actual account number
    ifsc: "SBIN0011234", // Replace with actual IFSC code
    interestRate: 7.5, // Replace with actual interest rate
  };
  
  const axisBank = {
    bankName: "Axis Bank",
    location: "Pune", // Replace with actual location
    accountNo: "9876543210", // Replace with actual account number
    ifsc: "UTIB0001234", // Replace with actual IFSC code
    interestRate: 8.0, // Replace with actual interest rate
  };
  
  const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Pune", // Replace with actual location
    accountNo: "1112223334", // Replace with actual account number
    ifsc: "HDFC0001234", // Replace with actual IFSC code
    interestRate: 7.8, // Replace with actual interest rate
  };
  
  const yesBank = {
    bankName: "Yes Bank",
    location: "Pune", // Replace with actual location
    accountNo: "4445556667", // Replace with actual account number
    ifsc: "YESB0001234", // Replace with actual IFSC code
    interestRate: 8.2, // Replace with actual interest rate
  };
  
  // Add a member function to show details
  function showDetails(bank) {
    console.log(`${bank.bankName}, ${bank.location}, ${bank.accountNo}, ${bank.ifsc}, ${bank.interestRate}`);
  }
  
  // Invoke the function on each object
  showDetails(sbiBank);
  showDetails(axisBank);
  showDetails(hdfcBank);
  showDetails(yesBank);