const reduceMotion=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function floatHeart(){
 if(reduceMotion)return;
 const x=document.createElement("div");x.className="float";x.textContent=["♥","♡","❤","✦"][Math.floor(Math.random()*4)];
 x.style.left=Math.random()*100+"vw";x.style.fontSize=(12+Math.random()*18)+"px";
 x.style.setProperty("--drift",(Math.random()*180-90)+"px");x.style.animationDuration=(5+Math.random()*5)+"s";
 document.body.appendChild(x);setTimeout(()=>x.remove(),11000);
}
if(!reduceMotion)setInterval(floatHeart,650);

function nextPage(file){
 document.body.style.opacity="0";
 document.body.style.transition="opacity .22s ease";
 setTimeout(()=>{window.location.assign(file)},180);
}
function answer(file){nextPage(file)}

const no=document.getElementById("no");
if(no){
 let locked=false;
 function escapeNo(e){
   if(e)e.preventDefault();
   if(locked)return;locked=true;
   const pad=10;
   const w=no.offsetWidth,h=no.offsetHeight;
   const maxX=Math.max(pad,window.innerWidth-w-pad);
   const maxY=Math.max(80,window.innerHeight-h-pad);
   no.style.position="fixed";
   no.style.left=(pad+Math.random()*Math.max(1,maxX-pad))+"px";
   no.style.top=(80+Math.random()*Math.max(1,maxY-80))+"px";
   no.textContent=["Catch me 😌","Nope 🙈","Too slow 💗","Try again? 🌷"][Math.floor(Math.random()*4)];
   setTimeout(()=>locked=false,250);
 }
 no.addEventListener("pointerdown",escapeNo);
 no.addEventListener("click",escapeNo);
}
function yes(){
 document.getElementById("yesArea").style.display="none";
 document.getElementById("success").style.display="block";
 for(let i=0;i<25;i++)setTimeout(floatHeart,i*40);
}
