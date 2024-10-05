let employees = [];
let idCounter = 1;

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const messages = document.getElementById('messages');

    // Clear previous messages
    messages.innerHTML = '';

    if (!name || !profession || !age) {
        messages.innerHTML = '<p class="error">All fields are required.</p>';
        return;
    }

    // Create employee object
    const employee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };

    // Add employee to array
    employees.push(employee);

    // Clear form fields
    document.getElementById('employeeForm').reset();

    // Display success message
    messages.innerHTML = '<p class="success">Employee added successfully!</p>';

    // Update the employee list
    displayEmployees();
});

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const div = document.createElement('div');
        div.className = 'employee-item';
        div.innerHTML = `
            <span>${employee.name} (${employee.profession}, ${employee.age})</span>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(div);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
