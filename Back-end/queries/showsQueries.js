const db = require("../db/dbConfig.js");

const getAllShows = () => {
  const allShows = db.any("SELECT * FROM shows");
  return allShows;
};

const getShowById = (id) => {
  const show = db.oneOrNone("SELECT * FROM shows WHERE id = $1", [id]);
  return show;
};

// Create new show
const createNewShow = async (show) => {
  const {
    title,
    alternativeNames,
    url,
    season,
    episode,
    volume,
    description,
    timeStamp,
    updateWeekday,
  } = show;
  try {
    const newShow = await db.one(
      "INSERT INTO shows (title, alternativeNames, url, season, episode, volume, description, timeStamp, updateWeekday) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        title,
        alternativeNames,
        url,
        season,
        episode,
        volume,
        description,
        timeStamp,
        updateWeekday,
      ]
    );
    return newShow;
  } catch (error) {
    return { err: error.message };
  }
};

//deleteing a show
const deleteShow = async (id) => {
  try {
    const deletedShow = await db.one(
      "DELETE FROM shows WHERE id = $1 RETURNING *",
      id
    );
    return deletedShow;
  } catch (err) {
    return err;
  }
};

//udpate existing snack
  const updateShow = async (show, id) => {
    const {
        title,
        alternativeNames,
        url,
        season,
        episode,
        volume,
        description,
        timeStamp,
        updateWeekday,
      } = show;

    try {
      const updatedShow = await db.one("UPDATE shows SET title = $1, alternativeNames = $2, url = $3, season = $4, episode = $5, volume = $6, description = $7,timeStamp = $8, updateWeekday = $9  WHERE id = $10 RETURNING *",
      [
        title,
        alternativeNames,
        url,
        season,
        episode,
        volume,
        description,
        timeStamp,
        updateWeekday,
        id
      ]);
      return updatedShow;

    } catch (err) {
      return err;
    }
  }

module.exports = { getAllShows, getShowById, createNewShow, deleteShow, updateShow };
