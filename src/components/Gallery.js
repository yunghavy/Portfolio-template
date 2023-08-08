import React, { useState } from 'react';
import './portifolio.css';

function Gallery() {
  const [activeTab, setActiveTab] = useState('portraits');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedImage(null);
  };
  
  const prime = [
    { src: 'images/portraits/t1.jpg', alt: 'Image 1' },
    { src: 'images/portraits/t2.jpg', alt: 'Image 2' },
    { src: 'images/portraits/t3.jpg', alt: 'Image 3' },
    { src: 'images/portraits/t4.jpg', alt: 'Image 4' },
    { src: 'images/portraits/t5.jpg', alt: 'Image 5' },
    { src: 'images/portraits/t6.jpg', alt: 'Image 6' },
    { src: 'images/portraits/t7.jpg', alt: 'Image 7' },
    { src: 'images/portraits/t8.jpg', alt: 'Image 8' },
    { src: 'images/portraits/t9.jpg', alt: 'Image 9' },
    { src: 'images/portraits/t10.jpg', alt: 'Image 10' },
    { src: 'images/portraits/t11.jpg', alt: 'Image 11' },
    { src: 'images/portraits/t12.jpg', alt: 'Image 12' }
  ]
  const kit = [
    { src: 'images/photos/w1.jpg', alt: 'Image 1' },
    { src: 'images/photos/w16.jpg', alt: 'Image 2' },
    { src: 'images/photos/w3.jpg', alt: 'Image 3' },
    { src: 'images/photos/w14.jpg', alt: 'Image 4' },
    { src: 'images/photos/w5.jpg', alt: 'Image 5' },
    { src: 'images/photos/w18.jpg', alt: 'Image 6' },
    { src: 'images/photos/w37.jpg', alt: 'Image 7' },
    { src: 'images/photos/w38.jpg', alt: 'Image 8' },
    { src: 'images/photos/w34.jpg', alt: 'Image 9' },
    { src: 'images/photos/w10.jpg', alt: 'Image 10' },
    { src: 'images/photos/w11.jpg', alt: 'Image 11' },
    { src: 'images/photos/w12.jpg', alt: 'Image 12' }
  ]
  const events = [
    { src: 'images/events/e1.jpg', alt: 'Image 1' },
    { src: 'images/events/e2.jpg', alt: 'Image 2' },
    { src: 'images/events/e3.jpg', alt: 'Image 3' },
    { src: 'images/events/e4.jpg', alt: 'Image 4' },
    { src: 'images/events/e5.jpg', alt: 'Image 5' },
    { src: 'images/events/e6.jpg', alt: 'Image 6' },
    { src: 'images/events/e7.jpg', alt: 'Image 7' },
    { src: 'images/events/e8.jpg', alt: 'Image 8' },
    { src: 'images/events/e9.jpg', alt: 'Image 9' },
    { src: 'images/events/e10.jpg', alt: 'Image 10' },
    { src: 'images/events/e11.jpg', alt: 'Image 11' },
    { src: 'images/events/e12.jpg', alt: 'Image 12' }
  ]
  const places = [
    { src: 'images/places/p1.jpg', alt: 'Image 1' },
    { src: 'images/places/p2.jpg', alt: 'Image 2' },
    { src: 'images/places/p3.jpg', alt: 'Image 3' },
    { src: 'images/places/p3.jpg', alt: 'Image 4' },
    { src: 'images/places/p5.jpg', alt: 'Image 5' },
    { src: 'images/places/p6.jpg', alt: 'Image 6' },
    { src: 'images/places/p7.jpg', alt: 'Image 7' },
    { src: 'images/places/p8.jpg', alt: 'Image 8' },
    { src: 'images/places/p9.jpg', alt: 'Image 9' },
    { src: 'images/places/p10.jpg', alt: 'Image 10' },
    { src: 'images/places/p11.jpg', alt: 'Image 11' },
    { src: 'images/places/p12.jpg', alt: 'Image 12' }
  ]
  function Lightbox({ image, onClose }) {
    return (
      <div className="lightbox-overlay" onClick={onClose}>
        <div className="lightbox-content">
          <img src={image.src} alt={image.alt} />
        </div>
      </div>
    );
  }
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
   <div className="gallery-page">
      <div className="gallery-content">
        <div className="container">
    <div className="tabs tabs-container">
      <button
        className={activeTab === 'prime' ? 'active' : ''}
        onClick={() => handleTabClick('prime')}
      >
        Prime-Portraits
      </button>
      <button
        className={activeTab === 'kit' ? 'active' : ''}
        onClick={() => handleTabClick('kit')}
      >
        Kit-Portraits
      </button>
      <button
        className={activeTab === 'events' ? 'active' : ''}
        onClick={() => handleTabClick('events')}
      >
        Events
      </button>
      <button
        className={activeTab === 'places' ? 'active' : ''}
        onClick={() => handleTabClick('places')}
      >
        Places
      </button>
    </div>
    </div>

    <div className="gallery">
      {activeTab === 'prime' &&
        prime.map((image, index) => (
          <img
            key={index}
            className="gallery__item"
            src={image.src}
            alt={image.alt}
            onClick={() => openLightbox(image)}
          />
        ))}
      {activeTab === 'kit' &&
        kit.map((image, index) => (
          <img
            key={index}
            className="gallery__item"
            src={image.src}
            alt={image.alt}
            onClick={() => openLightbox(image)}
          />
        ))}
      {activeTab === 'events' &&
        events.map((image, index) => (
          <img
            key={index}
            className="gallery__item"
            src={image.src}
            alt={image.alt}
            onClick={() => openLightbox(image)}
          />
        ))}
      {activeTab === 'places' &&
        places.map((image, index) => (
          <img
            key={index}
            className="gallery__item"
            src={image.src}
            alt={image.alt}
            onClick={() => openLightbox(image)}
          />
        ))}
    </div>
  </div>
  {selectedImage && (
          <Lightbox image={selectedImage} onClose={closeLightbox} />
        )}
  </div>
  </div>
);
}

export default Gallery;