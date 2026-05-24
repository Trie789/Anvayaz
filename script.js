// script.js

console.log("Website loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
    
    const button = document.querySelector("button");

    if(button){
        button.addEventListener("click", () => {
            alert("Your website is working perfectly ✨");
        });
    }

});