// import express
const express = require("express");
const authRouter = require("./routes/authRoutes");

// create an express app
const app = express();

// use the express json middleware
app.use(express.json());

app.use("/auth", authRouter);

// export the app
module.exports = app;
