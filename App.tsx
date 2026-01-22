
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
}

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const targetPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: window.innerWidth <= 768 ? 'auto' : 'smooth'
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [hash]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading && window.innerWidth > 768) {
      const ctx = gsap.context(() => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((el) => {
          gsap.fromTo(el, 
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power4.out",
              // CORREÇÃO: Não limpamos a opacidade, apenas y e transform para manter o elemento visível
              clearProps: "y,transform" 
            }
          );
        });

        const staggerContainers = document.querySelectorAll('.stagger-item');
        staggerContainers.forEach((container) => {
          if (container.children.length > 0) {
            gsap.fromTo(container.children, 
              { opacity: 0, y: 30 },
              {
                scrollTrigger: {
                  trigger: container,
                  start: "top 90%",
                },
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: "power3.out",
                clearProps: "y,transform"
              }
            );
          }
        });

        // Garante que o GSAP recalcule todas as posições após a montagem
        setTimeout(() => ScrollTrigger.refresh(), 500);
      });

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, [loading]);

  return (
    <>
      <ScrollToHashElement />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-vintage-bg text-vintage-ink font-sans paper-texture overflow-x-hidden ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Pain />
          <Mecanismo />
          <div className="bg-vintage-bg py-4 flex justify-center opacity-5">
             <div className="w-px h-16 bg-vintage-red"></div>
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
