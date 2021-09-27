let val;

const today = new Date();

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

let birthday = new Date('11/9/2001')

console.log(today);
console.log(birthday);