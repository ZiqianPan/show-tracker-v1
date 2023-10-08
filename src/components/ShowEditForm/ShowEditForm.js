import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ShowEditForm.css";

const API = process.env.REACT_APP_API_URL;

export default function ShowEditForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [show, setShow] = useState({
    name: "",
    alternativeNames: "",
    url: "",
    season: "",
    episode: "",
    volume: "",
    description: "",
    timeStamp: "",
    updateWeekday: "",
  });

  const updateShow = (updatedShow) => {
    axios
      .put(`${API}/shows/${id}`, updatedShow)
      .then(
        () => {
          navigate(`/shows`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setShow({ ...show, [event.target.id]: event.target.value });
  };

  // depends on how I set up the backend - this might change. 
  useEffect(() => {
    axios
      .get(`${API}/shows/${id}`)
      .then((response) => {
        setShow(response.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateShow(show, id);
  };




  return <div className="ShowEditForm">
    <form onSubmit={handleSubmit}>
        <label className="ShowEditForm__label ShowEditForm__required" for="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Show Name *"
          value={show.name}
          onChange={handleTextChange}
          required
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="alternativeNames">
          Alternative Names:
        </label>
        <input
          id="alternativeNames"
          type="text"
          placeholder="Alternative Names"
          value={show.alternativeNames}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="url">
          Link to the show:
        </label>
        <input
          id="url"
          type="url"
          placeholder="YT link/Manga Site"
          value={show.url}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="season">
          Season:
        </label>
        <input
          id="season"
          type="text"
          placeholder="Season"
          value={show.season}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="episode">
          Episode:
        </label>
        <input
          id="episode"
          type="text"
          placeholder="Episode"
          value={show.episode}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="volume">
          Volume:
        </label>
        <input
          id="volume"
          type="text"
          placeholder="Volume"
          value={show.volume}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="timeStamp">
          TimeStamp:
        </label>
        <input
          id="timeStamp"
          type="text"
          placeholder="Time Stamp"
          value={show.timeStamp}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="updateWeekday">
          UpdateWeekday:
        </label>
        <input
          id="updateWeekday"
          type="text"
          placeholder="Update Weekday"
          value={show.updateWeekday}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <label className="ShowEditForm__label" for="description">
          Description:
        </label>
        <textarea
          id="description"
          type="text"
          placeholder="Description"
          value={show.description}
          onChange={handleTextChange}
          className="ShowEditForm__input"
        />

        <input className="button" type="submit" />
      </form>



  </div>;
}
