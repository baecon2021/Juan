
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="fundamentos" className="bg-vintage-bg py-24 md:py-32 border-y border-vintage-red/5 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-20 reveal">
          <span className="text-vintage-red font-bold uppercase tracking-[0.6em] text-[10px] mb-6 block">Vantagens Táticas</span>
          <h2 className="text-4xl md:text-5xl font-serif text-vintage-ink mb-6">
            Fundamentos da <span className="italic">Exclusividade.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white border border-vintage-red/20 rounded-sm overflow-hidden shadow-2xl stagger-item">
          {FEATURES.map((feature, idx) => {
            return (
              <div 
                key={idx} 
                className={`p-10 md:p-14 transition-all duration-500 ease-in-out hover:bg-white group transform-gpu cursor-default ${
                  idx % 2 === 0 ? 'bg-vintage-red' : 'bg-vintage-red/95'
                }`}
              >
                {/* Chess Piece Icon */}
                <div className="text-white/40 text-4xl mb-8 transition-all duration-500 group-hover:text-vintage-red group-hover:scale-110 group-hover:-translate-y-1 font-serif select-none">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-5 tracking-tight group-hover:text-vintage-ink transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-white/80 text-[13px] md:text-sm leading-loose font-light group-hover:text-vintage-ink/80 transition-colors duration-500">
                  {feature.description}
                </p>
                
                {/* Horizontal simple line */}
                <div className="mt-10 h-px w-8 bg-white/20 group-hover:bg-vintage-red/30 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
