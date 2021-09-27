const person = {
	firstName: 'Kadi',
	lastName: 'Tamm',
	age: 22,
	email: 'Kadi.Tamm@puhastusteenindaja.ee',
	hobbies: ['koristamine', 'kleptomanism'],
	address: {
		city: 'Tallinn',
		country: 'Estonia',

	},
	getBirthYear: function(){
		return 2021 - this.age;
	}
};

let val;

val = person;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[0];
val = person.address['city'];
val = person.getBirthYear();

const people = [
	{name: 'Kati', age: 35},
	{name: '6ix9ine', age: 50},
	{name: 'TayK', age: 69}
];

val = people;
for(let i = 0; i < people.length; i++){
	console.log(people[i].name);
}
console.log(val);