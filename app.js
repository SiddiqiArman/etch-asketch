const grid =document.querySelector('.gridbox')
const input =document.querySelector('#gridsize')
const resetButton =document.querySelector('button')
function createGrid(){
    for(let i=0; i<256;i++){
        const div =document.createElement('div')
        div.classList.add('square')
        grid.appendChild(div)
    }
   

}
function updateGrid(){
    if(input.value<2||input.value>100){
        alert('invalid input')
    }
    else{
        grid.innerHTML=""
        grid.style.setProperty(
            "grid-template-columns",`repeat(${input.value},2fr)`
        ) 
        grid.style.setProperty(
            "grid-template-rows",`repeat(${input.value},2fr)`
        )  
        
        for(let i=0;i<input.value*input.value;i++){
            const div =document.createElement('div')
            div.classList.add('square')
            grid.appendChild(div)
        }
    }
    
}
input.addEventListener("change",updateGrid)
const box =document.querySelector('div')
box.addEventListener("mouseover",function hoverEffect(event){
    event.target.classList.replace('square','color')
})
resetButton.addEventListener('click',function reset(){
    grid.innerHTML =""
    grid.style.setProperty("grid-template-rows",`repeat(16,2fr)`)
    grid.style.setProperty("grid-template-columns",`repeat(16,2fr)`)
    createGrid()
})

createGrid()