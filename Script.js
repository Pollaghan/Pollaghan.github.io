document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    // Set timer for 1000ms (1 second)
    setTimeout(() => {
        preloader.classList.add("preloader-hidden");
    }, Math.random()*3000);
});