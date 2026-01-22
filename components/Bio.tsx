
import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Instagram } from 'lucide-react';

const Bio: React.FC = () => {
  const imageUrl = "https://lh3.googleusercontent.com/d/1prLaOjmaBayjjFUrdTW6DGk98OtinJLW";
  const WHATSAPP_URL = "https://wa.me/554788451523";
  const INSTAGRAM_URL = "https://www.instagram.com/juanpablo_investimentos/?utm_source=ig_web_button_share_sheet";
  
  const phrases = [
    "conquistar seu imóvel.",
    "trocar de carro.",
    "planejar seu futuro.",
    "aumentar seu patrimônio.",
    "fugir dos juros."
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => setBlink(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Main Typewriter Logic
  useEffect(() => {
    if (isPaused) return;

    const currentPhrase = phrases[index];
    const speed = isDeleting ? 40 : 80 + Math.random() * 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (subIndex < currentPhrase.length) {
          setSubIndex(prev => prev + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex(prev => (prev + 1) % phrases.length);
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 400);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, isPaused]);

  return (
    <section id="bio" className="relative bg-vintage-paper py-24 md:py-40 overflow-hidden border-y border-vintage-red/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-3/5 space-y-10">
            <div>
              <span className="text-vintage-red font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Consultoria Personalizada</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-vintage-ink leading-[1.2] mb-2 transition-all">
                Eu ajudo você a <br />
                <span className="italic text-vintage-red font-medium block mt-2 min-h-[1.2em] relative">
                  {phrases[index].substring(0, subIndex)}
                  <span 
                    className={`inline-block w-[2px] h-[0.8em] bg-vintage-red ml-1 align-middle transition-opacity duration-75 ${blink ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden="true"
                  ></span>
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-vintage-gray font-light text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Meu objetivo é encontrar o plano ideal para a sua realidade financeira. Sem letras miúdas, focando em transparência e economia para que você conquiste seus bens com segurança.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 pt-8 border-t border-vintage-red/10">
               <div>
                  <div className="text-2xl md:text-3xl font-serif text-vintage-ink">Atendimento</div>
                  <div className="text-[9px] text-vintage-red uppercase tracking-widest mt-1 font-bold">Humano e Ágil</div>
               </div>
               <div>
                  <div className="text-2xl md:text-3xl font-serif text-vintage-ink">Estratégia</div>
                  <div className="text-[9px] text-vintage-red uppercase tracking-widest mt-1 font-bold">Focada em Você</div>
               </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 reveal transform-gpu">
               <a 
                 href={WHATSAPP_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group inline-flex items-center justify-center gap-5 px-10 py-5 bg-vintage-red text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] rounded-sm lg:hover:bg-vintage-ink transition-all duration-700 shadow-xl shadow-vintage-red/10"
               >
                 <MessageCircle size={18} strokeWidth={2} />
                 WhatsApp
                 <ArrowRight size={18} className="lg:group-hover:translate-x-2 transition-transform duration-500" />
               </a>
               <a 
                 href={INSTAGRAM_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group inline-flex items-center justify-center gap-5 px-10 py-5 bg-white border border-vintage-red/20 text-vintage-ink text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] rounded-sm lg:hover:border-vintage-red transition-all duration-700 shadow-xl"
               >
                 <Instagram size={18} strokeWidth={2} className="text-vintage-red" />
                 Siga no Instagram
               </a>
            </div>
          </div>

          <div className="w-full lg:w-2/5 relative">
             <div className="relative aspect-[4/5] w-full max-w-sm mx-auto border border-vintage-red/10 p-2 bg-white shadow-2xl reveal transform-gpu">
                <div className="w-full h-full overflow-hidden relative group">
                   <img 
                    src={imageUrl} 
                    alt="Consultor Juan Pablo" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 scale-100 lg:scale-105 lg:group-hover:scale-100 lg:group-hover:grayscale-0"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                    }}
                   />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;
