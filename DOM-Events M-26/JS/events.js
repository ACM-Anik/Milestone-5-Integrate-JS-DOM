//Option 1:Directly set on the html element


// js event ta k ekhaneo rakha jay abar html file e o script tag e rakha jay

// Option 2 add onclick function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// option 3: Use id of the element
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


// Option 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
 document.body.style.backgroundColor = 'purple';
}

// OPtion 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener('click', makePink );
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// Option 4.5 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
 document.body.style.backgroundColor = 'green';
});

// Option 4 Final:
document.getElementById('make-gray').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gray';
})