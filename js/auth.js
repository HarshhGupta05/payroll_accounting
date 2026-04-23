function loginAs(role) {
    localStorage.setItem('currentUserRole', role);
    if (role === 'admin') window.location.href = 'admin.html';
    if (role === 'employee') window.location.href = 'employee.html';
}

function requireRole(requiredRole) {
    const currentRole = localStorage.getItem('currentUserRole');
    if (currentRole !== requiredRole) {
        alert("Access Denied. Redirecting to login.");
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('currentUserRole');
    window.location.href = 'index.html';
}