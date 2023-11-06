import { useEffect, useState } from 'react';
import axios from "axios";
import ShowCard from "../ShowCard/ShowCard";
// import Error from './components/Error/Error';
// import Loading from './components/Loading/Loading';
// could use fourofour - instead of error. 

const API_URL = process.env.REACT_APP_API_URL;

export default function ShowList() {

  const [showsData, setShowsData] = useState([]);
  {/* const [loading, setLoading] = useState(true); */}
  {/* const [error, setError] = useState(''); */}

  useEffect(() => {
    console.log('<App /> useEffect() fired');
    async function fetchData() {
      try {
        axios
        .get(`${API_URL}/shows`)
        .then((response) => {
          const {data} = response;
          // console.log(data.data)
          setShowsData(data.data) // MIGHT NEED TO CHANGE THIS ...
          // setLoading(false);
        })
        .then(console.log(showsData))
        .catch((c) => {
          console.warn("catch", c)
          // setError(error);
          // setLoading(false);
      });
      } catch (err) {
        console.log(`<App /> useEffect error: ${err.message}`);
        // setError(err.message);
        // setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (

    <div className="ShowList">
      <h1>Shows</h1>

      {showsData.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
    </div>
  );

}