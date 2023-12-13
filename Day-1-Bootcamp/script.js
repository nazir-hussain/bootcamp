
//Day-1: Assignment #Codekaro

/// Assignment 1: Array Operations
/// Objective: Practice adding, removing, and updating values in arrays.

// #1. Create an empty array called "fruits".
const fruits = [];
console.log(fruits); //[]

// #2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

fruits.push("apple", "banana", "orange");
console.log(fruits); //[ 'apple', 'banana', 'orange' ]

// #3. Remove the first fruit from the array.
fruits.shift();
console.log(fruits); //[ 'banana', 'orange' ]

// #4. Add "grape" to the end of the array.
fruits.push("grape");
console.log(fruits); //[ 'banana', 'orange', 'grape' ]

// #5. Update the second fruit in the array to "pear".
fruits.splice(1,1,"pear");
console.log(fruits);//[ 'banana', 'pear', 'grape' ]


//# 6. Print the final "fruits" array after performing the above operations.
console.log(fruits);//[ 'banana', 'pear', 'grape' ]




/////////////////////// ///////////////////////////// ///////////////////// ///////////////////////// /////////////////////

/// Assignment 2: Object Operations
/// Objective: Practice adding, removing, and updating values in objects.

// #1. Create an empty object called "person".

const person = {};
console.log(person);//{}


// #2. Add the following properties to the "person" object:
//    - name: "John"
//    - age: 30
//    - city: "New York"

person.name = "John";
person.age = 30;
person.city= "New York";
console.log(person);//{ name: 'John', age: 30, city: 'New York' }


// #3. Remove the "age" property from the "person" object.
delete person.age;
console.log(person);//{ name: 'John', city: 'New York' }

// #4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer";
console.log(person);//{ name: 'John', city: 'New York', job: 'Engineer' }

// #5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco"

// #6. Print the final "person" object after performing the above operations.
console.log(person);//{ name: 'John', city: 'San Francisco', job: 'Engineer' 



/////////////////////// ///////////////////////////// ///////////////////// ///////////////////////// /////////////////////

/// Assignment 3: Array of Objects Operations
// Objective: Practice adding, removing, and updating values in an array of objects.


// #1. Create an empty array called "cars".

const cars = [];
console.log(cars); //[]
 
// #2. Add three car objects to the "cars" array. Each car object should have the following properties:
//    - make: "Toyota"
//    - model: "Camry"
//    - year: 2018

cars.push({ make: "Toyota", model: "Camry", year: 2018
});
cars.push({ make: "Honda", model: "City", year: 2019
});
cars.push({ make: "Honda", model: "Jazz", year: 2022
});
console.log(cars);
// [
//     { make: 'Toyota', model: 'Camry', year: 2018 },
//     { make: 'Honda', model: 'City', year: 2019 },
//     { make: 'Honda', model: 'Jazz', year: 2022 }
//   ]


// #3. Remove the first car object from the "cars" array.
cars.shift();
console.log(cars);
// [
//     { make: 'Honda', model: 'City', year: 2019 },
//     { make: 'Honda', model: 'Jazz', year: 2022 }
//   ]


// #4. Add a new car object to the "cars" array with the following properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020
cars.push({
    make: "Honda", 
    model: "Civic", 
    year: 2020 
})
console.log(cars);
// [
//     { make: 'Honda', model: 'City', year: 2019 },
//     { make: 'Honda', model: 'Jazz', year: 2022 },
//     { make: 'Honda', model: 'Civic', year: 2020 }
//   ]


// #5. Update the "model" property of the second car object in the array to "Accord".
cars[1].model = "Accord"
// [
//     { make: 'Honda', model: 'City', year: 2019 },
//     { make: 'Honda', model: 'Accord', year: 2022 },
//     { make: 'Honda', model: 'Civic', year: 2020 }
//   ]
  


// #6. Print the final "cars" array after performing the above operations.
console.log(cars);
// [
//     { make: 'Honda', model: 'City', year: 2019 },
//     { make: 'Honda', model: 'Accord', year: 2022 },
//     { make: 'Honda', model: 'Civic', year: 2020 }
//   ]
  

// Remember to use console.log() to print the arrays and objects in the console to see the results of each operation.
