import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import ShowDetails from "../components/SnackDetails";

const API_URL = process.env.REACT_APP_API_URL;

export default function ShowCard({ show, position }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/shows/${show.id}`)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <div className="ShowCard">
  
      <h1>id:{show.id}</h1>
      <p>title:{show.title}</p>
      <div>
          <Link to={`/shows/${show.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>

      <button className="ShowCard__delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
