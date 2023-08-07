import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const testimonials = [
    {
      imageSrc: '/images/testimonials/mike.JPG',
      name: 'Mike Mwa',
      role: 'Stylist',
      rating: 5,
      description: 'His work is incredible, from photography to editing and the short film we did for my brand. I will definitely call him again.',
    },
    {
      imageSrc: '/images/testimonials/kobia.jpg',
      name: 'Shelmith Kobia',
      role: 'Cinematographer & Actress',
      rating: 4,
      description: 'He has a knack for capturing natural and candid moments, bringing out the genuine emotions and happiness in each photograph.',
    },
    {
      imageSrc: '/images/testimonials/leo.jpg',
      name: 'Leonard Korir',
      role: 'CEO, Mobidev Ltd',
      rating: 5,
      description: 'From the photography he did to the amazing shots of interviews he took and his great editing, he\'s also flexible in front-end designing and technologies.',
    },
  ];

  return (
    <div className="about-testimonial">
      <div className="container">
        <div className="about-testimonial">
          <h2>Testimonials</h2>
          <p>
            “...he found his passion in photography and geared up to working with countless of clients both international and local. His profound hobby elevated him to diversing into films, editing, script writing and cinematography. His relentless pursuit of knowledge and developing skills has led to countless adventures all across the globe.”
          </p>
          <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
