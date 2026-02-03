
import React from 'react';
import { FULL_NAME, TITLE, BIO, SKILLS, EXPERIENCES } from './constants';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-black">
      
      {/* Header técnico */}
      <header className="fixed top-0 w-full z-50 border-b border-cyan-500/20 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-mono text-cyan-400 font-bold text-lg tracking-tighter">
              <span className="opacity-50">&lt;</span> ARCHITECT <span className="opacity-50">/&gt;</span>
            </div>
            <div className="h-4 w-px bg-cyan-500/20 hidden sm:block"></div>
            <div className="hidden sm:block text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.2em]">
              Junior William Anchundia Soza
            </div>
          </div>
          <nav className="flex gap-8 text-[11px] font-mono font-medium uppercase tracking-widest">
            <a href="#bio" className="hover:text-cyan-400 transition-colors">01.Base</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">02.Stack</a>
            <a href="#exp" className="hover:text-cyan-400 transition-colors">03.History</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
        
        {/* Decoración lateral de coordenadas */}
        <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-24 text-[10px] font-mono text-cyan-900 pointer-events-none">
          <span>LAT: 0.9472</span>
          <span>LNG: -80.7269</span>
          <span>ALT: 1024m</span>
        </div>

        {/* Sección 01: The Root Node */}
        <section id="bio" className="mb-40 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-cyan-500 font-mono text-xs mb-2 tracking-[0.3em]">SYSTEM_IDENTITY_V8</div>
                <h1 className="text-6xl font-bold text-white tracking-tighter leading-none">
                  JUNIOR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ANCHUNDIA</span>
                </h1>
                <p className="text-xl text-cyan-100/60 font-mono mt-4">
                  &gt; {TITLE}
                </p>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-cyan-500/20 pl-6 max-w-xl">
                {BIO}
              </p>
              <div className="flex gap-4">
                <button className="blueprint-card px-8 py-4 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/10 active:scale-95 transition-all">
                  Iniciate_Session()
                </button>
                <div className="flex items-center gap-6 px-4 text-gray-500">
                  <i className="fa-brands fa-github text-xl hover:text-cyan-400 cursor-pointer"></i>
                  <i className="fa-brands fa-linkedin text-xl hover:text-cyan-400 cursor-pointer"></i>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="blueprint-card aspect-square p-2 bg-black/40 group overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/0 transition-colors z-10"></div>
                <img 
                  src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Junior" 
                  alt="Avatar" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-500/50">FRAME_ID: 0x921A</div>
              </div>
              {/* Elementos decorativos de plano */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-cyan-500/10 flex items-center justify-center -z-10 animate-spin-slow">
                <div className="w-24 h-24 border border-cyan-500/20 rotate-45"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 02: Skill Infrastructure */}
        <section id="skills" className="mb-40">
          <div className="flex flex-col md:flex-row gap-8 items-end mb-16">
            <h2 className="text-4xl font-bold text-white tracking-tighter">Stack_Infrastructure</h2>
            <div className="h-px flex-1 bg-cyan-500/20 mb-4"></div>
            <span className="text-xs font-mono text-cyan-800 uppercase tracking-widest mb-2">Technical Specifications</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="blueprint-card p-6 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <i className={`fa-solid ${skill.icon}`}></i>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-800">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{skill.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-cyan-600">
                    <span>STABILITY</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-0.5 w-full bg-cyan-950">
                    <div 
                      className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección 03: Deployment History */}
        <section id="exp" className="mb-40">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-4">
                <h2 className="text-4xl font-bold text-white tracking-tighter">Career_Log</h2>
                <p className="text-gray-500 text-sm font-mono leading-relaxed">
                  Secuencia de despliegues y evolución de arquitectura profesional durante los últimos 8 años.
                </p>
                <div className="pt-8">
                  <div className="blueprint-card p-4 inline-block">
                    <div className="text-[10px] font-mono text-cyan-500">SYSTEM_UPTIME: 2920 DAYS</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-12 before:absolute before:left-0 before:top-4 before:w-4 before:h-4 before:border before:border-cyan-500 before:bg-blueprint-bg before:z-10 group">
                  {idx !== EXPERIENCES.length - 1 && (
                    <div className="absolute left-2 top-8 bottom-[-48px] w-px bg-cyan-500/20"></div>
                  )}
                  <div className="blueprint-card p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                        <p className="text-cyan-600 font-mono text-sm">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 bg-black/40 px-3 py-1 border border-white/5">{exp.period}</span>
                    </div>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex gap-4 leading-relaxed italic">
                          <span className="text-cyan-800 mt-1 font-mono">[{i}]</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI System Console */}
        <div className="fixed bottom-8 right-8 z-50 w-full max-w-sm hidden md:block">
           <ChatBot />
        </div>

      </main>

      {/* Footer minimalista */}
      <footer className="border-t border-cyan-500/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-cyan-900 uppercase tracking-widest">
            Junior William Anchundia Soza &copy; {new Date().getFullYear()} // BUILD_SUCCESS
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-cyan-700 uppercase">
             <span className="hover:text-cyan-400 cursor-pointer">Status: Operational</span>
             <span className="hover:text-cyan-400 cursor-pointer">Protocol: HTTPS/3</span>
             <span className="hover:text-cyan-400 cursor-pointer">Region: ECU-MAN-01</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
