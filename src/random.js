export function random () {
let r = (Math.round(Math.random() * (255 - 1) + 1))
let g = (Math.round(Math.random() * (255 - 1) + 1))
let b = (Math.round(Math.random() * (255 - 1) + 1))
return {r,g,b}
}

export function move () {
let top = (Math.round(Math.random() * (800 - 1) + 1))
let left = (Math.round(Math.random() * (800 - 1) + 1))
return {top, left}
}