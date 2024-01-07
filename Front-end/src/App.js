import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
//Pages
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home/Home.js";
import Index from "./pages/Index";
import New from "./pages/New/New.js";
import Show from "./pages/Show";
import Footer from "./components/Footer/Footer.js"

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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
