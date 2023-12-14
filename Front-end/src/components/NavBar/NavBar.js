import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h1>Show Tracker</h1>
      </Link>
      <Link to="/shows">
        <h1>Shows</h1>
      </Link>

      <Link to="/shows/new">
        <h1>Add Shows</h1>
      </Link>
    </nav>
  );
}
