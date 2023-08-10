import React, { useState } from 'react';
import './portifolio.css';


function Designs() {
  const [activeTab, setActiveTab] = useState('Print');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const print = [
    { src: 'images/print/albumcover2.jpg', alt: 'Album cover 2' },
    { src: 'images/print/albumcover3.jpg', alt: 'Album cover 3' },
    { src: 'images/print/albumcover4.jpg', alt: 'Album cover 4' },
    { src: 'images/print/albumcover5.jpg', alt: 'Album cover 5' },
    { src: 'images/print/albumcover9.jpg', alt: 'Album cover 9' },
    { src: 'images/print/albumcover10.jpg', alt: 'Album cover 10' },
    { src: 'images/print/flyer1.jpg', alt: 'Flyer 1' },
    { src: 'images/print/flyer2.jpg', alt: 'Flyer 2' },
    { src: 'images/print/flyer3.jpg', alt: 'Flyer 3' },
    { src: 'images/print/cert1.jpg', alt: 'Cert 1' },
    { src: 'images/print/cert3.jpg', alt: 'Cert 2' },
    { src: 'images/print/mag1.jpg', alt: 'Magazine cover 1' },
    { src: 'images/print/mag2.jpg', alt: 'Magazine cover 2' },
    { src: 'images/print/mag3.jpg', alt: 'Magazine cover 3' },
    { src: 'images/print/menu3.jpg', alt: 'Food menu 3' },
    { src: 'images/print/menu7.jpg', alt: 'Food menu 7' },
    { src: 'images/print/poster1.jpg', alt: 'Poster 1' },
    { src: 'images/print/poster11.jpg', alt: 'Poster 2' },
    { src: 'images/print/poster3.jpg', alt: 'Poster 3' },
    { src: 'images/print/poster12.jpg', alt: 'Poster 4' },
    { src: 'images/print/poster10.jpg', alt: 'Poster 5' },
    { src: 'images/print/poster6.jpg', alt: 'Poster 6' },
    { src: 'images/print/poster7.jpg', alt: 'Poster 7' },
 

  ]
  const web = [
    { src: 'images/web/w1.jpg', alt: 'Calendar App design' },
    { src: 'images/web/w1.jpg', alt: 'Car Rental Web design' },
    { src: 'images/web/w1.jpg', alt: 'Notes App design' }

  ]
  const logo = [
    { src: 'images/logo/logo1.jpg', alt: 'Logo design 1' },
    { src: 'images/logo/logo2.jpg', alt: 'Logo design 2' },
    { src: 'images/logo/logo3.jpg', alt: 'Logo design 3' },
    { src: 'images/logo/logo4.jpg', alt: 'Logo design 4' }
   
  ]
  const packaging = [
    { src: 'images/packaging/bottle1.jpg', alt: 'Bottle design 1' },
    { src: 'images/packaging/bottle2.jpg', alt: 'Bottle design 2' },
    { src: 'images/packaging/bottle3.jpg', alt: 'Bottle design 3' },
    { src: 'images/packaging/bookdesign1.jpg', alt: 'Book design 1' },
    { src: 'images/packaging/bookdesign2.jpg', alt: 'Book design 2' },
    { src: 'images/packaging/bookdesign3.jpg', alt: 'Book design 3' }
  
  ]

  const apparel = [
    { src: 'images/apparel/apparel1.jpg', alt: 'Apparel 1' },
    { src: 'images/apparel/apparel2.jpg', alt: 'Apparel 2' },
    { src: 'images/apparel/apparel3.jpg', alt: 'Apparel 3' },

  ]

  return (
    <div>
   <div className="designs-page">
      <div className="designs-content">
        <div className="container">
    <div className="tabs">
      <button
        className={activeTab === 'print' ? 'active' : ''}
        onClick={() => handleTabClick('print')}
      >
        Print
      </button>
      <button
        className={activeTab === 'web' ? 'active' : ''}
        onClick={() => handleTabClick('web')}
      >
        UI & UX
      </button>
      <button
        className={activeTab === 'logo' ? 'active' : ''}
        onClick={() => handleTabClick('logo')}
      >
        Logo
      </button>
      <button
        className={activeTab === 'packaging' ? 'active' : ''}
        onClick={() => handleTabClick('packaging')}
      >
        Packaging
      </button>
      <button
        className={activeTab === 'apparel' ? 'active' : ''}
        onClick={() => handleTabClick('apparel')}
      >
        Apparel
      </button>
    </div>
    </div>

    <div className="designs">
      {activeTab === 'print' &&
        print.map((image, index) => (
          <img
            key={index}
            className="designs__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'web' &&
        web.map((image, index) => (
          <img
            key={index}
            className="designs__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'logo' &&
        logo.map((image, index) => (
          <img
            key={index}
            className="designs__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'packaging' &&
        packaging.map((image, index) => (
          <img
            key={index}
            className="designs__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
        {activeTab === 'apparel' &&
        apparel.map((image, index) => (
          <img
            key={index}
            className="designs__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
    </div>
  </div>
  </div>
  </div>
);
}

export default Designs;