console.log("welcome to tic tac toe");
let audio=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let isgameover=false

// FUNCTION to change turn
const changeturn=()=>{
    return turn==="X"?0:"X";
}

// function to check win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
let win=[
    [0,1,2,-15,5,0],
    [3,4,5,-15,15,0],
    [6,7,8,-15,25,0],
    [0,3,6,-25,15,90],
    [1,4,7,-15,15,90],
    [2,5,8,-5,15,90],
    [0,4,8,-13,15,45],
    [2,4,6,-12,12,132],
]
win.forEach(e=>{
    if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !=="")){
document.querySelector('.info').innerText=boxtext[e[0]].innerText +" Won";
isgameover=true
document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px"
document.querySelector(".line").style.width='26vw'
document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`
    }

    
})
}
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
if(boxtext.innerText==""){
    boxtext.innerText=turn;
    turn=changeturn();
    audioturn.play()
    checkwin();
    if(!isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn for "+ turn

    }
}
    })
})

// add event listener to reset button
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    isgameover=false
document.querySelector(".line").style.width='0vw'

    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px"

})