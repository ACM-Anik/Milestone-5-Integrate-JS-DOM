// 1. Where to add 
const placesList = documents.getElementById('places-list');
// 2. What to be added 
const li = document.createElement('li');
li.innerText = "pahartoli bon";

// 3. add the child 
placesList.appendChild(li);



// 1. Where to add
const mainContainer = document.getElementsById("main-container");

// 2. what to b added 
const section = document.createElement('section');
const h1 = document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText ="Khichori";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText ="Payesh";
ul.appendChild(li2);

section.appendChild(ul);

mainContainer.appendChild(section);



// Set innerHtml directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Section</h1>
<ul>
    <li>Tshirt</li>
    <li>Lungi</li>
    <li>Sento Genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);