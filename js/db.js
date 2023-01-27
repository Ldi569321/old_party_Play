const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'partyplay.cqysxu3bw1nu.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'root',
    password: 'ldi569321',
    database: 'partyPlay'
};

var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속