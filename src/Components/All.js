import React from 'react'

const All = ({ fsd, ds, cs }) => {
    
    const grid = {
        gridTemplateColumns : "repeat(5, 300px)"
    }

  return (
    <div className="img" style={grid}>
      {fsd.map((val, index) => {
        return (
          <div className="box">
            <img key={index} src={val.img} alt="pic" height={100} width={100} />
            <h1>{val.FSD}</h1>
          </div>
        );
      })}
      {ds.map((val, index) => {
        return (
          <div className="box">
            <img key={index} src={val.img} alt="pic" height={100} width={100} />
            <h1>{val.DS}</h1>
          </div>
        );
      })}
      {cs.map((val, index) => {
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

export default All