// Example usage:
const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
];

// 1. function to filter 18 years and older users
function filterAdults(users) {
    let out = users.filter((user) => user.age > 18);
    console.log(out);
}

filterAdults(users);


// 2. funtion to get names of all users
function getUserNames(users) {
    let out = users.map((user) => user.name);
    console.log(out);
}

getUserNames(users);


// 3. function to group users by city name
function usersByCity(users) {
    let out = users.reduce((acc, user) => {
        let { city } = user;
        if (!acc[city]) {
            acc[city] = [];
        }
        acc[city].push(user);
        return acc;
    }, {})
    console.log(out);
}

usersByCity(users);