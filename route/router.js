const express = require("express");
const db = require("../model/database");
const route = express.Router();

// read data
route.get("/", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM user where id = ?";
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

// insert
route.post("/", (req, res) => {
  const user_name = req.body.user_name;
  const user_email = req.body.user_email;
  const password = req.body.password;

  const sql = "INSERT INTO user (user_name,user_email,password) VALUES(?,?,?)";
  db.query(sql, [user_name, user_email, password], (err) => {
    if (err) throw err;
    res.status(200).send("berhasil menambahkan Data");
  });
});

route.put("/", (req, res) => {
  const user_name = req.body.user_name;
  const user_email = req.body.user_email;
  const password = req.body.password;
  const id = req.body.id;
  const sql =
    "UPDATE user SET user_name = ?, user_email = ?, password = ? WHERE id = ?";
  db.query(sql, [user_name, user_email, password, id], (err, result) => {
    if (err) throw err;
    res.status(200).send("data berhasil di edit pada user " + id);
  });
});

route.delete("/", (req, res) => {
  const id = req.body.id;
  const sql = "DELETE FROM user where id = ?";
  db.query(sql, id, (err) => {
    if (err) throw err;
    res.status(200).send("berhasil menghapus user " + id);
  });
});

module.exports = route;
