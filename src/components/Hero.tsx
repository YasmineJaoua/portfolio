import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleEmail } from '../redux/profileSlice';
// using simple transitions instead of motion/react
import { Mail, Copy, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const dispatch = useDispatch();
  const { name, tagline, showEmail } = useSelector((state: RootState) => state.profile);
  const [copied, setCopied] = React.useState(false);
  const email = "yasmine.jaoua@enetcom.u-sfax.tn";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="relative mb-8 transition-opacity duration-700">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyber-accent shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-float">
          <img 
            src="https://i.herbalreality.com/wp-content/uploads/2025/09/29155556/Jasmine-flowers-Jasminum-grandiflorum-1300x975.jpg" 
            alt="Jasmine" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-cyber-accent w-6 h-6 rounded-full border-4 border-cyber-bg"></div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent transition-transform duration-700">
        {name}
      </h1>

      <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl transition-opacity duration-700">
        {tagline}
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-4 transition-opacity duration-700">
          <a href="#skills" className="cyber-button cyber-button-primary">
            View Projects
          </a>
          <button 
            onClick={() => dispatch(toggleEmail())}
            className={`cyber-button ${showEmail ? 'bg-cyber-accent/10' : ''}`}
          >
            {showEmail ? 'Hide Contact' : 'Contact Me'}
          </button>
        </div>

        {showEmail && (
          <div className="overflow-hidden">
            <div className="glass-card p-4 flex items-center gap-4 border-cyber-accent/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-cyber-accent hover:text-cyber-accent/80 transition-colors font-mono text-sm md:text-base"
              >
                <Mail size={18} />
                {email}
              </a>
              <button 
                onClick={handleCopy}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white"
                title="Copy to clipboard"
              >
                {copied ? <Check size={18} className="text-cyber-accent" /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
