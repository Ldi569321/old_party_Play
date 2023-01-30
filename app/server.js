const mysql = require('mysql');  // mysql 모듈 로드
const conn = mysql.createConnection({  // mysql 접속 설정
    host: 'partyplay.cqysxu3bw1nu.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'root',
    password: 'ldi569321',
    database: 'partyPlay'
});

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);

const app = express();

app.listen(3000, function(){
    console.log("Express서버가 포트:3000으로 라우팅 되었습니다. http://localhost:3000/main")
})


app.set('port', process.env.PORT || 3000);
app.use('/css', express.static(__dirname+'/static/css'));
app.use('/img', express.static(__dirname+'/static/img'));
app.use('/js', express.static(__dirname+'/static/js'));
app.use(bodyParser.urlencoded({extended: true}));

const Maxtime = 1000 * 60 * 5;
const sessionObj = {
  secret: 'kong',
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore({ checkPeriod: Maxtime }),
  cookie: {
    maxAge: Maxtime
  },
};

app.use(session(sessionObj));

//메인화면
app.get('/main', (req, res) => {
  res.sendFile(__dirname+ '/static/html/mainForm.html');  
});

//로그인
app.get('/login', (req, res) => {
  res.sendFile(__dirname+ '/static/html/loginForm.html');
});

app.post('/signIn', (req, res) => {
  console.log(req.body);
  const signInSQL = `SELECT * FROM account WHERE id='${req.body.id}' AND password='${req.body.password}'`;
  conn.query(signInSQL, (err, userList) => {
    if(err) throw err;
    console.log(userList);
    console.log(userList[0].name+'님 로그인 완료');
  })
})


//회원가입
app.get('/register', (req, res) => {
  res.sendFile(__dirname+ '/static/html/registerForm.html');
});

//회원가입 쿼리
app.post('/NewRegister', (req, res) => {
  console.log(req.body);
  const registerSQL = `INSERT INTO account (id, password, passwordCheck, name, tel, Notification) values ('${req.body.userId}', '${req.body.password}', '${req.body.passwordCheck}', '${req.body.userName}', '${req.body.tel}', '${req.body.notification}');`;
  conn.query(registerSQL, function(err, result) {
    if(err) throw err;
    console.log(`${req.body.userName}님 회원가입 완료`);
  })
  res.sendFile(__dirname+ '/static/html/loginForm.html');
})

//중복확인 기능
app.get('/overlapCheck', (req, res) => {
  const innerId = req.query.innerId;
  const overlapCheckSQL = `SELECT COUNT(id) id FROM account WHERE id='${innerId}'`;
  
  return conn.query(overlapCheckSQL, function(err, row) {
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(row[0].id == '1'){
      res.write(`<script>alert('"${innerId}"는 중복된 아이디 입니다.');
      history.back();
      </script>`);
      return res.end();
    }else if(row[0].id == '0'){ 
      res.write(`<script>alert('"${innerId}"는 사용 가능한 아이디 입니다.');
      history.back();
      </script>`);
      return res.end();
    }
  })
});


//파티관리
app.get('/partyManageMain', (req, res) => {
  res.sendFile(__dirname+ '/static/html/partyManageMainForm.html');
});

//고객센터
app.get('/support', (req, res) => {
  res.sendFile(__dirname+ '/static/html/supportForm.html');
});

//파티생성
app.get('/createParty', (req, res) => {
  res.sendFile(__dirname+ '/static/html/createPartyForm.html');
});

//정산
app.get('/calculate', (req, res) => {
  res.sendFile(__dirname+ '/static/html/calculateForm.html');
});

//계정찾기
app.get('/findAccount', (req, res) => {
  res.sendFile(__dirname+ '/static/html/findAccountForm.html');
});

//파티 정보
app.get('/partyDetails', (req, res) => {
  res.sendFile(__dirname+ '/static/html/partyDetailsForm.html');
});

//파티수정
app.get('/partyEdit', (req, res) => {
  res.sendFile(__dirname+ '/static/html/partyEditForm.html');
});

//파티참가
app.get('/partyJoin', (req, res) => {
  res.sendFile(__dirname+ '/static/html/partyJoinForm.html');
});

//문의내용
app.get('/recordDetails', (req, res) => {
  res.sendFile(__dirname+ '/static/html/recordDetailsForm.html');
});

//문의내역
app.get('/record', (req, res) => {
  res.sendFile(__dirname+ '/static/html/recordForm.html');
});
