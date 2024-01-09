//* a.
let newH1 = document.getElementsByTagName("h1");
//! behövs lista [0]
newH1[0].innerHTML = "I changed you";

//Samma sak som uppåt, fast querySelector väljer första element alltid. 
//! då behövs inget lista [0]
// let newH1 = document.querySelector("h1");

//* b.
let newH2 = document.getElementsByTagName("h2");
newH2[0].innerHTML = "Ändrade mha taggen";

//* c. 
let newDiv = document.getElementById("myId");

//* d. 
let newP = document.createElement("p");
newP.innerHTML = "Ett nytt barn har fötts";
newDiv.appendChild(newP);

//* e. 
let secondH1 = document.getElementById("barn");
// Lägga till ett element inuti annat element med +=
secondH1.innerHTML += "__Added text with +=";

//* f. 
//! alltid det är list, behövs [0]
newH2[0].remove();

//* g.
newDiv.removeChild(secondH1);

