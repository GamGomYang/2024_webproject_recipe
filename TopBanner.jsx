import React from 'react';
import image1 from './images/banner/topbanner.jpg';


import './TopBanner.css';

const TopBanner = () => {
  return (
    <div className="top-banner">
        

      <img src={image1} alt="Image 1" />

    </div>
  );
};

export default TopBanner;