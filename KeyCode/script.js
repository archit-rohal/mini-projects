
const firstKey = document.querySelector(".key:nth-child(1)");
const secondKey = document.querySelector(".key:nth-child(2)");
const thirdKey = document.querySelector(".key:nth-child(3)");

window.addEventListener("keypress", (e) => {
    firstKey.firstChild.textContent = e.key;
    secondKey.firstChild.textContent = e.keyCode;
    thirdKey.firstChild.textContent = e.code;
});
