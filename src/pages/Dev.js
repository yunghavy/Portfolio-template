import React, { useState } from 'react';
import './portifolio.css';


function Dev() {
  const [activeTab, setActiveTab] = useState('Websites');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const websites = [
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_1', alt: 'Video 1' },
    { src: 'https://www.instagram.com/p/POST_ID_2/', alt: 'Post 2' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_3', alt: 'Video 3' },
    { src: 'https://www.instagram.com/p/POST_ID_4/', alt: 'Post 4' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_5', alt: 'Video 5' },
    { src: 'https://www.instagram.com/p/POST_ID_6/', alt: 'Post 6' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_7', alt: 'Video 7' },
    { src: 'https://www.instagram.com/p/POST_ID_8/', alt: 'Post 8' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_9', alt: 'Video 9' },
    { src: 'https://www.instagram.com/p/POST_ID_10/', alt: 'Post 10' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_11', alt: 'Video 11' },
    { src: 'https://www.instagram.com/p/POST_ID_12/', alt: 'Post 12' }
  ];
  
  const mobile = [
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_1', alt: 'Video 1' },
    { src: 'https://www.instagram.com/p/POST_ID_2/', alt: 'Post 2' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_3', alt: 'Video 3' },
    { src: 'https://www.instagram.com/p/POST_ID_4/', alt: 'Post 4' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_5', alt: 'Video 5' },
    { src: 'https://www.instagram.com/p/POST_ID_6/', alt: 'Post 6' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_7', alt: 'Video 7' },
    { src: 'https://www.instagram.com/p/POST_ID_8/', alt: 'Post 8' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_9', alt: 'Video 9' },
    { src: 'https://www.instagram.com/p/POST_ID_10/', alt: 'Post 10' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_11', alt: 'Video 11' },
    { src: 'https://www.instagram.com/p/POST_ID_12/', alt: 'Post 12' }
  ];
  
  const ecommerce = [
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_1', alt: 'Video 1' },
    { src: 'https://www.instagram.com/p/POST_ID_2/', alt: 'Post 2' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_3', alt: 'Video 3' },
    { src: 'https://www.instagram.com/p/POST_ID_4/', alt: 'Post 4' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_5', alt: 'Video 5' },
    { src: 'https://www.instagram.com/p/POST_ID_6/', alt: 'Post 6' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_7', alt: 'Video 7' },
    { src: 'https://www.instagram.com/p/POST_ID_8/', alt: 'Post 8' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_9', alt: 'Video 9' },
    { src: 'https://www.instagram.com/p/POST_ID_10/', alt: 'Post 10' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_11', alt: 'Video 11' },
    { src: 'https://www.instagram.com/p/POST_ID_12/', alt: 'Post 12' }
  ];
  
  const cms = [
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_1', alt: 'Video 1' },
    { src: 'https://www.instagram.com/p/POST_ID_2/', alt: 'Post 2' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_3', alt: 'Video 3' },
    { src: 'https://www.instagram.com/p/POST_ID_4/', alt: 'Post 4' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_5', alt: 'Video 5' },
    { src: 'https://www.instagram.com/p/POST_ID_6/', alt: 'Post 6' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_7', alt: 'Video 7' },
    { src: 'https://www.instagram.com/p/POST_ID_8/', alt: 'Post 8' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_9', alt: 'Video 9' },
    { src: 'https://www.instagram.com/p/POST_ID_10/', alt: 'Post 10' },
    { src: 'https://www.youtube.com/watch?v=VIDEO_ID_11', alt: 'Video 11' },
    { src: 'https://www.instagram.com/p/POST_ID_12/', alt: 'Post 12' }
  ];
 

  return (
    <div>
   <div className="dev-page">
      <div className="dev-content">
        <div className="container">
    <div className="tabs">
      <button
        className={activeTab === 'websites' ? 'active' : ''}
        onClick={() => handleTabClick('websites')}
      >
        Websites
      </button>
      <button
        className={activeTab === 'mobile' ? 'active' : ''}
        onClick={() => handleTabClick('mobile')}
      >
        Mobile-Applications
      </button>
      <button
        className={activeTab === 'ecommerce' ? 'active' : ''}
        onClick={() => handleTabClick('ecommerce')}
      >
        Ecommerce
      </button>
      <button
        className={activeTab === 'cms' ? 'active' : ''}
        onClick={() => handleTabClick('cms')}
      >
        CMS
      </button>
    </div>
    </div>

    <div className="dev">
      {activeTab === 'websites' &&
        websites.map((image, index) => (
          <img
            key={index}
            className="dev__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'mobile' &&
        mobile.map((image, index) => (
          <img
            key={index}
            className="dev__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'ecommerce' &&
        ecommerce.map((image, index) => (
          <img
            key={index}
            className="dev__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'cms' &&
        cms.map((image, index) => (
          <img
            key={index}
            className="dev__item"
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

export default Dev;