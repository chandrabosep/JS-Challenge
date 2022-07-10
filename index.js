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
    image.src = ("http://thecatapi.com/api/images/get?format=src&type=gif&size=small");
    div.appendChild(image);
}

// Challenge 3: Rock-Paper-Scissors

function rpsGame(yourChoice){
    console.log(yourChoice);   
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt()); /*automatically gets a number randomly*/
    console.log('Computer choice:',botChoice);
    results = decidewinner(humanChoice,botChoice); // [1,0] [0,1] [0.5,0.5]
    console.log(results);
    message = finalMessage(results);    // ' You Won' //
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message)

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];
}

function decidewinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };

    var yourScore=rpsDatabase[yourChoice] [computerChoice];
    var computerScore=rpsDatabase[computerChoice] [yourChoice];

    return [yourScore,computerScore];

}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return{'message': 'You lose','color':'red'};
    } else if(yourScore === 0.5){
        return{'message': 'You tied','color':'yellow'};
    } else{
        return{'message': 'You won','color':'green'};
    }
}

function rpsFrontEnd(humanImageChocice,botImageChoice,finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='"+imagesDatabase[humanImageChocice] +"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML= "<h1 style='color:" +finalMessage['color']+"; font-size 60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML="<img src='"+imagesDatabase[botImageChoice] +"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}