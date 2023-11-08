let arrow=document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click',(e)=>
        {

let arrowParent=e.target.parentElement.parentElement;

console.log(arrowParent);


arrowParent.classList.toggle("showMenu");
        });
    
}


let sidebar=document.querySelector(".sidebar");
let iconmenu=document.querySelector(".bx-menu");


iconmenu.addEventListener("click",()=>
{
    sidebar.classList.toggle("close");
})
