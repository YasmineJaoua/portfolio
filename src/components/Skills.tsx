import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
// using tailwind transitions instead of external motion package
import { Code, Globe, Server, ShieldCheck } from 'lucide-react';

const Skills: React.FC = () => {
  const { skills } = useSelector((state: RootState) => state.profile);

  const getIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('programming') || cat.includes('development') || cat.includes('control')) return <Code size={20} />;
    if (cat.includes('cyber') || cat.includes('security') || cat.includes('blockchain')) return <ShieldCheck size={20} />;
    if (cat.includes('web') || cat.includes('frontend') || cat.includes('cloud')) return <Globe size={20} />;
    if (cat.includes('operating') || cat.includes('database') || cat.includes('intelligence')) return <Server size={20} />;
    return <Code size={20} />;
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="glass-card p-6 flex flex-col items-center justify-center text-center border-white/5 transition transform hover:scale-105 hover:shadow-lg"
          >
            <div className="text-cyber-accent mb-4 p-3 rounded-full bg-cyber-accent/10">
              {getIcon(skill.category)}
            </div>
            <h3 className="font-semibold text-slate-200">{skill.name}</h3>
            <span className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
