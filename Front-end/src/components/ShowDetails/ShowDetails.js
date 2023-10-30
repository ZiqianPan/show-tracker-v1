import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ShowDetails() {
  const [show, setShow] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

// disable for navigation since we dont have backend set up yet.

  // useEffect(() => {
  //   axios
  //     .get(`${API}/shows/${id}`)
  //     .then((response) => {
  //       setShow(response.data.payload);
  //     })
  //     .catch(() => {
  //       navigate("/not found");
  //     });
  // }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/shows/${id}`)
      .then(() => {
        navigate("/shows");
      })
      .catch(() => {
        console.warn("error");
      });
  };


  return (
    <div>ShowDetails - single page with all the details of the show with the given id</div>
  )
}
