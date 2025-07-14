import React from 'react';

const Header = ({ onNavClick, mobileMenuOpen, setMobileMenuOpen }) => (
  <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">Võ Công Nam</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => onNavClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">About</button>
          <button onClick={() => onNavClick('skills')} className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Skills</button>
          <button onClick={() => onNavClick('projects')} className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Projects</button>
          <button onClick={() => onNavClick('contact')} className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Contact</button>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <div className="flex flex-col space-y-3">
            <button onClick={() => onNavClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer">About</button>
            <button onClick={() => onNavClick('skills')} className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer">Skills</button>
            <button onClick={() => onNavClick('projects')} className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer">Projects</button>
            <button onClick={() => onNavClick('contact')} className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer">Contact</button>
          </div>
        </nav>
      )}
    </div>
  </header>
);

export default Header; 