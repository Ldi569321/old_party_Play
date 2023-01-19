const menuBtn = document.querySelector(".menubar div");
const modal = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

modal.addEventListener("click", () => {
    modal.style.display = "none";
})

var now_utc = Date.now()
var timeOff = new Date().getTimezoneOffset()*60000;
var today = new Date(now_utc-timeOff).toISOString().split("T")[0];

var maxDateY = parseInt(today.substring(0, 4))+1;

const maxDateYMD = maxDateY+today.substring(4, 10);

document.getElementById('createDate').value = new Date().toISOString().slice(0, 7);
document.getElementById('createDate').value = new Date().toISOString().substring(0, 10);

document.getElementById('maxDate').setAttribute("min", today);
document.getElementById('maxDate').setAttribute("max", maxDateYMD);