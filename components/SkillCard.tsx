
import React from 'react';
import { Skill } from '../types';

interface Props {
  skill: Skill;
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  return (
    <div className="glass-panel p-5 rounded-xl hover:border-sky-500/50 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 transition-colors">
          <i className={`fa-solid ${skill.icon} text-xl`}></i>
        </div>
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{skill.category}</span>
      </div>
      <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="mt-2 flex justify-end">
        <span className="text-xs font-mono text-sky-400">{skill.level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;
