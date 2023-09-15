const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

//Destructuring
//Destructure the person object to extract the name and age properties into variables.

const {name, age} = person;
console.log(name, age);///John 30

//Use array destructuring to get the second and fourth items from the fruits array.

const [,secondFruit, , fourthFruit]= fruits;
console.log(secondFruit); //banana   

const { address: {city,country}} = person;
console.log(city); //New York