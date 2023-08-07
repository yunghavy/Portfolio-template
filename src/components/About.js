import React, { useState, useEffect } from 'react';
import './about.css';
import { BiCamera, BiFilm, BiPaint, BiBrush, BiBracket, BiPencil } from 'react-icons/bi';
import Testimonials from './Testimonials';


const About = () => {
  const unsplashPhotoUrl =
    'https://images.unsplash.com/photo-1688637737426-10cfce2fb1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60';

  const servicesData = [
    {
      icon: <BiCamera />,
      title: "Photography",
      description: [
        "Portrait, event, and product photography.",
        "Variety of lighting setups.",
        "Adobe Photoshop and Lightroom editing.",
      ],
    },
    {
      icon: <BiFilm />,
      title: "Cinematography",
      description: [
        "Use of DSLRs, mirrorless, and cinema cameras.",
        "Wide range of lenses for different effects.",
        "Creating mood and atmosphere through cinematography.",
      ],
    },
    {
      icon: <BiPaint />,
      title: "Color grading & Editing",
      description: [
        "I use a variety of camera equipment, including DSLRs, mirrorless cameras, and cinema cameras.",
        "I have experience with a variety of color grading and editing techniques.",
        "I start by understanding the client's vision for their project, then use color grading and editing to bring that vision to life.",
      ],
    },
    {
      icon: <BiBrush />,
      title: "Graphic Designing",
      description: [
        "I am proficient in a variety of design software, including Adobe Photoshop, Illustrator, InDesign, and Sketch..",
        "I use this software to create a wide range of graphics, from logos and branding to marketing materials and website designs.",
        "I am a creative thinker with strong problem-solving skills. I am able to take a client's vision and translate it into a compelling visual representation.",
      ],
    },
    {
      icon: <BiBracket />,
      title: "Software Development",
      description: [
        "I am proficient in a variety of programming languages, including Python, Java, C++, and JavaScript",
        "I am also experienced with different software development frameworks and tools.",
        "I have experience working on a variety of software projects, including web applications, mobile apps, and desktop applications. I am committed to creating reliable and efficient software applications.",
      ],
    },
    {
      icon: <BiPencil />,
      title: "Script Writer",
      description: [
        "I have written screenplays, commercials, and video narratives for a variety of genres.",
        "I am also experienced in writing for different platforms, such as film, television, and the web.",
        "I have a passion for storytelling and I am dedicated to creating stories that entertain, inform, and inspire people.",
      ],
    },
  ]
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const countValues = [300, 789, 24600, 47];

    const countIntervals = counts.map((_, index) => {
      const interval = setInterval(() => {
        if (counts[index] < countValues[index]) {
          setCounts(prevCounts => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] += Math.ceil((countValues[index] - prevCounts[index]) / 20);
            return updatedCounts;
          });
        } else {
          clearInterval(interval);
        }
      }, 50);

      return interval;
    });

    return () => {
      countIntervals.forEach(interval => clearInterval(interval));
    };
  }, [counts]);

  const factData = [
    {
      icon: "fa-code",
      count: counts[0],
      label: "Clients",
      col: "fourth",
    },
    {
      icon: "fa-coffee",
      count: counts[1],
      label: "Projects",
      col: "fourth",
    },
    {
      icon: "fa-lightbulb-o",
      count: counts[2],
      label: "Hours",
      col: "fourth",
    },
    {
      icon: "fa-bug",
      count: counts[3],
      label: "Collaborations",
      col: "fourth end",
    },
  ];


  const SkillItem = ({ name, percentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPercentage(prevPercentage => {
          const step = Math.ceil((percentage - prevPercentage) / 20);
          return Math.min(prevPercentage + step, percentage);
        });
      }, 50);

      return () => clearInterval(interval);
    }, [percentage]);

    return (
      <div className="skill-item">
        <h3>{name}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${currentPercentage}%` }}></div>
        </div>
        <span className="skill-percentage">{currentPercentage}%</span>
      </div>
    );
  };
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="container">
          <div className="about-bio">
            <h2>About</h2>
            <h3>Hi, I'm Jaffer Kimutai a.k.a Yung Havy</h3>
            <p>
              I'm a UI/UX Designer, Photographer, Filmmaker, Videographer, and web developer based in Nairobi, Kenya. With a passion for visual storytelling and a keen eye for detail, I strive to create captivating and immersive experiences through my work.
            </p>
            <p>
              Over the years, I have honed my skills in UI/UX design, capturing stunning photographs, and producing high-quality videos. My goal is to inspire and evoke emotion through every project I undertake, whether it's designing an intuitive user interface, capturing the perfect shot, or creating a compelling visual story.
            </p>
          </div>
          <div className="about-photo">
            <img src={unsplashPhotoUrl} alt="Yunghavy" className="photo" />
          </div>
        </div>
      </div>

      <div className="about-skills">
        <div className="container">
          <div className="about-skill">
            <h2>Skills</h2>
            <p>
              These are various skills that I have acquired from time to time consisting of Editing, color grading, web design, application development, visual effects, and the basic color corrections and CGI that I use on a daily basis.
            </p>
            <SkillItem name="Adobe Premiere Pro & After Effects" percentage={100} />
            <SkillItem name="Davinci Resolve & Blender" percentage={80} />
            <SkillItem name="Adobe Photoshop & Illustrator" percentage={100} />
            <SkillItem name="React Js, Angular Js, Laravel, Next Js & Python" percentage={94} />
          </div>
        </div>
      </div>

      <div className="about-services">
        <div className="container">
          <h2>Services</h2>
          <p>Some of the services I offer. I serve you with the best quality work.</p>
          <div className="row">
            {servicesData.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                key={index}
              >
                <div className="card">
                  <div className="card-image">
                    <div className="icon">{service.icon}</div>
                    <h4 className="title">{service.title}</h4>
                  </div>
                  <div className="card-content">
                    {service.description.map((desc, idx) => (
                      <p className="description" key={idx}>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-facts">
        <div className="container">
          <h2>Facts</h2>
          <p>Projects and clients that I have interacted with since the birth of my career and hobby turning passion since 2018 to present</p>
          <div className="wrapper">
            {factData.map((fact, index) => (
              <div className={`counter col_${fact.col}`} key={index}>
                <i className={`fa ${fact.icon} fa-2x`}></i>
                <h2 className="timer count-title count-number">{fact.count}</h2>
                <p className="count-text ">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <Testimonials />
      <div style={{ height: '100px' }}></div>
    </div>


  );
}

export default About;
