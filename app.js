const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const route = require("./route/router");
const app = express();

// midleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", route);

app.listen(3000, () => {
  console.log(`server run in port ${3000}`);
});
