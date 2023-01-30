
document.getElementById("overlapCheck").addEventListener("click", () => {
    const innerId = document.getElementById('userId').value;
    if(innerId.length < 6){
        alert('아이디의 길이는 6자보다 커야합니다.')
    }else {
    location.href=`/overlapCheck?innerId=${innerId}`;
}
})

function Input(e)  {
    e.value = e.value.replace(/[^a-zA-Z0-9]/ig, '')
}

document.querySelector(".regSubmit").addEventListener("click", () => {
    const pw = document.querySelector("#password");
    const pwCheck = document.querySelector("#passwordCheck");
    const tel = document.getElementById("tel");
    if(pw.value === pwCheck.value) {
        pwCheck.setCustomValidity('');
    } else {
        pwCheck.setCustomValidity("비밀번호가 다릅니다.");
    }
    if(/^010-[0-9]{4}-[0-9]{4}$/.test(tel.value)){
        tel.setCustomValidity('');
    } else {
        tel.setCustomValidity("전화번호 형식이 다릅니다.");
    }
})