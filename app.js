const num1 = ([55, 26, 52, 32, 75, 12, 74, 21]);
const num2 = new Array([54, 25, 51, 31, 76, 11, 73, 20])
const mixed = [22, 'Tere', true, null, undefined, new Date()]

let val;

val = num1.length;
val = Array.isArray(num1)
val = num1[1];
//num1[1] = 100
val = num1.indexOf(75);
num1.push(250);
num1.unshift(150);
num1.pop();
num1.shift();
//num1.splice(1,4);
//num1.reverse();
val = num1.concat(num2);
val = num1.sort(function(x, y){
	return x - y
});


console.log(val);
console.log(num1);