require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

var cors = require('cors')
app.use(cors())
// // mongoose
const connectDB = require("./config/db");
connectDB();
//req.body
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const postRoute = require("./router/post.route");


app.use("/api/post", postRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
