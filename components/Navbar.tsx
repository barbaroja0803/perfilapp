
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-white">J</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">JUNIOR<span className="text-sky-400">ANCHUNDIA</span></span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-sky-400 transition-colors">Sobre mí</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experiencia</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
