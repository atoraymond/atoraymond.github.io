const contactHover = document.querySelector("#contact-hover");

const popup = document.querySelector("#popup");

contactHover.addEventListener("mouseover", (e)=>{
    popup.classList.toggle("md:block");
});
