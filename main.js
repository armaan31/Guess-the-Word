function addUser(){
    p1name=document.getElementById("p1input").value;
    p2name=document.getElementById("p2input").value;
    localStorage.setItem("p1name", p1name);
    localStorage.setItem("p2name", p2name);
    window.location="game.html" //Redirects screen to game.html
}
//ABOVE: the code stores the value of the input names in the local storage against the title p1 name and p2 name. 