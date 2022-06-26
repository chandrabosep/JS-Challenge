function ageindays() {
    var yourbirthyear = prompt("enter the year you born");
    var ageindays = (2022-yourbirthyear)*365;
    console.log(ageindays);
    var h1=document.createElement('h1');
    var textanswer = document.createTextNode('Your are '+ageindays+' days old');
    h1.appendChild(textanswer);
    h1.setAttribute('id','ageindays')
    document.getElementById('flexbox-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageindays').remove();
}


// Challenge 2: Cat Generator

function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = ("https://c.tenor.com/q5BICsyoDnQAAAAS/gato-fiesta.gif");
    div.appendChild(image);
}