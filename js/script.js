$(document).ready(function(){
    $(window).on('load', function() {
        setTimeout(() => {
            $(".loading-overlay").hide(0, function(){
                $(this).remove();
                removeBodyClass();
            })
        }, 0);
    });
    function removeBodyClass() {
        $('body').removeClass("bodyActive");
    }
});



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__items");
const body = document.querySelector("body");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
        setTimeout(() => {
            document.querySelector(".socialmedia").classList.toggle("socialActive");
            body.classList.toggle("bodyActive")
            
        }, 400);
})

// const logo = document.querySelectorAll('#logo path');
// for(let i = 0; i < logo.length; i++) {
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
// }