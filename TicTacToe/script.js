// elements of box
let box= document.querySelectorAll('.box');
// Turn for x or y
let turn= document.querySelector('.turn');
let resetBtn= document.querySelector('#resetBtn');
let ele='X';
let didWin=false
let audio= new Audio('ting.mp3');
let gameOverAudio=new Audio('gameover.mp3')
// box has nodelist
// Change the move from X to O
const changeMove=()=>{
    if(ele==='X'){
        return 'O';
    }else{
        return 'X';
    }
}
const CheckWin=()=>{
    let winingSituation=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [2,5,8],
        [2,4,6],
        [1,4,7],
        [3,4,5],
        [6,7,8],
    ]
    winingSituation.forEach(e=>{
        if((box[e[0]].innerHTML===box[e[1]].innerHTML)&&
        (box[e[1]].innerHTML===box[e[2]].innerHTML)&&(box[e[0]].innerHTML!='')){
            didWin=true;
            turn.innerHTML=`Congrats team ${box[e[2]].innerHTML} has won!`;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

            gameOverAudio.play();
        
        }
    })
}
let cnt=0;
box.forEach(element => {
    element.addEventListener('click',(e)=>{
        // console.log(e.target.innerHTML)
        if(e.target.innerHTML===''){
            cnt++;
            console.log(cnt)
            e.target.innerHTML=ele;
            ele=changeMove()
            CheckWin();
            console.log(didWin)
            
            if(didWin===false&&cnt===9){
                // updateBoard()
                turn.innerHTML=`Oops it's a Tie!`
            }
            else if(didWin===false){
                audio.play()
                turn.innerHTML=`Turn for ${ele}`
                return;
            }
            
        }
    })
});
// console.log(cnt)
resetBtn.addEventListener('click',(e)=>{
    cnt=0;
    didWin=false;
    ele='X'
    box.forEach(element=>{
        element.innerHTML='';
    });
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    turn.innerHTML=`Turn for X`
})