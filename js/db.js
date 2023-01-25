const mysql = require("mysql");

const db = mysql.createConnection({
    host: "partyplay.cqysxu3bw1nu.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "ldi569321",
    database: "partyplay",
});

db.connect();

module.exports = db;