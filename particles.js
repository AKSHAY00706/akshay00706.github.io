document.addEventListener("DOMContentLoaded",()=>{

const container = document.getElementById("particles")

const canvas = document.createElement("canvas")
container.appendChild(canvas)

const ctx = canvas.getContext("2d")

function resize(){

canvas.width = window.innerWidth
canvas.height = window.innerHeight

}

resize()
window.addEventListener("resize",resize)

let particles=[]

function createParticles(){

particles=[]

let particleCount

if(window.innerWidth < 500){

particleCount = 40

}
else if(window.innerWidth < 900){

particleCount = 80

}
else{

particleCount = 140

}

for(let i=0;i<particleCount;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

size: window.innerWidth < 600 
? Math.random()*1.2 
: Math.random()*2+0.5,

speedX:(Math.random()-0.5)*0.3,
speedY:(Math.random()-0.5)*0.3,

opacity: window.innerWidth < 600
? Math.random()*0.3+0.1
: Math.random()*0.6+0.2

})

}

}

createParticles()

window.addEventListener("resize",createParticles)

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x += p.speedX
p.y += p.speedY

if(p.x<0||p.x>canvas.width)p.speedX*=-1
if(p.y<0||p.y>canvas.height)p.speedY*=-1

ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)

ctx.fillStyle = `rgba(255,45,45,${p.opacity})`
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()

})