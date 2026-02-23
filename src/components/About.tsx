import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
// using simple transitions instead of motion/react
import { Shield, Terminal, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const { about } = useSelector((state: RootState) => state.profile);

  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-12 relative overflow-hidden transition-opacity duration-1000">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Shield size={120} className="text-cyber-accent" />
        </div>
        
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Terminal className="text-cyber-accent" />
          About Me
        </h2>
        
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          {about}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/5">
            <Shield className="text-cyber-accent mb-3" />
            <span className="text-sm font-medium">Security First</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/5">
            <Terminal className="text-cyber-accent mb-3" />
            <span className="text-sm font-medium">Code Driven</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/5">
            <Cpu className="text-cyber-accent mb-3" />
            <span className="text-sm font-medium">Hardware Aware</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
