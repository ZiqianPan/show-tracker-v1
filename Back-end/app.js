
const express = require('express');
const cors = require('cors');

const showsData = require('./showsData.json');

const app = express();

app.use(cors());


app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});

app.get('/shows', (request, response) => {
  try {
    const { shows } = showsData;
    response.status(200).json({ data: shows });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.get('/shows/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { shows } = showsData;

    const show = shows.find((ele) => ele.id === id);
    if (show) {
      return response.status(200).json({ data: show });
    }
    response
      .status(404)
      .json({ error: `Could not find student with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;
