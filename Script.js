 // Task 1: E-commerce Cart Total

let cart = [
    {name: "Earings", price: 500, qty: 2},
    {name: "Chokers", price: 1500, qty: 1},
    {name: "Bracelets", price: 300, qty: 3}
];

// Calculate total price using reduce

let totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Cart Price: " + totalPrice);

// Print only products above 1000 price using filter

let expensiveItems = cart.filter(item => item.price > 1000);
console.log("Expensive Items: ", expensiveItems);

// Get all product names in uppercase using map

let productNames = cart.map(item => item.name.toUpperCase());
console.log("Product Names in Uppercase: ", productNames);

// Task 2: Student Result System

let students = [
    {name: "Naveen", marks: 85},
    {name: "Meena", marks: 45},
    {name: "yuga", marks: 60},
    {name: "Gowtham", marks: 30}
]

// Find failed students (marks < 50)

let failedStudents = students.filter(student => student.marks < 50);
console.log("Failed Students: ", failedStudents);

// Check if any student got distinction (>80) using some

let hasDistinction = students.some(student => student.marks > 80);
console.log("Any student got distinction? " + hasDistinction);

// Check if all students passed (>35) using every

let allPassed = students.every(student => student.marks > 35);
console.log("Did all students pass? " + allPassed);

// Find first student who failed using find

let firstFailedStudent = students.find(student => student.marks < 50);
console.log("First Failed Student: ", firstFailedStudent);

// Task 3: Employee Salary Analysis

let employees = [
    {name: "A", salary: 35000},
    {name: "B", salary: 40000},
    {name: "C", salary: 25000},
    {name: "D", salary: 40000}
]

// Increase salary by 10% using map

let updatedSalaries = employees.map(employee => {
    return {
        name: employee.name,
        salary: employee.salary * 1.10
    }
});

console.log("Updated Salaries: ", updatedSalaries);

// Get employees with salary > 30000

let highEarners = employees.filter(employee => employee.salary > 30000);
console.log("High Earners: ", highEarners);

// Calculate total salary expense

let totalSalaryExpense = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary Expense: " + totalSalaryExpense);

// Sort employees by highest salary

let sortedEmployees = employees.sort((a, b) => b.salary - a.salary);
console.log("Employees sorted by salary: ", sortedEmployees);   

// Task 4: String Real Use Case (Search System)

let products = ["Laptop", "Mobile", "Tablet", "Camera"]

// Check if "Mobile" exists using includes

let hasMobile = products.includes("Mobile");
console.log("Is Mobile available? " + hasMobile);

// Convert all to lowercase

let lowerCaseProducts = products.map(product => product.toLowerCase());
console.log("Products in lowercase: ", lowerCaseProducts);

//Find index of "Tablet"

let tabletIndex = products.indexOf("Tablet");
console.log("Index of Tablet: " + tabletIndex);

// Convert array to string using join("-")

let productString = products.join("-");
console.log("Products as string: " + productString);

// Task 5: Date Real-Time Task (Age Calculator)

// Take DOB (hardcode or prompt)

let dob = new Date("1997-08-07");
let today = new Date();
//Calculate current age
let age = today.getFullYear() - dob.getFullYear();
let monthDiff = today.getMonth() - dob.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
}
console.log(You are ${age} years old);

// Task 6: Login Validation System

let users = [
    {username: "admin", password: "1234"},
    {username: "user", password: "abcd"}
]

//Check if user exists using find

function validateLogin(username, password) {
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials.");
    }
}
validateLogin("admin", "1234"); // Valid
validateLogin("user", "wrong"); // Invalid

// Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30]

// Get all even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers: ", evenNumbers);

// Check if any odd number exists
let hasOdd = numbers.some(num => num % 2 !== 0);
console.log("Any odd number exists? " + hasOdd);

//Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);
console.log("Are all numbers even? " + allEven);

//Find first number > 20
let firstGreaterThan20 = numbers.find(num => num > 20);
console.log("First number greater than 20: " + firstGreaterThan20);

// Task 8: 

let orders = [
    {id: 1, amount: 500, status: "delivered"},
    {id: 2, amount: 1500, status: "pending"},
    {id: 3, amount: 2000, status: "delivered"}
]

// Total revenue of delivered orders
let totalRevenue = orders.reduce((total, order) => {
    if (order.status === "delivered") {
        return total + order.amount;
    }
    return total;
}, 0);
console.log("Total Revenue from Delivered Orders: " + totalRevenue);

// Get all pending orders
let pendingOrders = orders.filter(order => order.status === "pending");
console.log("Pending Orders: ", pendingOrders);

// Check if any order > 1000
let hasHighValueOrder = orders.some(order => order.amount > 1000);
console.log("Any order greater than 1000? " + hasHighValueOrder);

//Sort orders by amount (ascending)
let sortedOrders = orders.sort((a, b) => a.amount - b.amount);
console.log("Orders sorted by amount: ", sortedOrders);