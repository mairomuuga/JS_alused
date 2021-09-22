let val;

// Number to String
val = String(555);
val = String(4+4);
val = String(5.6);

// Boolean to String
val = String(true);
val = String(false);

//Objekt to String
val = String(new Date());

//Massiiv to String
val = String([1, 3, 5]);

//To String
val = (5).toString();
val = (true).toString();


//String to Number
val = Number("5");

//Boolean to Number
val = Number(true);

//null to number
val = Number(null);

//tekst to Number
val = Number("paks chris");

// Massiiv to number 
val = Number([1, 2, 3]);

//String to Number
val = parseInt('100.30');
val = parseFloat('100.30');



console.log(typeof val);
console.log(val);