const FLOR = document.querySelectorAll ("fac");

FLOR.forEach(fac => {
    fac.addEventListener("click", () => {
        fac.classList.toggle("active");
    });
});