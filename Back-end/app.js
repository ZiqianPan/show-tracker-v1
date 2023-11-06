// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const showsController = require("./controllers/showsController");

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Service is running' });
});


app.use("/shows", showsController);



module.exports = app;
