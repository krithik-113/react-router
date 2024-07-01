import React from 'react'

const CyberSecurity = ({data}) => {
  return (
    <div className="img">
      {data.map((val, index) => {
        return (
          <div className="box">
            <img key={index} src={val.img} alt="pic" height={100} width={100} />
            <h1>{val.CS}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default CyberSecurity