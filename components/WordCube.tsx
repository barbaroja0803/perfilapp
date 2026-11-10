import React, { useState, useEffect } from 'react';

const words = [
  'DEVOPS',
  'SOLUTIONS ARCHITECT AWS',
  'DESARROLLADOR SENIOR FULL STACK',
];

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
  const sizeClass =
    currentWord.length > 24
      ? 'text-2xl sm:text-4xl lg:text-6xl'
      : currentWord.length > 12
        ? 'text-3xl sm:text-5xl lg:text-7xl'
        : 'text-4xl sm:text-6xl lg:text-[9rem]';

  let charCounter = 0;

  return (
    <h1
      className={`${sizeClass} min-h-[8rem] sm:min-h-[10rem] font-extrabold text-slate-900 tracking-tighter leading-[0.95] uppercase flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 perspective-1000`}
    >
      {currentWord.split(' ').map((word, wIdx) => (
        <span key={`${index}-w-${wIdx}`} className="inline-flex whitespace-nowrap">
          {word.split('').map((char) => {
            const delay = Math.min(charCounter * 25, 350);
            charCounter += 1;
            return (
              <span
                key={`${index}-${charCounter}`}
                className={`inline-block transition-all duration-700 cube-letter ${isAnimating ? 'animating' : ''}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {char === '.' ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">.</span>
                ) : (
                  char
                )}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};

export default WordCube;
