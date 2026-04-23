const STORAGE_KEY = 'payroll_data';

const initialData = [
    { id: 1, name: "Alice Smith", role: "employee", base: 60000, bonus: 5000 },
    { id: 2, name: "Bob Jones", role: "employee", base: 55000, bonus: 2000 }
];

function initDB() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    }
}

function getEmployees() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function updateEmployee(updatedEmp) {
    const employees = getEmployees();
    const index = employees.findIndex(e => e.id === updatedEmp.id);
    if (index !== -1) {
        employees[index] = updatedEmp;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    }
}

initDB();