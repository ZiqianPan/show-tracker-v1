const express = require("express");
const showsController = express.Router();
const {
  getAllShows,
  getShowById,
  createNewShow,
  deleteShow,
  updateShow,
} = require("../queries/showsQueries.js");

showsController.get("/", async (req, res) => {
  try {
    const allShows = await getAllShows();
    if (allShows) {
      res.status(200).json({ data: allShows });
    } else {
      res.status(404).json({ error: `No Shows found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

showsController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const show = await getShowById(id);
    if (show.id) {
      res.status(200).json({ data: show });
    } else {
      res.status(404).json({ error: `No show with id of ${id} found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// creating shows.
showsController.post("/", async (req, res) => {
  const { body } = req;
  try {
    const show = await createNewShow(body);

    if (show.id) {
      res.json({ data: show });
    } else {
      res.status(404).json({ data: "not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//delete function
showsController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedShow = await deleteShow(id);
    if (deletedShow.id) {
      res.status(200).json({ data: deletedShow });
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//update current show
showsController.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedShow = await updateShow(body, id);

    if (updatedShow.id) {
      res.status(200).json({ data: updatedShow });
    } else {
      res
        .status(404)
        .json({ error: "show could not be updated for some reason...." });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = showsController;
