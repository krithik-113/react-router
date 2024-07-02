import { useEffect, useState } from "react";
import Fsd from "./Components/Fsd";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import { Link, Routes, Route } from "react-router-dom";
import All from "./Components/All";
import Career from "./Components/Career";

function App() {
  const API_URL = "https://krithik-113.github.io/react-router/courses.json";
  const [fsd, setFsd] = useState([]);
  const [ds, setDs] = useState([]);
  const [cs, setCs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setFsd(result.fullStack);
        setDs(result.dataScience);
        setCs(result.cyberSecurity);
      } catch (err) {
        console.log(err);
      }
    };
    (async () => await fetchData())();
  }, []);

  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <Link to="/">
            <li>ALL</li>
          </Link>

          <Link to="/fsd">
            <li>FULL STACK DEVELOPMENT</li>
          </Link>

          <Link to="/ds">
            <li>DATA SCIENCE</li>
          </Link>

          <Link to="/cs">
            <li>CYBER SECURITY</li>
          </Link>

          <Link to="/career">
            <li>CAREER</li>
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<All fsd={fsd} ds={ds} cs={cs} />} />
        <Route path="/fsd" element={<Fsd data={fsd} />} />
        <Route path="/ds" element={<DataScience data={ds} />} />
        <Route path="/cs" element={<CyberSecurity data={cs} />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
