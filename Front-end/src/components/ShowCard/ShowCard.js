import React from "react";
// import ShowDetails from "../components/SnackDetails";

export default function ShowCard({show}) {
  return (
    <div className="Show">
      <h2>{show.id} - {show.name}</h2>
    </div>
  );
}
