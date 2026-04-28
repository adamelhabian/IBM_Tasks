let employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
  //... More employee records can be added here
];

function displayEmployees() {
  let totalEmployees = employees
    .map(
      (employee) =>
        `<p>employee id :${employee.id} His Name: ${employee.name} - His Department ${employee.department} -His Salary $${employee.salary}</p>`,
    )
    .join(" ");
  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => (acc += employee.salary),
    0,
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
  let HREmployees = employees.filter((emp) => emp.department === "HR");

  let HREmployeesDisplay = HREmployees.map(
    (employee, index) =>
      `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`,
  ).join(" ");
  document.getElementById("employeesDetails").innerHTML = HREmployeesDisplay;
}

function findEmployeeById(empid) {
  const foundEmployee = employees.find((employee) => employee.id === empid);
  if (foundEmployee) {
    document.getElementById("employeesDetails").innerHTML =
      `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee has been found with this ID";
  }
}
