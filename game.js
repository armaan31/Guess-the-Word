p1name=localStorage.getItem("p1name");
p2name=localStorage.getItem("p2name");
//line number 1 and 2 takes the value of the input names from the local storage and saves it in the variable p1name and p2name.
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1name+" : ";
document.getElementById("p2name").innerHTML=p2name+" : ";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
//line number 6, 7, 8, 9 creates the score board in top left of screen. 
document.getElementById("playerquest").innerHTML="Question Turn Is - "+p1name;
document.getElementById("playerans").innerHTML="Answer Turn Is - "+p2name;
//line number 11 and 12 displays the turn for the players to see with respect to question and answer.
function send(){
    getWord=document.getElementById("word").value; //saves the input word in variable named getWord.
    word=getWord.toLowerCase(); //saves the value of getWord in lowercase and stored into variable names word. 
    charAt1=word.charAt(1); //saves the index letter 1 of the input word in the variable named charAt1. 
    lendiv2=Math.floor(word.length/2); //Divides the length of the word by 2 to get middle and rounds to an integer. 
    charAt2=word.charAt(lendiv2); //the result of the division becomes the index letter of the variable charAt2. 
    lengthMinus1=word.length-1; //Subtracts the lenght of word by 1. 
    charAt3=word.charAt(lengthMinus1); //result of subtraction becomes the index letter number for charAt3. 
    removecharAt1=word.replace(charAt1, "_"); //Replaces the value of charAt1 with an underscore (_). 
    removecharAt2=removecharAt1.replace(charAt2, "_"); //Replaces the value of charAt2 with an underscore (_). 
    removecharAt3=removecharAt2.replace(charAt3, "_"); //Replaces the value of charAt3 with an underscore (_). 
    questionword = "<h4 id='worddisplay'> Q. "+removecharAt3+"</h4>"; //concatinates q. with the final word with underscores (_).
    inputbox = "<br>Answer : <input type='text' id='inputcheckbox'>"; //Creates the text input to type in answer. 
    checkButton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; //Creates the check button. 
    document.getElementById("output").innerHTML=questionword+inputbox+checkButton; //adds the question word input box and check button to the output declared in HTML.
    document.getElementById("word").value=null; //replaces the input word with a blank space when button send is clicked. 
}
function logout(){
    localStorage.removeItem("p1name"); //removes value of p1name from local storage. 
    localStorage.removeItem("p2name"); //removes value of p2name from local storage. 
    window.location="index.html"; //redirects the screen back into login screen. 
}
qturn="player1"; //Changing question turn
aturn="player2";   //Changing answer turn
function check(){
    getAnswer=document.getElementById("inputcheckbox").value; //Takes the answer from the input check box and saves it in the variable getAnswer. 
    answer=getAnswer.toLowerCase(); //Converts the value of getAnswer to lowercase and saves the value in variable answer. 
    if(answer==word){ //winning condition.
        if(aturn=="player1"){ //If answer turn is player 1, the score gets increased for player 1. 
            p1score=p1score+1; //increases p1score value by 1. 
            document.getElementById("p1score").innerHTML=p1score; //displays the p1 score against it's name. 
        } else { 
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score; //displays the p2 score against it's name. 
        }
    }
    if(qturn=="player1"){ //Does the toggling between player 1 and player 2 for the question turn. 
        qturn="player2"
        document.getElementById("playerquest").innerHTML="Question Turn - "+p2name;
        } else {
        qturn="player1"
        document.getElementById("playerquest").innerHTML="Question Turn - "+p1name;
    }
    if(aturn=="player1"){   //Does the toggling between player 1 and player 2 for the answer turn. 
        aturn="player2"
        document.getElementById("playerans").innerHTML="Answer Turn - "+p2name;
        } else {
        aturn="player1"
        document.getElementById("playerans").innerHTML="Answer Turn - "+p1name;
    }
    document.getElementById("output").innerHTML=""; //replaces the output with blank once button check is clicked. 
}