// Initialisation du document

const bg = document.querySelector("main");
const colorInput = document.querySelector("#input-color");
const colorRandom = document.querySelector("#color-randomizer");
const hexArray = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];

colorRandom.addEventListener("click",(e)=>{
    console.log("Changed !");
    const colorArray = [];
    for(let i=0; i<6;i++){
        let colorPick = hexArray[Math.floor(Math.random()*hexArray.length)];
        colorArray.push(colorPick)
    }
    const newColor = `#${colorArray.join('')}`;
    bg.style.background=newColor;
})