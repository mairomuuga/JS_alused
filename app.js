//elemendi loomine
const li =document.createElement('li');
const list=document.querySelector("ul");
//klassi m22ramine
li.className="collection-item";
li.appendChild(document.createTextNode("P22sta mati vangist!"));
const link = document.createElement("a");
link.className="secondary-content";
link.appendChild(document.createTextNode("X"));
//lisa atribuut v22rtusega
link.setAttribute("href", "#");
li.appendChild(link);
//elemendi lisamine teise elemendi sisse
list.appendChild(li);
	
console.log(li);