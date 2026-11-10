
import React from 'react';
import { FULL_NAME, TITLE, BIO, SKILLS, EXPERIENCES, EDUCATIONS } from './constants';
import ChatBot from './components/ChatBot';
import ParticleCanvas from './components/ParticleCanvas';
import SideNav from './components/SideNav';
import WordCube from './components/WordCube';
import SkillSolarSystem from './components/SkillSolarSystem';

const App: React.FC = () => {
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.reveal-content')?.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.snap-section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <SideNav />

      {/* Dynamic Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="w-full px-6 lg:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-cyan-400 font-bold tracking-tighter text-xl">{FULL_NAME}</span>
            <div className="hidden sm:block h-4 w-px bg-slate-800"></div>
            <span className="hidden sm:block text-[10px] font-mono text-slate-500 uppercase tracking-widest">{TITLE}</span>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-mono text-slate-500 uppercase">System_Load</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <div key={i} className="w-3 h-1 bg-cyan-500/40"></div>)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full">

        {/* 01 // Hero Section - The Architect */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center snap-section pt-16 overflow-hidden">
          <ParticleCanvas />
          <div className="reveal-content is-visible w-full flex flex-col items-center justify-center text-center px-6 lg:px-12">
            <div className="relative z-10 space-y-10 max-w-4xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] uppercase tracking-widest mx-auto">
                Available_for_Scale
              </div>
              <WordCube />
              <div className="flex flex-wrap justify-center gap-4 font-mono text-[10px]">
                <div className="px-6 py-2 bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm"># DEVOPS</div>
                <div className="px-6 py-2 bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm"># SOLUTIONS_ARCHITECT_AWS</div>
                <div className="px-6 py-2 bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm"># DESARROLLADOR_SENIOR_FULL_STACK</div>
              </div>
            </div>
          </div>
        </section>


        {/* 02 // Skills - The Silicon Architecture */}
        <section id="skills" className="min-h-screen flex items-center snap-section pt-20 pb-12 overflow-hidden">
          <div className="reveal-content w-full flex flex-col justify-center px-6 lg:px-32 relative">
            <div className="flex items-center gap-4 mb-6 relative z-30">
              <div className="section-tag">System_Resources_Matrix</div>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <SkillSolarSystem />
            </div>
          </div>
        </section>


        {/* 03 // Experience - The Commit History */}
        <section id="experience" className="min-h-screen flex items-center snap-section pt-24 pb-16">
          <div className="reveal-content w-full flex flex-col justify-center px-6 lg:px-32">
            <div className="section-tag mb-10" style={{ borderColor: 'var(--ops-lime)' }}>Deployment_Registry</div>
            <div className="relative space-y-10">
              {/* Timeline Line */}
              <div className="absolute left-0 lg:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-lime-400/50 via-slate-800 to-transparent"></div>

              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-10 lg:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 lg:left-4 top-1.5 -translate-x-1/2 w-2.5 h-2.5 bg-white border-2 border-lime-500 rounded-full z-10 group-hover:scale-150 transition-transform"></div>

                  <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="lg:col-span-3 pt-0.5">
                      <div className="text-lime-600 font-mono text-[11px] font-bold uppercase tracking-widest mb-1">{exp.period}</div>
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-tight">{exp.company}</div>
                    </div>

                    <div className="lg:col-span-9">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-lime-600 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="space-y-2">
                        {exp.description.map((item, i) => (
                          <p key={i} className="text-sm lg:text-base text-slate-600 font-light leading-relaxed max-w-3xl border-l-2 border-slate-200 pl-4 hover:border-lime-500/50 transition-colors">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 // Education - Academic Credentials */}
        <section id="education" className="min-h-screen flex items-center snap-section pt-24 pb-16">
          <div className="reveal-content w-full flex flex-col justify-center px-6 lg:px-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="section-tag">Academic_Credentials // Educación</div>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
            </div>

            <div className="grid gap-6 max-w-5xl">
              {EDUCATIONS.map((edu, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border border-slate-200 hover:border-cyan-500/40 p-6 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <i className={`fa-solid ${edu.icon || 'fa-graduation-cap'} text-base`}></i>
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-cyan-600 transition-colors">
                            {edu.institution}
                          </h3>
                          {edu.status && (
                            <span className="px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 font-mono text-[10px] uppercase tracking-widest">
                              {edu.status}
                            </span>
                          )}
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 font-medium">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    <div className="lg:text-right shrink-0">
                      <span className="inline-block font-mono text-xs text-cyan-600 uppercase tracking-widest bg-slate-50 border border-slate-200 px-3 py-1">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                        Actividades y grupos // Especialización
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.highlights.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 // AI & Interaction */}
        <section id="contact" className="min-h-screen flex items-center snap-section pt-24 pb-16">
          <div className="reveal-content w-full flex flex-col justify-center px-6 lg:px-32">
            <div className="space-y-16">
              <div className="space-y-6">
                <div className="section-tag w-fit" style={{ borderColor: '#000' }}>Kernel_Communication</div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                  Let's Build the <br />
                  <span className="text-shimmer">Next Big Thing</span>
                  <span className="inline-block w-[0.2em] h-[0.8em] bg-cyan-500 ml-2 animate-pulse align-middle"></span>
                </h2>
                <p className="text-slate-600 text-xl font-light leading-relaxed max-w-2xl">
                  Disponible para colaboraciones estratégicas en arquitectura de software y cultura DevOps.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 border-t border-slate-200">
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">Email_Primary</div>
                  <a href="mailto:janchundiaws@gmail.com" className="block text-xl font-light text-slate-900 hover:text-cyan-600 transition-colors duration-300">
                    janchundiaws@gmail.com
                  </a>
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">Email_Secondary</div>
                  <a href="mailto:junior_soza@hotmail.es" className="block text-xl font-light text-slate-900 hover:text-cyan-600 transition-colors duration-300">
                    junior_soza@hotmail.es
                  </a>
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">Voice_Primary</div>
                  <a href="tel:0978675066" className="block text-xl font-light text-slate-900 hover:text-cyan-600 transition-colors duration-300">
                    +593 97 867 5066
                  </a>
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">Voice_Secondary</div>
                  <a href="tel:0986659913" className="block text-xl font-light text-slate-900 hover:text-cyan-600 transition-colors duration-300">
                    +593 98 665 9913
                  </a>
                </div>
              </div>

              <div className="pt-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">System_Status: Online_&_Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-20 border-t border-slate-100">
        <div className="w-full px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[10px] text-slate-700 uppercase tracking-widest">
            Built_with: React // 2025_Edition
          </div>
          <div className="flex gap-8 text-xl text-slate-600">
            <a href="https://github.com/barbaroja0803"><i className="fa-brands fa-github hover:text-cyan-400 cursor-pointer transition-colors"></i></a>
            <a href="https://www.linkedin.com/in/william-anchundia-soza/"><i className="fa-brands fa-linkedin hover:text-cyan-400 cursor-pointer transition-colors" ></i></a>
            <i className="fa-solid fa-terminal hover:text-cyan-400 cursor-pointer transition-colors"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
