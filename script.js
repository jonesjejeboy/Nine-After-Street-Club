const modal=document.getElementById("modal");
function openCrew(name,role,car,expert,bio){
 document.getElementById("mname").textContent=name;
 document.getElementById("mrole").textContent=role;
 document.getElementById("mcar").textContent=car;
 document.getElementById("mexpert").textContent=expert;
 document.getElementById("mbio").textContent=bio;
 modal.classList.add("show");
}
function closeCrew(e){
 if(!e || e.target===modal || e.target.tagName==="BUTTON") modal.classList.remove("show");
}
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>{}));
document.querySelector(".menu").addEventListener("click",()=>{
 const nav=document.querySelector(".nav nav");
 nav.style.display=nav.style.display==="flex"?"none":"flex";
 nav.style.position="absolute";nav.style.top="70px";nav.style.right="6vw";
 nav.style.flexDirection="column";nav.style.background="#111";nav.style.padding="20px";
});
