require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//middlewares
app.use(express.json());
app.use(errorMiddleware);

//route middleware
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
  });
});
