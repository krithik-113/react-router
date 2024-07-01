import React from 'react'

const DataScience = ({data}) => {
  return (
    <div className="img">
      {data.map((val, index) => {
        return (
          <div className="box">
            <img key={index} src={val.img} alt="pic" height={100} width={100} />
            <h1>{val.DS}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default DataScience