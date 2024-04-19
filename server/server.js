const express = require("express");
const app = express();
const router = require("./router/auth-router");
const mongoose = require("mongoose");

app.use("/api/auth", router);

const DB =
  "mongodb+srv://devugyen:yOK0V2XpohAXBDjl@cluster0.w58u2hc.mongodb.net/yuji-app?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB)
  .then(() => {
    console.log("database connection successful");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

const port = 5000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
