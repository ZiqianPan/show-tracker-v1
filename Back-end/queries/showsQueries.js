const showsData = require("../showsData.json");

const getAllShows = () => {
  const { shows } = showsData;
  return shows;
};

const getShowById = (id) => {
  const { shows } = showsData;
  const show = shows.find((show) => show.id === id);
  return show;
};

// Create new show
const createNewShow = async (show) => {

    const { name, alternativeNames, url, season, episode, volume, description, timeStamp, updateWeekday} = show;
    try {
      const newSnack = await db.one(
        "INSERT INTO shows (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, fiber, protein, added_sugar, is_healthy, image]
      );
      return newSnack;
    } catch (error) {
      return error;
    }
  };

module.exports = { getAllShows, getShowById, createNewShow };
