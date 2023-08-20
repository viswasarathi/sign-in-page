let sign_in = document.querySelector("#sign-in-btn")
let sign_up = document.querySelector("#sign-up-btn")
let container = document.querySelector(".container")

sign_up.addEventListener("click",()=>{
    container.classList.add('sign-up-mode')
})
sign_in.addEventListener("click",()=>{
    container.classList.remove('sign-up-mode')
})


function clearInput() {
    document.getElementById('myInput').value = ''; 
  }
  

window.onload = function() {
    clearInput();
};
  