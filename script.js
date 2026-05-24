// script.js

document.addEventListener("DOMContentLoaded", ()=>{

    // navbar shadow on scroll

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 20){

            nav.style.background = "rgba(0,0,0,0.6)";
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";

        }else{

            nav.style.background = "rgba(0,0,0,0.3)";
            nav.style.boxShadow = "none";

        }

    });

    // smooth reveal animation

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    });

    cards.forEach((card)=>{

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.7s ease";

        observer.observe(card);

    });

    // button ripple effect

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button)=>{

        button.addEventListener("click",(e)=>{

            const circle = document.createElement("span");

            const diameter = Math.max(
                button.clientWidth,
                button.clientHeight
            );

            const radius = diameter / 2;

            circle.style.width = circle.style.height =
            `${diameter}px`;

            circle.style.left =
            `${e.clientX - button.offsetLeft - radius}px`;

            circle.style.top =
            `${e.clientY - button.offsetTop - radius}px`;

            circle.classList.add("ripple");

            const ripple = button.querySelector(".ripple");

            if(ripple){
                ripple.remove();
            }

            button.appendChild(circle);

        });

    });

    console.log("Anvayaz loaded ✨");

});
