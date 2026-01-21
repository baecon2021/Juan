
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Mecanismo from './components/Mecanismo';
import Simulator from './components/Simulator';
import Features from './components/Features';
import Bio from './components/Bio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  // Global config para performance
  gsap.config({ force3D: true });
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      let ctx: gsap.Context;
      const timer = setTimeout(() => {
        ctx = gsap.context(() => {
          // Revelação elegante: Fade + Slide sutil
          const reveals = document.querySelectorAll('.reveal');
          reveals.forEach((el) => {
            gsap.fromTo(el, 
              { opacity: 0, y: 25 },
              {
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
                opacity: 1,
                y: 0,
                duration: 1.4,
                ease: "expo.out",
                clearProps: "transform" // Evita problemas de z-index após animar
              }
            );
          });

          // Stagger refinado para grids
          const staggerContainers = document.querySelectorAll('.stagger-item');
          staggerContainers.forEach((container) => {
            const items = container.children;
            if (items.length > 0) {
              gsap.fromTo(items, 
                { opacity: 0, y: 15 },
                {
                  scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                  },
                  opacity: 1,
                  y: 0,
                  stagger: 0.1,
                  duration: 1.2,
                  ease: "power2.out"
                }
              );
            }
          });

          ScrollTrigger.refresh();
        });
      }, 100);

      return () => {
        clearTimeout(timer);
        if (ctx) ctx.revert();
      };
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-vintage-bg text-vintage-ink font-sans selection:bg-brand-500 selection:text-white paper-texture overflow-x-hidden ${loading ? 'max-h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          
          <Pain />
          <Mecanismo />
          
          <div className="bg-vintage-bg py-16 flex justify-center reveal">
             <span className="text-[9px] uppercase tracking-[0.8em] text-vintage-red/30 font-bold">Arquitetura de Ativos</span>
          </div>

          <Simulator />
          <Features />
          <Bio />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
