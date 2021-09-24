const name = 'Mairo'; 
const surname = 'Muuga'; 
const age = 17; 
const text = 'Tere, olen Mairo!'; 
const tags = 'arendus, operatsiooni süsteemid, programmeerimine';

let val;

// concatenation
val = name + ' ' + surname;

// append
val = 'Anna ';
val += surname;

val = text + " Minu tegevusalad on " + tags;

// escaping \

val = 'See on \'jutumärkides\'';

// suuruse vahetus
val = name.toUpperCase();
val = surname.toLowerCase();

val = surname[0];
val = surname.indexOf('a');
val = surname.lastIndexOf('a');

val = surname.charAt(2);
val = surname.charAt(surname.length - 1);

val = surname.substring(0, 4)
val = surname.slice(0, 4)
val = surname.slice(-3);


val = tags.split(',');
console.log(val);