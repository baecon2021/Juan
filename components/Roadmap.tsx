
import React from 'react';

const Roadmap: React.FC = () => {
  const steps = [
    { t: "Diagnóstico", d: "Ajustamos a engenharia de crédito ao seu fluxo de vida real." },
    { t: "Aceleração", d: "Alocamos lances táticos para encurtar sua jornada à posse." },
    { t: "Execução", d: "Crédito disponível para transformar planos em ativos físicos." },
    { t: "Expansão", d: "Reinvestimos sua economia de juros em novos ciclos de riqueza." }
  ];

  return (
    <section className="py-24 md:py-40 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight">ARQUITETURA DA <span className="text-brand-500 text-glow-red">POSSE</span></h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl md:text-8xl font-black text-brand-900/20 absolute -top-8 md:-top-12 -left-2 md:-left-4 group-hover:text-brand-600/20 transition-colors pointer-events-none select-none">0{i+1}</div>
              <div className="relative z-10 pt-4 md:pt-8">
                <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 uppercase tracking-tighter">{s.t}</h4>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{s.d}</p>
              </div>
              <div className="mt-6 md:mt-8 h-px w-0 bg-brand-500 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
