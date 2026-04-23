requireRole('employee');

// Hardcoding ID 1 to simulate a specific logged-in employee for the demo
const loggedInEmployeeId = 1; 

function loadPayslip() {
    const employees = getEmployees();
    const myData = employees.find(e => e.id === loggedInEmployeeId);
    
    if (myData) {
        document.getElementById('empName').textContent = myData.name;
        document.getElementById('empBase').textContent = myData.base;
        document.getElementById('empBonus').textContent = myData.bonus;
        
        const pay = calculateNetPay(myData.base, myData.bonus);
        
        document.getElementById('empTax').textContent = pay.tax;
        document.getElementById('empNet').textContent = pay.net;
    }
}

loadPayslip();