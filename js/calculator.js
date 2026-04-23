// Pure function for testability
function calculateNetPay(baseSalary, bonus, taxRate = 0.20) {
    const gross = parseFloat(baseSalary) + parseFloat(bonus);
    const taxDeduction = gross * taxRate;
    const net = gross - taxDeduction;
    
    return {
        gross: gross.toFixed(2),
        tax: taxDeduction.toFixed(2),
        net: net.toFixed(2)
    };
}