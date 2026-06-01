function Troll() {
    const BeforeTrollLink = document.getElementById("BeforeTroll");
    BeforeTrollLink.textContent = "Uh Oh";
    const TROLL = document.getElementById("Troll");
    setTimeout(() => {
        TROLL.classList.add("TrollActive");
    }, 1000)
    const TrollText = document.getElementById("TrollText");
}
function Troll1() {
    const TrollText = document.getElementById("TrollText");
    TrollText.textContent = "This website has been trolled and is now owned by TrollerTrollTroll";
    const Copyright = document.getElementById("copyright")
    Copyright.textContent = "© TrollerTrollTroll 2026";
    setTimeout(() => {
        let TrollIndex = 0;
        while (TrollIndex < 10) {
            alert("TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL TROLL ");
            TrollIndex += 1;
        }
        alert("ok i give up im just going to redirect you to a different page");
        window.location.href = "Troll.html";
    }, 1000)
}
function Troll2() {
    const TrollText = document.getElementById("TrollText");
    TrollText.textContent = "That is not an option";
    const TROLL22 = document.getElementById("TrollButton2");
    setTimeout(() => {
        TROLL22.classList.add("TrollButton2fallen");
    },  0)
}
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    var LoadTime = Math.random()*3000;
    setTimeout(() => {
        preloader.classList.add("preloader-hidden");
    },  LoadTime)
});