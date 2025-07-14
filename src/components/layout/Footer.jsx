import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h3 className="text-white mb-4 text-2xl font-bold">Võ Công Nam</h3>
        <p className="text-gray-400 mb-6">
          Frontend Developer passionate about creating amazing web experiences
        </p>
        <div className="mb-8 flex justify-center gap-4">
          <a href="https://linkedin.com/in/nam-developer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/nam-developer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer text-2xl"><i className="fab fa-github"></i></a>
          <a href="https://behance.net/nam-developer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer text-2xl"><i className="fab fa-behance"></i></a>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <span className="text-gray-400">© 2024 NamVo. All rights reserved.</span>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-400 hover:text-white mt-4 cursor-pointer flex items-center mx-auto"
        >
          <i className="fas fa-arrow-up mr-2"></i>Back to Top
        </button>
      </div>
    </div>
  </footer>
);

export default Footer; 