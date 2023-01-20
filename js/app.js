const menuBtn = document.querySelector(".menubar div");
const modal = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

modal.addEventListener("click", () => {
    modal.style.display = "none";
})

if (window.location.pathname == '/html/createPartyForm.html') {
    var now_utc = Date.now()
    var timeOff = new Date().getTimezoneOffset() * 60000;
    var today = new Date(now_utc - timeOff).toISOString().split("T")[0];

    var maxDateY = parseInt(today.substring(0, 4)) + 1;

    const maxDateYMD = maxDateY + today.substring(4, 10);

    document.getElementById('createDate').value = new Date().toISOString().slice(0, 7);
    document.getElementById('createDate').value = new Date().toISOString().substring(0, 10);

    document.getElementById('maxDate').setAttribute("min", today);
    document.getElementById('maxDate').setAttribute("max", maxDateYMD);

    const getDateDiff = (d1, d2) => {
        const date1 = new Date(d1);
        const date2 = new Date(d2);

        const diffDate = date1.getTime() - date2.getTime();

        return Math.abs(diffDate / (1000 * 60 * 60 * 24));
    }

    let payCal = document.getElementById("payCalculate");

    const calBtn = document.getElementById("calculateBtn");
    calBtn.addEventListener("click", () => {
        if (document.getElementById("dayPay").value == '' || document.getElementById("maxDate").value == '') {
            alert("필수값이 아직 입력되지 않았습니다.")
        } else {
            let dayPay = document.getElementById("dayPay").value;
            let dayCount = getDateDiff(document.getElementById("createDate").value, document.getElementById("maxDate").value);
            let result = dayCount * dayPay;
            payCal.innerText = `${dayCount}일 × ${dayPay}원 = ${result}원`
        }
    })
}

const adBox = document.querySelectorAll(".adBox");

function AdPC() {
    const adSetNum = Math.floor(Math.random()*5+1);
    const adSetUrl = `url(/img/PC_AD${adSetNum}.png)`;
    return adSetUrl;
}

function AdMobile() {
    const adSetNum = Math.floor(Math.random()*5+1);
    const adSetUrl = `url(/img/MOBILE_AD${adSetNum}.png)`;
    return adSetUrl;
}

window.addEventListener('DOMContentLoaded', function () {
    if (screen.width >= 1100) {
        adBox[0].style.backgroundImage = AdPC();
        adBox[1].style.backgroundImage = AdPC();
    } else if (screen.width < 1100) {
        adBox[0].style.backgroundImage = AdMobile();
        adBox[1].style.backgroundImage = AdMobile();
    }
});

let delay = 300;
let timer = null;

window.addEventListener('resize', function(){
    clearTimeout(timer);
	timer = setTimeout(function(){
		if (screen.width >= 1100) {
            adBox[0].style.backgroundImage = AdPC();
            adBox[1].style.backgroundImage = AdPC();
        } else if (screen.width < 1100) {
            adBox[0].style.backgroundImage = AdMobile();
            adBox[1].style.backgroundImage = AdMobile();
        }
	}, delay);
}); 