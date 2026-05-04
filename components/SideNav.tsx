import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: '01 // ARCHITECT' },
  { id: 'skills', label: '02 // RESOURCES' },
  { id: 'experience', label: '03 // REGISTRY' },
  { id: 'contact', label: '04 // KERNEL' },
];

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-10 p-8 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2rem] items-end shadow-2xl">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-6 focus:outline-none"
        >
          <div className="flex flex-col items-end">
            <span className={`
              font-mono text-[11px] tracking-[0.2em] transition-all duration-300
              ${activeSection === section.id 
                ? 'text-cyan-600 opacity-100' 
                : 'text-slate-400 opacity-60 group-hover:opacity-100'}
            `}>
              {section.label.split(' // ')[0]}
            </span>
            <span className={`
              font-black text-[13px] tracking-widest uppercase transition-all duration-300
              ${activeSection === section.id 
                ? 'text-slate-900 translate-x-0' 
                : 'text-slate-400 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}
            `}>
              {section.label.split(' // ')[1]}
            </span>
          </div>
          
          <div className="relative">
            <div className={`
              h-10 transition-all duration-500 rounded-full
              ${activeSection === section.id 
                ? 'w-1.5 bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)]' 
                : 'w-0.5 bg-slate-300 group-hover:bg-slate-400 group-hover:w-1.5'}
            `}></div>
            {activeSection === section.id && (
              <div className="absolute inset-0 w-1.5 bg-cyan-600 animate-ping opacity-20 rounded-full"></div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SideNav;
