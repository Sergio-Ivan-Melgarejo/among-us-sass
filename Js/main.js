const body = document.getElementById("body");

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
    body.classList.add("seleting");
})


// SELETING ________________________________ 
// INGAME ________________________________ 
// GAMEOVER ________________________________ 