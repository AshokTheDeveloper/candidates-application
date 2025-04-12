const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const candidateRoutes = require("./routes/candidateRoutes");
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/candidates", candidateRoutes);

module.exports = app;
