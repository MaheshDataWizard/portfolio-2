import React, { useState } from 'react'
import assets from '../assets/assets'

const GetInTouch = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_API_KEY_WEB3);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div id="contact" className="mx-5 sm:mx-20 my-10">
      <h3 className="text-4xl sm:text-5xl font-semibold text-center my-10">
        Get In Touch
      </h3>

      <div className="flex flex-col sm:flex-row gap-10 items-center justify-between">
        {/* Left Info Section */}
        <div className="flex-1 flex-col">
          <h1 className="text-3xl text-center sm:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]">
            Let's talk
          </h1>
          <p className="max-sm:text-sm py-5 mt-8">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <p className="flex gap-5 pr-5 py-3">
            <img src={assets.mail_icon} className="w-4" alt="" />
            rushabhkaldate@gmail.com
          </p>
          <p className="flex gap-5 pr-5 py-3">
            <img src={assets.call_icon} className="w-4" alt="" />
            +91-876-775-1145
          </p>
          <p className="flex gap-5 pr-5 py-3">
            <img src={assets.location_icon} className="w-4" alt="" />
            Pune, India
          </p>
          <hr className="sm:hidden text-[#B923E1] mx-20 mt-5" />
        </div>

        {/* Contact Form */}
        <div className="flex-1 py-5 w-full">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="text-white/80 p-2 bg-[#32323c] rounded-md"
              placeholder="Enter your name"
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="text-white/80 p-2 bg-[#32323c] rounded-md"
              placeholder="Enter your email"
            />

            <label>Write your message here</label>
            <textarea
              rows={4}
              name="message"
              required
              className="text-white/80 p-2 bg-[#32323c] rounded-md"
              placeholder="Enter your message"
            />

            <button
              type="submit"
              className="rounded-full p-3 w-40 text-white font-medium 
                         bg-gradient-to-r from-[#B923E1] to-[#DA7C25] 
                         hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Submit now
            </button>
          </form>

          {/* Result Message */}
          {result && (
            <p className="mt-3 text-sm text-center text-green-400">{result}</p>
          )}
        </div>
      </div>
      <hr className='text-[#B923E1] mx-10 sm:hidden' />
    </div>
  );
};

export default GetInTouch;
