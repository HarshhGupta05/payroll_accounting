requireRole('admin');

function renderTable() {
    const tbody = document.getElementById('employeeTableBody');
    tbody.innerHTML = '';
    const employees = getEmployees();

    employees.forEach(emp => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td><input type="number" id="base-${emp.id}" value="${emp.base}"></td>
            <td><input type="number" id="bonus-${emp.id}" value="${emp.bonus}"></td>
            <td><button onclick="saveChanges(${emp.id})">Save</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function saveChanges(id) {
    const base = document.getElementById(`base-${id}`).value;
    const bonus = document.getElementById(`bonus-${id}`).value;
    
    const employees = getEmployees();
    const emp = employees.find(e => e.id === id);
    emp.base = parseFloat(base);
    emp.bonus = parseFloat(bonus);
    
    updateEmployee(emp);
    alert('Salary updated successfully.');
}

renderTable();