let searchbutton=document.querySelector("#search-button");
let search=document.querySelector(".search");
let show=true;

let input=document.querySelector("input");

searchbutton.addEventListener("click",()=>{
    if(show){
    search.style.display="none";
    searchbutton.style.display="flex";
    show=false;
    }
    else{
        search.style.display="flex";
    searchbutton.style.display="none";
        show=true;
    }
});
