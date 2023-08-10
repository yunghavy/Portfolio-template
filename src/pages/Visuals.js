import React, { useState } from 'react';
import './portifolio.css';


function Visuals() {
  const [activeTab, setActiveTab] = useState('Films');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const films = [
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
  
  const music = [
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
  
  const events = [
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
  
  const shows = [
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
   <div className="visuals-page">
      <div className="visuals-content">
        <div className="container">
    <div className="tabs">
      <button
        className={activeTab === 'films' ? 'active' : ''}
        onClick={() => handleTabClick('films')}
      >
        Films
      </button>
      <button
        className={activeTab === 'music videos' ? 'active' : ''}
        onClick={() => handleTabClick('music videos')}
      >
        Music Videos
      </button>
      <button
        className={activeTab === 'events' ? 'active' : ''}
        onClick={() => handleTabClick('Events')}
      >
        Events
      </button>
      <button
        className={activeTab === 'shows' ? 'active' : ''}
        onClick={() => handleTabClick('shows')}
      >
        Shows
      </button>
    </div>
    </div>

    <div className="visuals">
      {activeTab === 'films' &&
        films.map((image, index) => (
          <img
            key={index}
            className="visuals__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'music videos' &&
        music.map((image, index) => (
          <img
            key={index}
            className="visuals__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'events' &&
        events.map((image, index) => (
          <img
            key={index}
            className="visuals__item"
            src={image.src}
            alt={image.alt}
          />
        ))}
      {activeTab === 'shows' &&
        shows.map((image, index) => (
          <img
            key={index}
            className="visuals__item"
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

export default Visuals;