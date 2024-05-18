import React from 'react';
import backgroundImage from '../assets/images/luke.jpg'; // Replace with the actual path to your image

const Overview = () => {
  return (
    <div
      className="p-4 p-md-5 mb-4 text-white rounded bg-dark"
      style={{
        height: '450px',
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

<div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '450px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the last value (0.5) to change the transparency
      zIndex: 1,
    }}
  />
      <div  className="container py-5" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Microsoft asks some employees in China to move to...</h1>
            <p className="lead my-3">
            Microsoft has asked at least 100 of its employees in China to consider moving to other country
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;