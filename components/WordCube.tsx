import React, { useState, useEffect } from 'react';

const words = ['BUILD', 'DEPLOY', 'EVOLVE'];

const WordCube: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 600); // Match CSS transition time
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index];

  return (
    <h1 className="text-4xl sm:text-6xl lg:text-[10rem] font-extrabold text-slate-900 tracking-tighter leading-[0.85] uppercase flex flex-wrap justify-center perspective-1000">
      {currentWord.split('').map((char, i) => (
        <span
          key={`${index}-${i}`}
          className={`inline-block transition-all duration-700 cube-letter ${isAnimating ? 'animating' : ''}`}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          {char === '.' ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">.</span>
          ) : (
            char
          )}
        </span>
      ))}
    </h1>
  );
};

export default WordCube;
