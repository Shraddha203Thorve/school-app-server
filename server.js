// import swaggerUi from 'swagger-ui-express'
// import * as swaggerDocument from './swagger.json'
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
// var path = require("path");
dotenv.config();
// app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use((req, res, next) => {
  console.log("inside backend");
  next();
});
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch(() => {
    console.log("error");
  });
app.use("/api/admission", require("./routes/Admission"));
// app.use("/", require("./routes/Contactus"));

app.listen(process.env.PORT, () => {
  app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  console.log("Server is running");
});
// module.exports = app;
