 // Task -1  E-Commerce Discount System

// Concepts: function, parameters, return, condition

function calculateDiscount(productName,price) {
    let finalPrice;

    if(price >  1000){
        finalPrice = price - (price * 20 / 100);
    }else{
        finalPrice = price - (price * 10 / 100);
    }
    return Product: ${productName}\nFinal Price: ${finalPrice};
}

console.log(calculateDiscount("Shoe", 2000));

// Task -2 Order Processing using Callback

// Concepts: callback, higher order function

function payment(amount){
    console.log(Payment of ${amount} successfull.);
}

function orderSucess(){
    console.log("Order Delivered");
}

function placeOrder(callback){
    console.log("Order Placed");
    payment(500);
    callback();
}

placeOrder(orderSucess);

// Task - 3 Employee Data Loop System

// Concepts: loop, array, object

let employees = [
    {name:"Priya", salary: 50000},
    {name:"Harika", salary: 70000},
];

for(let i = 0; i < employees.length; i++){
    let employee = employees[i];


    if(employee.salary > 60000){
        console.log(employee.name + " High salary");
    }else{
        console.log(employee.name + " Low salary");
    }
}

// Task - 4 Login Attempts(While Loop)

// concepts: while loop

const correctPass = '1234';

let attempts = 0;
let maxAttempts = 3;
let password;

while(attempts < maxAttempts){
    attempts++;
    console.log("Attempt "+ attempts);

    //password = prompt("Enter your password: ");

    if(password === correctPass){
        console.log("Login Success.");
        break;
    }
}
if(password !== correctPass){
    console.log("Login failed. Max attempts reached.");
}

// Task 5: Coupon Generator (Generator Function)

// Concepts: generator

function* couponGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
const coupons = couponGenerator();
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

//  Task 6: Shopping Cart Total (for...of)

// Concepts: for...of

let cart = [100,200,300,400];

let total = 0;

for(let price of cart){
    total += price;
}

console.log("Final amount: " + total);

// Task 7: User Profile System (for...in)

// Concepts: for...in
let userProfile = {
    name: "Shakthipriya",
    role: "Developer",
    location: "India"
}
for(let key in userProfile){
    console.log(key + ": " + userProfile[key]);
}

// Task 8: Factory Pattern (Function Reuse)

// Concepts: return, reuse

function createPhone(){
    return "Phone";
}
function createBattery(){
    return "Battery";
}

function createCharger(){
    return "Charger";
}
let order = createPhone() + " + " + createBattery() + " + " + createCharger();
console.log("Your Order: " + order); 

// Task 9: College Form with Default Values

// Concepts: default parameters

function collegeForm(name,age,department = "Not Assigned"){
    console.log(Name: ${name}, Age: ${age}, Department: ${department});
}
collegeForm("Priya", 29, "Computer Science");
collegeForm("Sangeetha", 22);

// Task 10: Currying - EMI Calculator

// Concepts: currying

function emi(principal){
    return function(rate){
        return function(time){
            return (principal * rate * time) / 100;
        }
    }
}

let result = emi(10000)(10)(2);
console.log("EMI Amount: " + result);

// Task 11: Even / Odd Analyzer

// Concepts: condition, loop

let num = 10;

for(let i = 1; i <= num; i++){
    if(i % 2 === 0){
        console.log(i + " is Even");
    }else{
        console.log(i + " is Odd");
    }
}   

// Task 12: Function Scope Debugging

// Concepts: var, let, const

if(true){
    var a = 10; // it work because var is function scope/global scope
    let b = 20; // it will not work because let is block scope
    const c = 30; // it will not work because const is block scope
}
console.log(a); // 10
//console.log(b); // ReferenceError
//console.log(c); // ReferenceError

// Task 13: Real-Time Alert System (IIFE)

// Concepts: IIFE

(function announcument(){
    alert("Flash Sale: 50% OFF on Shirts");
})()

//Task 14: Marks Calculator with Return

// Concepts: return

function calculateMarks(marks){

    let total = 0;
    let average = 0;
    for(let mark of marks){
        total += mark;
    }
    average = total / marks.length;
    return { total, average };

}   
let marks = [80, 90, 70];
let totalMarks = calculateMarks(marks);
console.log("Total Marks: " + totalMarks.total);
console.log("Average Marks: " + totalMarks.average);

// Task 15: Retry Offer System (Generator + Condition)

// Concepts: generator, done

function* retryOffer(){
    yield "10% OFF";
    yield "20% OFF";
    yield "30% OFF";
}   

let offer = retryOffer();
console.log(offer.next().value); // 10% OFF
console.log(offer.next().value); // 20% OFF
console.log(offer.next().value); // 30% OFF
if(offer.next().done){
    console.log("All Offers Expired.");
}