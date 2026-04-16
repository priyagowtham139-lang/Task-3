/ Task 1: Order System (setTimeout)

setTimeout(() => {
    console.log("Order received");
}, 1000);

setTimeout(() => {
    console.log("Preparing food");
}, 2000);

setTimeout(() => {
    console.log("Food ready");
}, 4000);

setTimeout(() => {
    console.log("Delivered");
}, 5000);

// Task 2: Digital Clock (setInterval)

let seconds = 0;
let clockInterval = setInterval(() => {
    let now = new Date();
    console.log(now.toLocaleTimeString());
    seconds++;
    if (seconds >= 10) {
        clearInterval(clockInterval);
        console.log("Clock stopped");
    }
}, 1000);

// LEVEL 2 — Intermediate (Callbacks + Async Thinking)
// Task 3: Callback Hell Simulation

function loginUser(callback) {
    setTimeout(() => {
        console.log("User Logged In");
        callback();
    }, 1000);
}

function getUserData(callback) {
    setTimeout(() => {
        console.log("User Data Fetched");
        callback();
    }, 1000);
}   

function getUserPosts() {
    setTimeout(() => {
        console.log("User Posts Fetched");
    }, 1000);
}

// Simulate Callback Hell
loginUser(() => {
    getUserData(() => {
        getUserPosts();
    });
});

// LEVEL 3 — Promises (Real API Logic)
// Task 4: Fake API Promise

let apiUrl = "https://fakestoreapi.com/products/1"

fetch(apiUrl)
    .then(response => {
        if (!response.ok) { 
            throw new Error("API Failed");
        }   
        return response.json();
    })
    .then(data => {
        console.log("Product Data: ", data);
    })
    .catch(error => {
        console.error("Error: ", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });