import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center py-10 text-white bg-[url(./assets/mountain.png)] h-[350px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center h-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-white inline-block pb-1">Stay in Touch</h2>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none w-64"
            />
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r-md hover:bg-gray-400 transition">
              Submit
            </button>
          </div>
        </div>
        <div className="w-full bg-[#232F3899] bg-opacity-70 py-4 mt-13">
          <div className="max-w-6xl mx-auto px-4 p-[38px]">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Escape.</div>
              <div className="flex space-x-6">
                <a href="#" className="hover:underline">HOME</a>
                <a href="#" className="hover:underline">CATEGORY</a>
                <a href="#" className="hover:underline">ABOUT</a>
                <a href="#" className="hover:underline">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;