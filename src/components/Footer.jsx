import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-400 text-sm py-6 bg-gray-900">
      &copy; {new Date().getFullYear()} <span className="text-white font-medium">DoyinSpace</span>. Built with 💙 using <span className="text-blue-400 font-semibold">React</span>.
    </footer>
  );
};

export default Footer;
