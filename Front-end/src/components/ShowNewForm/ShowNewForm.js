import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ShowNewForm.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function ShowNewForm() {
  const navigate = useNavigate();
  const [show, setShow] = useState({
    title: "",
    alternativeNames: "",
    url: "",
    season: "",
    episode: "",
    volume: "",
    description: "",
    timeStamp: "",
    updateWeekday: "",
  });

  const handleTextChange = (event) => {
    setShow({ ...show, [event.target.id]: event.target.value });
  };

  
  const addShow = (newShow) => {
    axios.post(`${API_URL}/shows`, newShow)
      .then((response) => {
          console.log(response);
          navigate(`/shows`);
        },
        (error) => console.error(error)
      )
      .catch((err) => console.warn("catch", err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`handlesumbit run from showNewForm`,  show)
    addShow(show);
  };

  return (
    <div className="ShowNewForm">
      <form onSubmit={handleSubmit}>
        <label className="ShowNewForm__label ShowNewForm__required" htmlFor="name">
        title:
        </label>
        <input
          id="title"
          type="text"
          placeholder="Show title *"
          value={show.title}
          onChange={handleTextChange}
          required
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="alternativeNames">
          Alternative Names:
        </label>
        <input
          id="alternativeNames"
          type="text"
          placeholder="Alternative Names"
          value={show.alternativeNames}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="url">
          Link to the show:
        </label>
        <input
          id="url"
          type="url"
          placeholder="YT link/Manga Site"
          value={show.url}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="season">
          Season:
        </label>
        <input
          id="season"
          type="text"
          placeholder="Season"
          value={show.season}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="episode">
          Episode:
        </label>
        <input
          id="episode"
          type="text"
          placeholder="Episode"
          value={show.episode}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="volume">
          Volume:
        </label>
        <input
          id="volume"
          type="text"
          placeholder="Volume"
          value={show.volume}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="timeStamp">
          TimeStamp:
        </label>
        <input
          id="timeStamp"
          type="text"
          placeholder="Time Stamp"
          value={show.timeStamp}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="updateWeekday">
          UpdateWeekday:
        </label>
        <input
          id="updateWeekday"
          type="text"
          placeholder="Update Weekday"
          value={show.updateWeekday}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <label className="ShowNewForm__label" htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          type="text"
          placeholder="Description"
          value={show.description}
          onChange={handleTextChange}
          className="ShowNewForm__input"
        />

        <input className="button" type="submit" />
      </form>
    </div>
  );
}
