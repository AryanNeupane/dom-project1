
let stat= document.querySelector("h5")
let add=document.querySelector("#add")
varflag=0
add.addEventListener("click",()=>{
    flag=1
    stat.innerHTML="Friends";
    stat.style.color="green"
    add.innerHTML="Unfriend"
    add.style.backgroundColor="Red"
    add.classList.add("unfriend")
    
})
let unf=document.querySelector("unfriend")

unf.addEventListener("click",()=>{
     
})