import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Arrays from "./pages/Arrays";
import Home from "./pages/Home";
import Sources from "./pages/Sources";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/arrays">Arrays</Link>
        <br></br>
        <Link to="/sources">Sources</Link>

        <Routes>
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/" element={<Home />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
