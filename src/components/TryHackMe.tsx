import React, { useState } from 'react';
// simple static presentation; no external motion
import { Rocket, AlertCircle } from 'lucide-react';

const TryHackMe: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <section id="tryhackme" className="py-20 px-4 max-w-2xl mx-auto text-center">
      <div className="glass-card p-10 border-cyber-accent/20 relative overflow-hidden transition-opacity duration-700">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyber-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyber-blue/5 rounded-full blur-3xl"></div>

        <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
          <Rocket className="text-cyber-accent" />
          My TryHackMe Progress
        </h2>

        <div className="flex flex-col items-center justify-center min-h-[120px]">
          {!error ? (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-accent to-cyber-blue rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <iframe
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=6451313"
                style={{ border: 'none', width: '350px', height: '100px' }}
                className="relative bg-cyber-bg/50 rounded-lg p-2 max-w-full"
                onError={() => setError(true)}
                title="TryHackMe Badge"
              ></iframe>
            </div>
          ) : (
            <div className="flex flex-col items-center text-slate-500 gap-2">
              <AlertCircle size={40} />
              <p>TryHackMe badge could not be loaded.</p>
            </div>
          )}
        </div>
        
        <p className="mt-8 text-sm text-slate-500 italic">
          Actively climbing the ranks and mastering the art of ethical hacking.
        </p>
      </div>
    </section>
  );
};

export default TryHackMe;
