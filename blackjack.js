 let Cards = document.querySelector("#cards")
let Sum = document.querySelector("#sum")
let h2 = document.querySelector("#h2")
let message = ""
let isAlive = false
let hasBlackJack = false
let playerDetails = document.getElementById("playerdet")
 
 

let player = {
    name : "Hey there! Anonymous:",
    chip : "$254"
}

playerDetails.textContent = player.name +" "+ player.chip
 
let total = 0 
let texts = []

Cards.textContent = "Cards: "
Sum.textContent = "Sum: " 

function rndNum(){
 let randomNum = Math.floor( Math.random() * 11 ) + 1
 if(randomNum > 10){
    return 10
 }
 else if(randomNum === 1){
    return 11
 }
 else{
    return randomNum
 }
}


function startgame(){
    isAlive = true 
    let num1 = rndNum()
    let num2 = rndNum()
    texts = [num1, num2]
    total = num1 + num2 
    renderGame()
    
}
    
function renderGame(){
    Cards.textContent = "Cards: "
    for( let i = 0; i < texts.length; i++){
        Cards.textContent += texts[i] + " "  
}
    Sum.textContent = "Sum: " + total
    if(total <= 20){
        message ="Pick New Card ^/^"
        
    }
    else if(total === 21){
        message ="You Win!"
        hasBlackJack = true
        
        
    }
    else{
        message ="You Lost!"
        isAlive = false
        
        
         
    }
    h2.textContent = message
   
  
}
function restartGame(){
    Restart.textContent = "RESTART GAME"
    Cards.textContent = "cards: "
    Sum.textContent = "sum: "
}


function newcard(){
    if (isAlive === true && hasBlackJack === false){
    let card =  rndNum()
    total += card
     texts.push(card)
    renderGame()
    }
     
}

 