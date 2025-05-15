import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-100 text-sm text-gray-600 mt-10">
      <p>
        View this project on {' '}
        <a
          href="https://github.com/Elmari121/weather-react"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
         Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
