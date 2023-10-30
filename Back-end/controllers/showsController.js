const express = require("express");
const {
  getAllShows,
  getShowById,
  createNewShow,
  // deleteShow,
  // updateShow,
} = require("../queries/showsQueries.js");

const showsController = express.Router();

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
      res.json({ success: true, payload: show });
    } else {
      res.status(404).json({ success: false, payload: "not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

// //delete function
// showsController.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const deletedshow = await deleteshow(id);
//   if (deletedshow.id) {
//     res.status(200).json({ success: true, payload: deletedshow });
//   } else {
//     res.status(404).json({ success: false, payload: deletedshow });
//   }
// });

// //update current show
// showsController.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { body } = req;

//   body.is_healthy = confirmHealth(body);
//   const updatedshow = await updateshow(req.body, id);

//   if (updatedshow.id) {
//     res.status(200).json(updatedshow);
//   } else {
//     res
//       .status(404)
//       .json({ error: "show could not be updated for some reason...." });
// }
// });

module.exports = showsController;
