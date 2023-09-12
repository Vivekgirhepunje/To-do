const audio= new Audio("Add.wav");

audio.volume=0.06;
let inputtotext=document.querySelector(".addto-do input[type='text'");
let crsr=document.getElementById("crsr");

function mouse(){
    document.body.addEventListener("mousemove",(e)=>{
        crsr.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
    })
}
mouse();
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    audio.play();
    let newtodoitem= document.createElement("div");
    newtodoitem.classList.add("todo");
    newtodoitem.innerHTML=`<div class="todotext"><h4>${inputtotext.value}</h4></div>
    <div class="todobtn">
       <button class="done" >Done</button>
       <button class="remove">Remove</button>
    </div>`;
        document.querySelector(".todolist").prepend(newtodoitem);
    
   
   
    inputtotext.value="";
})

// console.log(todo)
let todo= document.querySelector(".todolist");
todo.addEventListener("click",(e)=>{
    audio.play();
    if(e.target.classList.contains("done") && e.target.innerText==="Done"){    
       e.target.innerText="Undo";
       e.target.parentNode.previousElementSibling.style.textDecoration="line-Through";
       e.target.parentNode.previousElementSibling.style.textDecorationColor="rgba(0,0,0,0.7)";

    }
    else if(e.target.classList.contains("done") && e.target.innerText==="Undo"){    
        e.target.innerText="Done";
        e.target.parentNode.previousElementSibling.style.textDecoration="none";
        e.target.parentNode.previousElementSibling.style.textDecorationColor="unset";
 
     }
    else if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.style.scale=0;
        setTimeout(()=>{
            e.target.parentNode.parentNode.remove();
        },1000)
    }
})
// loader animation



let tl1= gsap.timeline();
tl1.to("#main #loader",{
    top:"-100vh",
    duration:1.5,
    delay:1
}
)
tl1.from("#bar h1",{
    y:-100,
    opacity:0,
    duration:1,
},"bar")
tl1.from("#bar img:nth-child(1)",{
    x:-50,
    opacity:0,
    duration:1,
},"bar")
tl1.from("#bar img:nth-child(3)",{
    x:50,
    opacity:0,
    duration:1,
},"bar")