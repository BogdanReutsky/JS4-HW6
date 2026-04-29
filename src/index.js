import {random} from './random.js'
import {move} from './random.js'
const box = document.querySelector(".box")
const randomColor = document.querySelector(".color")
const button = document.querySelector(".btn")



button.addEventListener("click", ()=>{
    const {r,g,b} = random()
    randomColor.style.backgroundColor = `rgb(${r},${g},${b})`

    const {top,left} = move()
    randomColor.style.top = `${top}px`
    randomColor.style.left = `${left}px`
})
