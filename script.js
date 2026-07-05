const input= document.querySelector("input");
const searchBtn=document.querySelector(".search-btn");

searchBtn.addEventListener("click",() =>{
    const typedWord = input.value;
    if(typedWord===""){
        alert("Please type the city name");
    }
});