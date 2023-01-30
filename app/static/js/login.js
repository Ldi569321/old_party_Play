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

const signin = function (req, res) { // id, password

    var id = req.body.id;
    var password = req.body.password;
    var sess = req.session;

    signin_model.signin(id, password, sess, (data) => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(500).send("아이디 / 패스워드 오류");
        }

    })
}