const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  database: "platform_study",
});

module.exports = connection;
