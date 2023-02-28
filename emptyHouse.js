let wall = document.getElementById("wall")
let roof = document.getElementById("roof")
let roof2 = document.getElementById("roof-2")
let roof3 = document.getElementById("roof-3")
let door = document.getElementById("door")


const move = new TimelineMax()

move
.from(wall, 1 , {y: "-100vh" ,ease: "power2.inOut"})
.from(roof2, 1 ,{x: "-100vw" , delay: 0.5 , ease: "sine" } , "roof")
.from(roof3, 1 ,{x: "100vw", ease: "sine"} , "roof")
.from(door, 1 ,{opacity: 0 , ease: "bounce"})