import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">CyberNamoul</h3>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Yasmine Jaoua. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyber-accent transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
          <a 
            href="https://tryhackme.com/p/6451313" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyber-accent transition-colors flex items-center gap-2"
          >
            <ExternalLink size={20} />
            <span className="text-sm">TryHackMe</span>
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-slate-600 uppercase tracking-[0.2em]">
          Secure Connection Established
        </div>
      </div>
    </footer>
  );
};

export default Footer;
