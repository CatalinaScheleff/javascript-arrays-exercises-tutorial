let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	let date = new Date()
	let age = date.getFullYear() - person.birthDate.getFullYear();
	
	if (date.getMonth() - person.birthDate.getMonth() < date.getMonth()) {
		age -= 1
	}
	if (date.getFullYear() === person.birthDate.getFullYear() && date.getMonth() === person.birthDate.getMonth() && person.birthDate.getDate() < date.getDate()) {
		age -= 1
	}
	return "Hello, my name is " + person.name + " and I am " + age + " years old"
};

console.log(people.map(simplifier));
