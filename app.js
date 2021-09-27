//const id = 100
//let testid;

// == v6rdub
// != ei v6rdu
// === v6rdub ja toimub tyybikontroll
// !== ei v6rdu ja toimub tyybikontroll



//if (typeof testid !== 'undefined'){
//	console.log(`ID on ${id} - suurem kui 100 `);
//}else{
//	console.log(`ID on ${id} - v2iksem v6i v6rdne 100ga`);
//}
//
//console.log(typeof testid);
//
//const color = "green";
//
//if(color === "green"){
//	console.log(`kyta gaasi`);
//}else if(color === 'yellow'){
//	console.log('j22 seisma duhas');
//}else if(color === 'red'){
//	console.log('PIDURRRRR');
//}else{
//	console.log('seda v2rvi pole olemas valgusfooris');
//}
//
const name = "Katjusha";
const age = 19;

if(age > 0 && age <= 12){
	console.log(`${name} on taun`);
}else if(age > 12 && age <=18){
	console.log(`${name} a sen norm vanus`);
}else if(age > 18 && age <=30){
	console.log(`${name} kannatab timmida kyll`);
}

if(age <= 18 || age > 65){
	console.log(`${name} ei saa registreerida`);
}else{
	console.log(`${name} saab registreerida`);
}