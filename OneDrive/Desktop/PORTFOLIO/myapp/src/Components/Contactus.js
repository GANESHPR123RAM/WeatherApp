import React, { useState } from 'react';
import ok from '../Components/asset/ok.png';

const ContactPage = () => {
  const [result, setResult] = React.useState("send message");
  
  const sendMessage = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "9e9f0aed-8d4a-468c-a5c1-12588da456cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full py-3 min-h-screen" id='Contactus' style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-4">Get in touch</h2>
      <form onSubmit={sendMessage} className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-transparent p-6 rounded-lg shadow-md">
        <input type="hidden" name="apikey" value="fd747826-480e-411d-bca8-ef8405d50217"/>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </form>
      <span className="text-white text-sm mt-2 font-bold">{result}</span>
    </div>
  );
};

export default ContactPage;
