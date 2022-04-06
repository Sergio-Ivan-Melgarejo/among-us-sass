const body = document.getElementById("body");
const characters = document.querySelectorAll("character-container");

body.addEventListener("click",(e)=>{
    // console.log("hola")
    // if(e.target.classList.contains("select")){
    //     body.classList.remove("seleting")
    // }
})

// HOME ________________________________ 
const play = document.getElementById("play");

play.addEventListener("click",()=>{
    body.classList.remove("home");
    body.classList.add("select");
})


// SELETING ________________________________ 
const game = document.getElementById("game");

game.addEventListener("click",(e)=>{
    const classes = e.target.classList.value;

    if(body.classList.contains("select")){

        if(classes.indexOf("character-modal") !== -1){
            body.classList.remove("select");
            body.classList.add("inGame");

            const selectCharacter = e.target.parentNode.dataset.selectCharacter;
            let character = [1,2,3,4]
        }
    }
    if(body.classList.contains("inGame")){

    }
})


// INGAME ________________________________ 
// GAMEOVER ________________________________ 