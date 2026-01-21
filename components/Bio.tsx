
import React, { useState, useEffect } from 'react';

const Bio: React.FC = () => {
  const imageUrl = "https://lh3.googleusercontent.com/d/1prLaOjmaBayjjFUrdTW6DGk98OtinJLW";
  
  const phrases = [
    "vencer o jogo.",
    "conquistar o sonho.",
    "proteger o futuro.",
    "gerar patrimônio.",
    "poupar com inteligência."
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === phrases.length) return;

    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section className="relative bg-vintage-paper py-24 md:py-40 overflow-hidden border-y border-vintage-red/5">
      {/* Sutil background accent behind text */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[20rem] font-serif text-vintage-red/[0.02] pointer-events-none select-none italic z-0">
        ♔
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content - Positioned on the Left */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div>
              <span className="text-vintage-red font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">O Mentor da sua Estratégia</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-vintage-ink leading-[1.2] mb-2 transition-all">
                Eu ajudo você a <br />
                <span className="italic text-vintage-red font-medium block mt-2 min-h-[1.2em]">
                  {phrases[index].substring(0, subIndex)}
                  <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-1 border-r-2 border-vintage-red inline-block h-[0.7em] align-middle`}></span>
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-vintage-gray font-light text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Não estou aqui para vender cotas, mas para ser o seu mestre no tabuleiro financeiro. Analisamos juntos o seu perfil e decidimos a melhor abertura para o seu patrimônio crescer.
              </p>
              <div className="relative pl-8 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-vintage-red/20 rounded-full"></div>
                <p className="font-serif italic text-vintage-ink text-base md:text-xl leading-snug">
                  "No mercado financeiro, quem não tem estratégia vira peça no jogo de outra pessoa. Meu trabalho é garantir que você seja o jogador."
                </p>
              </div>
            </div>

            <div className="flex gap-12 pt-8 border-t border-vintage-red/10">
               <div>
                  <div className="text-2xl md:text-3xl font-serif text-vintage-ink">R$ 500K+</div>
                  <div className="text-[9px] text-vintage-red uppercase tracking-widest mt-1 font-bold">Crédito Comercializado</div>
               </div>
               <div>
                  <div className="text-2xl md:text-3xl font-serif text-vintage-ink">02 Anos</div>
                  <div className="text-[9px] text-vintage-red uppercase tracking-widest mt-1 font-bold">Experiência Tática</div>
               </div>
            </div>
          </div>

          {/* Image - Positioned on the Right */}
          <div className="w-full lg:w-2/5 relative">
             <div className="relative aspect-[4/5] w-full max-w-sm mx-auto border border-vintage-red/10 p-2 bg-white shadow-2xl">
                <div className="w-full h-full overflow-hidden relative group">
                   <img 
                    src={imageUrl} 
                    alt="Consultor Estrategista" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 scale-105 group-hover:scale-100 group-hover:grayscale-0"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                    }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                {/* Visual Corner Accents */}
                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-vintage-red/20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-vintage-red/20"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;
