import React from 'react';

const Testimonial = ({ imageSrc, name, role, rating, description }) => {
  return (
    <div className="mb-6 lg:mb-0">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:shadow-lg transition-shadow">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img src={imageSrc} className="w-full rounded-t-lg h-[300px]" alt={name} />
          <a href="#!">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
          </a>
          <svg className="absolute left-0 bottom-0 text-gold dark:text-gold dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-lg font-bold">{name}</h5>
          <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
            {role}
          </h6>
          <ul className="mb-6 flex justify-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className={`w-5 ${index < rating ? 'text-warning' : 'text-gold dark:text-gold dark:text-primary-400'}`}>
                  <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            ))}
          </ul>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
