
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const showsController = require("./controllers/showsController");
app.use("/shows", showsController);

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Service is running' });
});


module.exports = app;
