let clickCount=0
let shipCount=0
picPositions=[three,five, twelve, thirteen]
let greenScreen=document.getElementById('screen');
let allGrid = document.querySelectorAll('.grid');
allGrid.forEach(grid => {
    grid.addEventListener('click', () => { 
        let targetGrid = grid.getAttribute('id');
        targetImage=document.querySelector(`[data-id="${targetGrid}"]`)
        targetImage.style.display="block"
        clickCount=clickCount+1
        //if(targetGrid.includes(picPositions))
        if(targetGrid == 'three' || targetGrid == 'five' || targetGrid == 'twelve' || targetGrid == 'thirteen')
            shipCount=shipCount+1
        if(shipCount == 4 && clickCount <=8){
            winningDiv=gameOver()
            winningDiv.textContent="Congratulations!\nYou Have Won!"
            greenScreen.appendChild(winningDiv)
        } 
        else if(clickCount>=8){
            losingDiv=gameOver()
            losingDiv.textContent="Game Over!  Please Try Again."
            greenScreen.appendChild(losingDiv)
        }
    })
})

let allPic = document.querySelectorAll('.pic');
let resetButton=document.querySelector('.eraseButton')
resetButton.addEventListener('click', ()=>{
    allPic.forEach(pic =>{
        pic.style.display="none"
    })
    clickCount=0
    shipCount=0
    popUpDiv=document.querySelector('.endGame')
    popUpDiv.remove()
})

function gameOver(){
    popUpDiv=document.createElement('div')
    popUpDiv.classList.add('endGame')
    return popUpDiv
}
