
import React from 'react';
import { FULL_NAME, TITLE, BIO, SKILLS, EXPERIENCES } from './constants';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="relative">
      
      {/* Dynamic Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-cyan-400 font-bold tracking-tighter text-xl">./WILLIAM_ANCHUNDIA</span>
            <div className="hidden sm:block h-4 w-px bg-slate-800"></div>
            <span className="hidden sm:block text-[10px] font-mono text-slate-500 uppercase tracking-widest">Architect_Build: stable_v8.0</span>
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

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-32">
        
        {/* Hero Section - The Architect */}
        <section className="mb-40 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] uppercase tracking-widest">
              Available_for_Scale
            </div>
            <h1 className="text-6xl lg:text-9xl font-extrabold text-white tracking-tighter leading-[0.85]">
              BUILD.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">DEPLOY.</span><br/>
              EVOLVE.
            </h1>
            <p className="max-w-xl text-lg text-slate-400 font-light leading-relaxed">
              {BIO}
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-xs">
               <div className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400"># SOFTWARE_ENGINEERING</div>
               <div className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400"># DEVOPS_CULTURE</div>
            </div>
          </div>
          <div className="lg:col-span-4 relative group">
             <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] group-hover:bg-lime-500/20 transition-all"></div>
             <div className="relative z-10 bg-slate-900/50 border border-white/5 p-4 rounded-3xl backdrop-blur-xl">
                <img 
                  src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Junior&backgroundColor=0f172a" 
                  alt="Avatar" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="mt-4 p-4 bg-black/50 rounded-2xl font-mono text-[10px] text-cyan-400/70">
                   &gt; identity_check: Junior William Anchundia Soza<br/>
                   &gt; role: Sr_Engineer, Cloud_Specialist<br/>
                   &gt; status: Freelance <br/>
                </div>
             </div>
          </div>
        </section>

        {/* Skills - The Silicon Architecture */}
        <section id="skills" className="mb-40">
          <div className="section-tag mb-12">System_Resources (Skills)</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="skill-ic p-6">
                {/* Visual Pins */}
                <div className="ic-pin top-2 -left-1"></div>
                <div className="ic-pin top-8 -left-1"></div>
                <div className="ic-pin bottom-2 -right-1"></div>
                <div className="ic-pin bottom-8 -right-1"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400">
                    <i className={`fa-solid ${skill.icon}`}></i>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Capacity</span>
                    <span className="text-sm font-bold text-white">{skill.level}%</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-white mb-4 uppercase tracking-tight">{skill.name}</h3>
                
                <div className="space-y-1">
                   <div className="h-0.5 w-full bg-slate-800">
                      <div className="h-full bg-cyan-400" style={{width: `${skill.level}%`}}></div>
                   </div>
                   <div className="flex justify-between text-[9px] font-mono text-slate-600">
                      <span>IO_STREAM</span>
                      <span>NOMINAL</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience - The Commit History */}
        <section id="experience" className="mb-40">
           <div className="section-tag mb-12" style={{borderColor: 'var(--ops-lime)'}}>Deployment_Registry</div>
           <div className="space-y-6">
             {EXPERIENCES.map((exp, idx) => (
               <div key={idx} className="group relative bg-slate-950 border border-white/5 p-8 lg:p-12 hover:border-lime-400/30 transition-all overflow-hidden">
                 <div className="absolute right-0 top-0 p-4 font-mono text-[40px] font-black text-white/5 group-hover:text-lime-400/5 transition-all">
                   0{idx+1}
                 </div>
                 <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                   <div className="lg:w-1/3">
                      <div className="text-lime-400 font-mono text-sm mb-2">{exp.period}</div>
                      <h3 className="text-3xl font-black text-white leading-none uppercase">{exp.role}</h3>
                      <div className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-[0.2em]">{exp.company}</div>
                   </div>
                   <div className="flex-1 space-y-4">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                           <span className="text-lime-400 font-mono text-xs mt-1">push --&gt;</span>
                           <p className="text-slate-400 leading-relaxed font-light">{item}</p>
                        </div>
                      ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* AI & Interaction */}
        <section id="contact" className="grid lg:grid-cols-2 gap-12 pt-12">
           <div className="space-y-8">
              <div className="section-tag" style={{borderColor: '#fff'}}>Kernel_Communication</div>
              <h2 className="text-4xl font-extrabold text-white">¿Listo para el próximo sprint?</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Hablemos sobre arquitecturas distribuidas, optimización de performance o cómo escalar tu producto al siguiente nivel.
              </p>
              
              <div className="grid gap-4">
                 <a href="mailto:janchundiaws@gmail.com" className="flex items-center gap-6 p-4 bg-slate-900 border border-white/5 hover:border-cyan-400/50 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                       <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase">Primary_Channel</div>
                       <div className="text-slate-200 group-hover:text-cyan-400 transition-colors">janchundiaws@gmail.com</div>
                    </div>
                 </a>
              </div>
              <div className="grid gap-4">
                 <a href="mailto:junior_soza@hotmail.es" className="flex items-center gap-6 p-4 bg-slate-900 border border-white/5 hover:border-cyan-400/50 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                       <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase">Secundary_Channel</div>
                       <div className="text-slate-200 group-hover:text-cyan-400 transition-colors">junior_soza@hotmail.es</div>
                    </div>
                 </a>
              </div>
           </div>

           <div className="h-[550px]">
              <ChatBot />
           </div>
        </section>

      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
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
