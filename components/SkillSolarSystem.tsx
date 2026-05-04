
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skill } from '../types';
import { SKILLS } from '../constants';



const SkillSolarSystem: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Constants for orbit layout
  const CENTER_SIZE = 180;
  const BASE_ORBIT_RADIUS = 260;

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] flex items-center justify-center overflow-visible">
      {/* Intense Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15)_0%,_transparent_70%)] rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_50%)] rounded-full blur-[100px]"></div>

      {/* The Sun (Center Name) - High Contrast */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative z-20 flex flex-col items-center justify-center"
      >
        <div
          className="relative group cursor-default"
          style={{ width: CENTER_SIZE, height: CENTER_SIZE }}
        >
          {/* Pulsing rings around the name - More prominent */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 border-4 border-cyan-400/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{ scale: [1.2, 1.6, 1.2], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute inset-0 border-2 border-cyan-400/10 rounded-full"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900 border-2 border-cyan-400/50 rounded-full shadow-[0_0_80px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_120px_rgba(34,211,238,0.6)] transition-all duration-700">
            <h2 className="text-2xl font-black text-white text-center leading-tight tracking-tighter">
              WILLIAM<br />ANCHUNDIA<br />SOZA
            </h2>
            <div className="mt-4 w-16 h-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          </div>
        </div>
      </motion.div>

      {/* Skill Planets */}
      <div className="absolute inset-0 flex items-center justify-center">
        {SKILLS.map((skill, idx) => {
          const orbitRadius = BASE_ORBIT_RADIUS + (idx % 2 === 0 ? 0 : 80);
          const orbitDuration = 30 + idx * 10;
          const initialAngle = (idx / SKILLS.length) * 360;

          return (
            <React.Fragment key={skill.name}>
              {/* More visible Orbit Path Ring */}
              <div
                className="absolute border-2 border-slate-200/40 rounded-full pointer-events-none"
                style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
              >
                {/* Orbital particles (dots) */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-slate-300 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-${orbitRadius}px)`
                    }}
                  ></div>
                ))}
              </div>

              <motion.div
                className="absolute"
                initial={{ rotate: initialAngle }}
                animate={{
                  rotate: initialAngle + 360
                }}
                transition={{
                  duration: orbitDuration,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  width: orbitRadius * 2,
                  height: orbitRadius * 2,
                }}
              >
                <motion.div
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    rotate: -(initialAngle)
                  }}
                  animate={{
                    rotate: -(initialAngle + 360)
                  }}
                  transition={{
                    duration: orbitDuration,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >

                  <motion.div
                    whileHover={{ scale: 1.3, zIndex: 50 }}
                    onClick={() => setSelectedSkill(skill)}
                    className="group relative cursor-pointer"
                  >

                    {/* Light Planet Body */}
                    <div 
                      className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full shadow-xl flex items-center justify-center transition-all duration-500"
                      style={{ 
                        color: skill.color || '#334155'
                      }}
                    >
                      {/* Internal subtle glow with brand color on hover */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                      <i className={`fa-solid ${skill.icon} text-3xl relative z-10 group-hover:scale-110 transition-all`}></i>
                    </div>

                    {/* Light Planet Label */}
                    <motion.div
                      className="absolute top-full mt-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none"
                    >
                      <div 
                        className="px-4 py-2 bg-white text-xs font-black rounded-xl border-2 uppercase tracking-[0.2em] shadow-xl whitespace-nowrap"
                        style={{ 
                          borderColor: skill.color + '40',
                          color: skill.color 
                        }}
                      >
                        {skill.name}
                      </div>
                    </motion.div>

                  </motion.div>


                </motion.div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>



      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white p-8 shadow-2xl overflow-hidden border border-slate-200"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 border-l border-b border-slate-100 -mr-16 -mt-16 rotate-45"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-slate-900 flex items-center justify-center text-cyan-400 shadow-xl">
                    <i className={`fa-solid ${selectedSkill.icon} text-2xl`}></i>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <i className="fa-solid fa-xmark text-xl"></i>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-1">{selectedSkill.category}</div>
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{selectedSkill.name}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-mono text-slate-400 uppercase">Proficiency_Level</span>
                      <span className="text-xl font-black text-cyan-600">{selectedSkill.level}%</span>
                    </div>

                    <div className="flex gap-1.5 h-2">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 transition-all duration-500 ${i < selectedSkill.level / 10 ? 'bg-cyan-500' : 'bg-slate-100'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-light">
                      Experiencia avanzada en {selectedSkill.name}. Implementación de soluciones escalables y optimización de rendimiento en entornos de producción críticos.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded flex flex-col">
                      <span className="text-[8px] font-mono text-slate-400 uppercase">Architecture</span>
                      <span className="text-[10px] font-bold text-slate-800">DISTRIBUTED</span>
                    </div>
                    <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded flex flex-col">
                      <span className="text-[8px] font-mono text-slate-400 uppercase">Latency</span>
                      <span className="text-[10px] font-bold text-slate-800">LOW_0.2ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillSolarSystem;
