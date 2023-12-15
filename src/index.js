const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', router());  //error 3


const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});

const MONGO_URL =
  'mongodb+srv://ahmedriaz:rhinorush1991@cluster0.jvk0frz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URL);

