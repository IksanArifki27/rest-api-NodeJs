const mysql = require("mysql2");

const koneksi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodecrud",
});

koneksi.connect((err) => {
  if (err) throw err;
  console.log("Database connect");
});

module.exports = koneksi;
