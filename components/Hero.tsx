
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full bg-vintage-bg overflow-hidden flex flex-col items-center justify-center px-8 md:px-12 py-32" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'repeating-conic-gradient(#722F37 0% 25%, transparent 0% 50%)', backgroundSize: '120px 120px' }}>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <div className="mb-10 md:mb-14 will-change-transform animate-hero-enter">
          <span className="text-vintage-red font-bold uppercase tracking-[0.6em] text-[9px] md:text-[11px] mb-6 block opacity-0 animate-fade-in [animation-delay:0.3s] [animation-fill-mode:forwards]">Seu Próximo Movimento</span>
          <h1 id="hero-title" className="text-5xl md:text-8xl lg:text-[9.5rem] font-serif text-vintage-ink tracking-[-0.05em] font-black relative leading-none">
            ADEMICON<span className="text-vintage-red animate-pulse-gentle">.</span>
          </h1>
        </div>

        <div className="max-w-2xl mt-4 opacity-0 animate-fade-in [animation-delay:1.2s] [animation-fill-mode:forwards]">
          <p className="text-sm md:text-lg font-sans text-vintage-gray/80 tracking-wide font-light leading-relaxed">
            A estratégia de quem sabe que no jogo do patrimônio, <br className="hidden md:block" />
            <span className="text-vintage-red font-semibold italic">o planejamento é a sua peça mais forte.</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes heroEnter {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGentle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.95); }
        }
        .animate-hero-enter { 
          animation: heroEnter 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .animate-fade-in { 
          animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .animate-pulse-gentle { 
          animation: pulseGentle 5s ease-in-out infinite; 
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default Hero;
