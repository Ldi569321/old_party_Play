const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'partyplay.cqysxu3bw1nu.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'root',
    password: 'ldi569321',
    database: 'partyPlay'
};

let connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속
 
let sql = "INSERT INTO `account` (`id`,`password`,`passwordCheck`,`name`,`tel`, `Notification`) value ('?','?','?','?','?',?)";
 
connection.query(sql, function (err, results, fields) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
sql = "SELECT * FROM account";
 
connection.query(sql, function (err, results, fields) { 
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); // DB 접속 종료