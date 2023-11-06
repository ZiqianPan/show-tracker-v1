import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function ShowDetails() {
  const [show, setShow] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${API_URL}/shows/${id}`)
      .then((response) => {
        setShow(response.data.data);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/shows/${id}`)
      .then(() => {
        navigate("/shows");
      })
      .catch(() => {
        console.warn("error");
      });
  };


  return (
    <div className="ShowDetails">
      <h1>{show.title}</h1>

      <div>
          <Link to={`/shows/${show.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>

        <div>
          <button onClick={handleDelete}>
            Delete
          </button>
        </div>
    </div>
  )
}
