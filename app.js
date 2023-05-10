const express = require("express");
const app = express(); //inicializimi
const tasks = require("./routes/tasks"); //importimi nga routes folder
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());
// nese nuk e perdorim app.use(express.json()); atehere nuk kemi per ti patur te dhenat ne req.body

// routes

// "/api/v1/tasks" - eshte route, ndersa tasks osht e importuar nga tasks.js
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
