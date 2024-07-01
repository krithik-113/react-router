import { useEffect, useState } from "react";
import Fsd from "./Components/Fsd";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import { Link, Routes, Route } from "react-router-dom";
import All from "./Components/All";

function App() {
  const API_URL = "http://localhost:3000/courses.json";
  const [fsd, setFsd] = useState([]);
  const [ds, setDs] = useState([]);
  const [cs, setCs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setFsd(result.courses);
        setDs(result.dataScience);
        setCs(result.cyberSecurity);
      } catch (err) {
        console.log(err);
      }
    };
    (async () => await fetchData())();
  }, []);
  console.log(ds);
  return (
    <div className="App">
      <nav>
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
        <Route path="/career" />
      </Routes>
    </div>
  );
}

export default App;
