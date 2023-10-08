import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
//Pages
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";

function App() {
  return (
    <div className="ShowTacker">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Index />} />
            <Route path="/shows/new" element={<New />} />
            <Route exact path="/shows/:id" element={<Show />} />
            <Route path="/shows/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
