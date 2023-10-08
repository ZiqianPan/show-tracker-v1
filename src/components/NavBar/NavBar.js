import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className="NavBar__logo" >
        <Link to="/">Logo/Home</Link>
      </h1>
      <h1>
        <Link to="/shows">Shows</Link>
      </h1>
      <button>
        <Link to="/shows/new">Add Shows</Link>
      </button>
    </nav>
  );
}
