// Function to calculate the Net salary
function netSalary(){
    let basicSalary
    let benefits

// Calculate PAYEE(Tax)
    let payee = Math.floor((basicSalary + benefits) * 0.25);

// Calculate NHIF Deductations
    const NHIFDeductations = 900;

// Calculate NSSF Deductations
    let NSSFDeductions = Math.floor(basicSalary * 0.06);    

// Calculate Gross Salary
    let grossSalary = Math.floor(basicSalary + benefits);

// Calculate Housing levy
    let HousingLevy = Math.floor(grossSalary * 0.015);

// Calculate Net Salary
    let netSalary = grossSalary - payee - NHIFDeductations - NSSFDeductions - HousingLevy;

// Return the value of Net Salary
    return netSalary;

}
