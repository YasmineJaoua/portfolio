/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TryHackMe from './components/TryHackMe';
import Footer from './components/Footer';
// lightweight scroll progress without external motion library

export default function App() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Provider store={store}>
      <div className="relative selection:bg-cyber-accent/30">
        {/* Progress Bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-cyber-accent origin-left z-50"
          style={{ transform: `scaleX(${progress})` }}
        />

        {/* Background Grid Effect */}
        <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-cyber-bg to-cyber-bg"></div>
        </div>

        <main className="max-w-[1000px] mx-auto">
          <Hero />
          <About />
          <Skills />
          <TryHackMe />
          <Footer />
        </main>

        {/* Navigation Dots (Simple) */}
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
          {['hero', 'about', 'skills', 'tryhackme'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="w-2 h-2 rounded-full bg-slate-700 hover:bg-cyber-accent transition-colors"
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          ))}
        </nav>
      </div>
    </Provider>
  );
}
