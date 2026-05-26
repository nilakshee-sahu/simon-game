let gameSqn = [];
let userSqn = [];

let started = false; 
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
    if(started == false){
        console.log("game is started")
        started = true;

        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250);
}

function levelup(){
    userSqn = [];

    level++;
    h2.innerText = `Level ${level}`;

    //choose random color
    let idx = Math.floor(Math.random() * 4);
    let color = btns[idx];
    gameSqn.push(color);
    console.log(gameSqn);

    let btn = document.querySelector(`.${color}`);
    gameFlash(btn);
}

function checkAns(idx){
    if(gameSqn[idx] === userSqn[idx]){
        if(gameSqn.length == userSqn.length){
            setTimeout(levelup, 500); 
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = 'white';
        }, 150);
        reset();
    }
}

function btnPress (){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSqn.push(userColor);
    checkAns(userSqn.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset (){
    started = false;
    gameSqn = [];
    userSqn = [];
    level = 0;
}