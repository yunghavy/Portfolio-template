import React, { useState } from 'react';

import inquiryImage from '../images/home/c1.jpg'; 
import bookingImage from '../images/home/c2.jpg';

function Contact() {
  const [message, setMessage] = useState('');
  const [selectedForm, setSelectedForm] = useState('inquiry');
  const [selectedSubject, setSelectedSubject] = useState('');


  const handleInquiryForm = () => {
    setSelectedForm('inquiry');
  };

  const handleBookingForm = () => {
    setSelectedForm('booking');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setMessage('Please wait...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: json,
      });

      if (response.status === 200) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Something went wrong!');
      console.log(error);
    }

    form.reset();
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);

  };

  const formTitle = selectedForm === 'booking' ? 'Book With Us Today' : 'What\'s Your Inquiry?';

  const formBackground = selectedForm === 'booking' ? `url(${bookingImage})` : `url(${inquiryImage})`;
  const containerStyle = {
    backgroundImage: formBackground,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    
  };

  return (
    <div style={containerStyle}
    className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="justify-center container mx-auto flex flex-col md:flex-row">
      <div
        className="max-w-md mx-auto md:mx-0 md:my-10 p-10 rounded-lg custom-box-shadow flex flex-col items-center"
      >
        <div className="text-center mb-10">
          <h1 className="my-3 text-3xl font-semibold text-white dark:text-gray-200">{formTitle}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedForm === 'booking'
              ? 'Fill up the booking form below to make a reservation.'
              : 'Fill up the form below to send us a message.'}
          </p>
        </div>
        {selectedForm === 'inquiry' && (
          <div className="booking-form-container bg-white p-4 shadow-md">
          <form onSubmit={handleSubmit} className="w-full">
                <input type="hidden" name="access_key" value="192be1a3-2dcc-4854-a9e3-f20bc26ec0b0" />
                <input type="hidden" name="subject" value="New Submission from your Website" />
                <input type="hidden" name="from_name" value="Mission Control"></input>
                <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+1 (555) 1234-567"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 text-white bg-teal-500 rounded-md focus:bg-teal-800 focus:outline-none hover:bg-teal-600"
                  >
                    Send Message
                  </button>
                </div>
                <p className="text-base text-center text-gray-500" id="result">
                  {message}
                </p>
              </form>
              </div>
              )}
            {selectedForm === 'booking' && (
            <div className="mt-5 w-full">
              <div className="booking-form-container bg-white p-4 shadow-md">
                <form className="w-full">
                    <div className="mb-4">
                      <label htmlFor="name" className="block font-bold mb-1">Name:</label>
                      <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block font-bold mb-1">Email:</label>
                      <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block font-bold mb-1">Subject:</label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border rounded-md"
                        value={selectedSubject}
                        onChange={handleSubjectChange}>
                        <option value="">Select a subject</option>
                        <option value="photography">Photography</option>
                        <option value="videography">Videography</option>
                        <option value="graphic_designing">Graphic Designing</option>
                        <option value="website_development">Website Development</option>
                        <option value="collaboration">Collaboration</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="block font-bold mb-1">Message:</label>
                      <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-md" rows="4" />
                    </div>

                    {selectedSubject !== 'graphic_designing' && selectedSubject !== 'website_development' && (
                      <div className="mb-4">
                        <label htmlFor="date" className="block font-bold mb-1">Date:</label>
                        <input type="date" id="date" name="date" className="w-full px-4 py-2 border rounded-md" />
                      </div>
                    )}
                    <button type="submit" className=" bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      
      <div className="flex flex-col justify-center mt-3 md:mt-0 md:ml-3">
          <button
            onClick={handleInquiryForm}
            className={`w-full md:w-auto px-4 py-2 my-2 md:my-0 rounded-lg ${selectedForm === 'inquiry'
              ? 'bg-teal-500 text-white'
              : 'bg-gray-300 text-gray-600'
              }`}
          >
            Inquiry
          </button>
          <button
            onClick={handleBookingForm}
            className={`w-full md:w-auto px-4 py-2 my-2 md:my-0 rounded-lg ${selectedForm === 'booking'
              ? 'bg-teal-500 text-white'
              : 'bg-gray-300 text-gray-600'
              }`}
          >
            Booking
          </button>
        </div>
        <div style={{ height: '100px' }}></div> 
        </div>
  );
}

export default Contact;



