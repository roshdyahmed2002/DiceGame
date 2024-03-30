function rollDice(){
var rand1= Math.floor(Math.random()*6)+1
var rand2= Math.floor(Math.random()*6)+1

if(rand1>rand2){
    var title=document.querySelector(".title");
    var player1DicePic=document.querySelector(".player1DicePic");
    var player2DicePic=document.querySelector(".player2DicePic");

    title.textContent="Player 1 Wins";
    player1DicePic.setAttribute("src","images/dice"+rand1+".png")
    player2DicePic.setAttribute("src","images/dice"+rand2+".png")

}

if(rand1<rand2){
    var title=document.querySelector(".title");
    var player1DicePic=document.querySelector(".player1DicePic");
    var player2DicePic=document.querySelector(".player2DicePic");

    title.textContent="Player 2 Wins";
    player1DicePic.setAttribute("src","images/dice"+rand1+".png")
    player2DicePic.setAttribute("src","images/dice"+rand2+".png")

}
if(rand1===rand2){
    var title=document.querySelector(".title");
    var player1DicePic=document.querySelector(".player1DicePic");
    var player2DicePic=document.querySelector(".player2DicePic");

    title.textContent="Draw";
    player1DicePic.setAttribute("src","images/dice"+rand1+".png")
    player2DicePic.setAttribute("src","images/dice"+rand2+".png")

}
}

