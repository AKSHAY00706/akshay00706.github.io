const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
/* =================================
HAMBURGER MENU
================================= */

hamburger.addEventListener("click",()=>{

hamburger.classList.toggle("active")
nav.classList.toggle("active")

})




/* =================================
THEME TOGGLE
================================= */

const logo = document.querySelector(".logo")

logo.addEventListener("click",()=>{

document.body.classList.toggle("dark")

})


/* =================================
TYPING ANIMATION
================================= */

const roles = [


"Python Developer",
"Data Analyst",
"Frontend Developer",
"Web Developer",
"AI Systems Builder"

]

let roleIndex = 0
let charIndex = 0

const typingElement = document.getElementById("typing")

function typeText(){

if(!typingElement) return

if(charIndex < roles[roleIndex].length){

typingElement.textContent += roles[roleIndex].charAt(charIndex)

charIndex++

setTimeout(typeText,70)

}else{

setTimeout(eraseText,1500)

}

}

function eraseText(){

if(charIndex > 0){

typingElement.textContent =
roles[roleIndex].substring(0,charIndex-1)

charIndex--

setTimeout(eraseText,40)

}else{

roleIndex++

if(roleIndex >= roles.length){

roleIndex = 0

}

setTimeout(typeText,300)

}

}

document.addEventListener("DOMContentLoaded",typeText)


/* =================================
SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll("section")

function revealOnScroll(){

const windowHeight = window.innerHeight

revealElements.forEach(el=>{

const elementTop = el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){

el.style.opacity = "1"
el.style.transform = "translateY(0)"

}

})

}

window.addEventListener("scroll",revealOnScroll)


/* =================================
SCROLL PROGRESS BAR
================================= */

const progressBar = document.querySelector(".progress-bar")

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight

const progress = (scrollTop/height)*100

progressBar.style.width = progress + "%"

})


/* =================================
GO TO TOP BUTTON
================================= */

const topBtn = document.getElementById("topBtn")

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display = "block"

}else{

topBtn.style.display = "none"

}

})

topBtn.onclick = ()=>{

window.scrollTo({

top:0,
behavior:"smooth"

})

}


/* =================================
CARD TILT EFFECT
================================= */

document.querySelectorAll(".tilt").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

const centerX = rect.width/2
const centerY = rect.height/2

const rotateX = -(y-centerY)/20
const rotateY = (x-centerX)/20

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

})

card.addEventListener("mouseleave",()=>{

card.style.transform = "rotateX(0) rotateY(0)"

})

})


/* =================================
NEURAL SKILL NETWORK
================================= */

const canvas = document.getElementById("skillNetwork")

if(canvas){

const ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 400

const skills = [

"Python",
"Django",
"JavaScript",
"React",
"SQL",
"Machine Learning",
"PowerBI",
"Tableau",
"HTML",
"CSS",
"C",
"Excel",
"PowerPoint"

]

let nodes = []

skills.forEach(skill=>{

nodes.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1,
label:skill

})

})

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

nodes.forEach(node=>{

node.x += node.vx
node.y += node.vy

if(node.x<0 || node.x>canvas.width) node.vx *= -1
if(node.y<0 || node.y>canvas.height) node.vy *= -1

ctx.beginPath()
ctx.arc(node.x,node.y,5,0,Math.PI*2)
ctx.fillStyle="#ff2d2d"
ctx.fill()

ctx.font="13px Space Grotesk"
ctx.fillStyle="#ff2d2d"
ctx.fillText(node.label,node.x+8,node.y)

})

for(let i=0;i<nodes.length;i++){

for(let j=i+1;j<nodes.length;j++){

let dx = nodes[i].x - nodes[j].x
let dy = nodes[i].y - nodes[j].y

let dist = Math.sqrt(dx*dx + dy*dy)

if(dist < 120){

ctx.beginPath()

ctx.moveTo(nodes[i].x,nodes[i].y)
ctx.lineTo(nodes[j].x,nodes[j].y)

ctx.strokeStyle="rgba(255,45,45,0.25)"

ctx.stroke()

}

}

}

requestAnimationFrame(draw)

}

draw()

}

if(window.innerWidth > 768){

const canvas = document.getElementById("skillNetwork")

if(canvas && window.innerWidth > 600){

const glow = document.createElement("div")

glow.style.position="fixed"
glow.style.width="200px"
glow.style.height="200px"
glow.style.borderRadius="50%"
glow.style.pointerEvents="none"
glow.style.background="radial-gradient(circle, rgba(255,45,45,0.25), transparent 60%)"
glow.style.transform="translate(-50%, -50%)"
glow.style.zIndex="-3"

document.body.appendChild(glow)

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px"
glow.style.top=e.clientY+"px"

})

}
}

glow.style.position="fixed"
glow.style.width="200px"
glow.style.height="200px"
glow.style.borderRadius="50%"
glow.style.pointerEvents="none"
glow.style.background="radial-gradient(circle, rgba(255,45,45,0.25), transparent 60%)"
glow.style.transform="translate(-50%, -50%)"
glow.style.zIndex="-3"

document.body.appendChild(glow)

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px"
glow.style.top=e.clientY+"px"

})

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",(e)=>{

const targetId = link.getAttribute("href")

if(targetId.startsWith("#")){

e.preventDefault()

const target = document.querySelector(targetId)

target.scrollIntoView({
behavior:"smooth"
})

}

})

})

const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

},{threshold:0.2})

sections.forEach(section=>{

section.classList.add("hidden")
observer.observe(section)

})


/* =================================
ACTIVE NAVBAR HIGHLIGHT
================================= */

const navSections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let scrollY = window.pageYOffset;

navSections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.offsetHeight;
const sectionId = section.getAttribute("id");

if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

navLinks.forEach(link=>{
link.classList.remove("active");
});

const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);

if(activeLink){
activeLink.classList.add("active");
}

}

});

});