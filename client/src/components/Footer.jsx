// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
     <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 z-10">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} TaskNest. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="/contact-us" className="hover:text-orange-400 transition">Contact</a>
        <a href="/templates" className="hover:text-orange-400 transition">Templates</a>
        <a href="/user-profile" className="hover:text-orange-400 transition">Profile</a>
      </div>
    </div>
  </footer>


  );
};

export default Footer;
