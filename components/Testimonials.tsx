
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { gsap } from 'gsap';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (bgTextRef.current) {
      gsap.to(bgTextRef.current, {
        x: activeIndex * -50,
        duration: 1.5,
        ease: "expo.out"
      });
    }
  }, [activeIndex]);

  return (
    <section id="testimonials" className="bg-vintage-ink py-32 md:py-48 relative overflow-hidden">
      {/* Background Decorative Text - Parallax Effect */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[20vw] font-serif font-black text-white/[0.02] select-none pointer-events-none italic uppercase"
      >
        Success Strategy Mastery Vision Legacy Achievement
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-vintage-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Social Proof</span>
            <h2 className="text-4xl md:text-7xl font-serif text-vintage-bg leading-[1.1] tracking-tight">
              Relatos de quem <br />
              <span className="italic text-vintage-red">domina o jogo.</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:bg-vintage-red hover:border-vintage-red transition-all duration-500 rounded-full group"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="group-active:scale-90" />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:bg-vintage-red hover:border-vintage-red transition-all duration-500 rounded-full group"
              aria-label="Próximo"
            >
              <ChevronRight size={20} className="group-active:scale-90" />
            </button>
          </div>
        </header>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.id} className="w-full flex-shrink-0 px-2 md:px-0">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Image/Avatar Column */}
                  <div className="lg:col-span-5 relative group">
                    <div className="aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden relative">
                       {/* Double Frame Effect */}
                       <div className="absolute inset-0 border border-vintage-red/30 translate-x-4 translate-y-4 z-0 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                       <img 
                        src={t.avatar} 
                        alt={t.name}
                        className="w-full h-full object-cover grayscale relative z-10 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                       />
                       <div className="absolute bottom-6 right-6 z-20 bg-vintage-red p-4 shadow-xl">
                          <Quote className="text-white" size={24} fill="currentColor" />
                       </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 space-y-10">
                    <div className="space-y-6">
                      <div className="h-px w-20 bg-vintage-red/50"></div>
                      <p className="text-2xl md:text-5xl font-serif text-vintage-bg font-light italic leading-tight tracking-tight">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                       <h4 className="text-vintage-bg font-bold uppercase tracking-[0.3em] text-sm md:text-lg">
                        {t.name}
                       </h4>
                       <span className="text-vintage-red font-black uppercase tracking-[0.5em] text-[10px]">
                        {t.role}
                       </span>
                    </div>

                    <div className="flex gap-2">
                      {TESTIMONIALS.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 transition-all duration-700 ${i === activeIndex ? 'w-12 bg-vintage-red' : 'w-4 bg-white/10'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Guard */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
