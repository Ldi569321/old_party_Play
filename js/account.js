var registerSQL = 
"INSERT INTO `account` (`id`,`password`,`passwordCheck`,`name`,`tel`, `Notification`)"
+ ` value ('${userId}','','','','', )`;
 
connection.query(registerSQL, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
testQuery = "SELECT * FROM `account`";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end();