import React from 'react'

const Fsd = ({data}) => {

  return (
    <div className="img">
      {data.map((val, index) => {
        return (
          <div className="box" key={index}>
            <img key={index} src={val.img} alt="pic" height={100} width={100} />
            <h1>{val.FSD}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Fsd   