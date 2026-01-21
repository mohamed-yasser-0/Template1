let landing = document.querySelector(".landing");
let photos = document.querySelectorAll(".landing img");
let arr = Array.from(photos)

let CurrentSlide = 0;
  photos[CurrentSlide].classList.add("active")



let next = document.getElementById("next")
let prev = document.getElementById("prev")
let num = document.getElementsByClassName("num")
num[0].textContent = CurrentSlide+1

let uls = document.createElement("ul")

uls.setAttribute("class","uls")
for(let i=0; i<arr.length; i++){
  let lis = document.createElement("li")
  lis.setAttribute("data",i)
  uls.appendChild(lis)
}

landing.appendChild(uls)

let lis = document.querySelectorAll(".landing .uls li")

let lists = Array.from(lis)

  lists[CurrentSlide].classList.add("active")

//remove the class
function removeClass(){
for(let j=0; j<arr.length; j++){
  photos[j].classList.remove("active");
}
}
function removli(){
  for(let j=0; j<arr.length; j++){
    lists[j].classList.remove("active");
  }  
}
  



  photos[photos.length-1].classList.add("end-none")
  photos[0].classList.add("start-none")

  setInterval(function(){
  if(photos[CurrentSlide].classList.contains("end-none")){
    CurrentSlide = 0
    theChecker()
  }else{
    CurrentSlide ++
    theChecker()
  }
  },4000)

for(let i=0; i<arr.length; i++){
  lists[i].onclick = function(){
        CurrentSlide = i
        theChecker()
    }
    
}

function nexts(){
  if(photos[CurrentSlide].classList.contains("end-none")){
    CurrentSlide = 0
    theChecker()
  }else{
    CurrentSlide ++
    theChecker()
  }
}

function prevs(){
  if(photos[CurrentSlide].classList.contains("start-none")){
    CurrentSlide = photos.length-1
    theChecker()
  }else{
    CurrentSlide --
    theChecker()
  }
}

next.onclick = nexts
prev.onclick = prevs

function theChecker(){
  removli()
  removeClass()
photos[CurrentSlide].classList.add("active")
lists[CurrentSlide].classList.add("active")
num[0].textContent = CurrentSlide+1

}
// menu
let menu = document.querySelector(".links .menu");
let list = document.querySelector(".links ul");
let menuOf = document.querySelector(".links .menu");
menu.onclick = ()=>{
  list.classList.toggle("active")
  menuOf.classList.toggle("menuActive")
}
// serch
let links = document.querySelector(".links");
let serch = document.querySelector(".links .serch");



serch.onclick = ()=>{
  if(!document.querySelector(".inpSerch")){
    serch.style.transition="0.8s"
    serch.classList.add("del");
    let divSerch = document.createElement("div");
    let inpSerch = document.createElement("input");
    divSerch.appendChild(inpSerch)
    links.appendChild(divSerch)
    divSerch.style.height = "40px"
    inpSerch.classList.add("inpSerch")
    inpSerch.focus()
    }
  }

document.addEventListener("focusout", (e) => {
  if (e.target.classList.contains("inpSerch")) {
    e.target.parentElement.remove()
    serch.classList.remove("del")
  }
});
// links


// scroller top 
let ele = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

document.addEventListener("scroll", ()=>{

  let scrollTop = document.documentElement.scrollTop;
    ele.style.width =`${(scrollTop/height)*100}%`
});

let colection = document.querySelector(".skill .colection")
let colUL = document.querySelector(".skill .colection ul")
let colLi = document.querySelectorAll(".skill .colection ul li")
let skill = document.querySelectorAll(".skill .rev")

let counter = colection.children.length
let current = 0
for(let i=0 ;i<colUL.children.length; i++){
  
  colLi[i].onclick =()=>{

    skill.forEach((e)=>{
      e.classList.add("hidden")
    })
    colLi.forEach((e)=>{
      e.classList.remove("active")
    })

    colLi[i].classList.add("active")
    skill[i].classList.remove("hidden") 
  }
  
}
skill[current].classList.remove("hidden") 






//AboutUs Scrool
let stats = document.querySelector(".stats")
let skills = document.querySelector(".skill")
let services = document.querySelector(".services")
let design = document.querySelector(".design")
let portfolio = document.querySelector(".portfolio")
let video = document.querySelector(".video")
let quote = document.querySelector(".quote")
let pricing = document.querySelector(".pricing")
let numberCount = document.querySelectorAll(".container .box .number")
let slide = document.querySelectorAll(".container .box .slide .on span")
let start = false
let startScrol = false
let servicesShow = false
let designShow = false
let portfolioShow = false
let videoShow = false
let quoteShow = false
let pricingShow = false
window.addEventListener("scroll",()=>{
  
  if(start === false){
    if(window.scrollY >= stats.offsetTop - 200){
      numberCount.forEach((e)=>{
        number=0
        let goal = parseInt(e.dataset.goal)
        let x = setInterval(()=>{
          number++
          e.innerHTML = number
          
            if(number >= goal){
              clearInterval(x)
            }        
        },2000/goal)
      })
    start = true
    }    
  }
  if(startScrol === false){
    if(window.scrollY >= skills.offsetTop -200){
      slide.forEach((e)=>{
      let countSlide = 0
      let goal = parseInt(e.dataset.number)
      let y = setInterval(()=>{
        countSlide++
        e.style.width = `${countSlide}%`
        if(countSlide >= goal){
          clearInterval(y)
        }
      },1000 / goal)
    })
    startScrol = true
    }    
  }
  if(servicesShow === false){
    if(window.scrollY >= services.offsetTop-300){
      services.classList.add("show")
    servicesShow = true
    }}

    if(designShow === false){    
    if(window.scrollY >= design.offsetTop-300){
      design.classList.add("show")
    designShow = true
    }}
    if(portfolioShow === false){    
    if(window.scrollY >= portfolio.offsetTop-300){
      portfolio.classList.add("show")
    portfolioShow = true
    }}
    if(videoShow === false){    
    if(window.scrollY >= video.offsetTop-300){
      video.classList.add("show")
    videoShow = true
    }}    
    if(quoteShow === false){    
    if(window.scrollY >= quote.offsetTop - 600){
      quote.classList.add("show")
    quoteShow = true
    }}    
    if(pricingShow === false){    
    if(window.scrollY >= pricing.offsetTop-200){
      pricing.classList.add("show")
    pricingShow = true
    }}    
    // if(videoShow === false){    
    // if(window.scrollY >= video.offsetTop-500){
    //   video.classList.add("show")
    // videoShow = true
    // }}    
  
})


// portfolio

// let ulPor = document.querySelector(".portfolio .links ul");
// let hover = document.querySelector(".portfolio .links ul span");
// let linksPor = document.querySelectorAll(".portfolio .links ul li");

// for(let i=0; i<ulPor.children.length; i++){

//   linksPor[i].onclick = ()=>{
//     if(linksPor[i].innerHTML === "All"){
//       hover.style.left = "5px"
//       hover.style.width = "39px"
//     }else if(linksPor[i].innerHTML === "App"){
//       hover.style.left = "54px"
//       hover.style.width = "48px"
//     }else if(linksPor[i].innerHTML === "Photo"){
//       hover.style.left = "113px"
//       hover.style.width = "64px"
//     }else if(linksPor[i].innerHTML === "Web"){
//      hover.style.left = "187px"
//       hover.style.width = "53px"
//     }else if(linksPor[i].innerHTML === "Print"){
//      hover.style.left = "252px"
//       hover.style.width = "53px"
//     }
//       }
// }