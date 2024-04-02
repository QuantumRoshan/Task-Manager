const express = require("express");
const app = express();
const port =3000;
const task = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();
const notFound=require('./middlewear/not-found')
const errorCustom=require('./middlewear/erroe')

const dbConfig = {
  url: process.env.MONGO_URL,
};

//Middlewear
app.use(express.static('./public'))
app.use(express.json());

//ROUTES
app.use("/api/v1/tasks", task);
app.use(notFound)
app.use(errorCustom)

const start = async () => {
  try {
    await connectDb(dbConfig.url);
    app.listen(port, console.log("Server is running..."));
  } catch (error) {}
};
start();
