import React from 'react'
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <ul className="career">
      <div className="link">
        <Link to="/fsd">
          <img
            src={process.env.PUBLIC_URL + "/img/fsd.png"}
            alt="pic"
            height={250}
            width={300}
          />

          <li>FULL STACK DEVELOPMENT</li>
        </Link>
      </div>

      <div className="link">
        <Link to="/ds">
          <img
            src={process.env.PUBLIC_URL + "/img/ds.jpg"}
            alt="pic"
            height={250}
            width={300}
          />
          <li>DATA SCIENCE</li>
        </Link>
      </div>

      <div className="link">
        <Link to="/cs">
          <img
            src={process.env.PUBLIC_URL + "/img/cs.jpg"}
            alt="pic"
            height={250}
            width={300}
          />
          <li>CYBER SECURITY</li>
        </Link>
      </div>
    </ul>
  );
}

export default Career

