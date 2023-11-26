import { useEffect, useState } from "react";
import axios from "axios";
import ShowCard from "../ShowCard/ShowCard";
// import Error from './components/Error/Error';
// import Loading from './components/Loading/Loading';
// could use fourofour - instead of error.

const API_URL = process.env.REACT_APP_API_URL;

export default function ShowList() {
  const [showsData, setShowsData] = useState([]);
  const [sorting, setSorting] = useState("dateAdded");
  const [ordering, setOrdering] = useState("ascending");

  {
    /* const [loading, setLoading] = useState(true); 
    make the loading state play everytime something like that using a timeout... */
  }
  {
    /* const [error, setError] = useState(''); 
    show errow page or not */
  }

  useEffect(() => {
    console.log("<App /> useEffect() fired");
    async function fetchData() {
      try {
        axios
          .get(`${API_URL}/shows`)
          .then((response) => {
            const { data } = response;
            // console.log(data.data)
            setShowsData(data.data); // MIGHT NEED TO CHANGE THIS ...
            // setLoading(false);
          })
          .then(console.log(showsData))
          .catch((c) => {
            console.warn("catch", c);
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
  }, [sorting, ordering]);

  //change structure on top
  let dataToDisplay;
  // changed the sorteddata and pass it ot the function of content
  if (sorting === "dateAdded" && ordering === "ascending") {
    dataToDisplay = [...showsData.sort((a, b) => a.id - b.id)];
    // 1 2 3 9 12
  }
  if (sorting === "dateAdded" && ordering === "descending") {
    dataToDisplay = [...showsData.sort((a, b) => b.id - a.id)];
  }

  if (sorting === "lastModified" && ordering === "ascending") {
    dataToDisplay = [...showsData];
  }
  if (sorting === "lastModified" && ordering === "descending") {
    dataToDisplay = [...showsData].reverse();
  }

  const showListContent = () => {
    return dataToDisplay.map((show, index) => {
      return <ShowCard key={show.id} show={show} position={index} />;
    });
  };

  return (
    <div className="ShowList">
      <h1>Shows</h1>
      <label>
        Sorting:
        {/* This might need to change - add a usestate so I can change it */}
        <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
          <option value="dateAdded">Date added</option>
          <option value="lastModified">Last modified</option>
        </select>
      </label>

      <br></br>

      <label>
        Ordering:
        {/* This might need to change - add a usestate so I can change it */}
        <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>

      {/* -------------------------------- */}
      {/* set up logic/condition for it to change to diff sorting base on the diff input from the diff usestate....  */}
      {/* This sort needs to change base on the usestate change...  */}
      {/* current sorting is base on data added. ascending order */}

      {showListContent()}

      {/* {showsData
        .sort((a, b) => a.id - b.id)
        .map((show, index) => {
          return <ShowCard key={show.id} show={show} position={index} />;
        })} */}
      {/* change to decending  */}

      {/* last modtify ordering - last modtify shows on buttom of the list. */}
      {/* {console.log(showsData.sort().map((show, index) => {} */}
    </div>
  );
}
