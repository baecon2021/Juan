
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-vintage-paper py-24 md:py-40 relative overflow-hidden">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
        <Quote size={400} />
      </div>

      <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
        <header className="mb-20 text-center reveal">
          <span className="text-vintage-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Prova Social</span>
          <h2 className="text-4xl md:text-6xl font-serif text-vintage-ink leading-tight">
            Relatos de quem <br />
            <span className="italic font-light">domina o jogo.</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-8 stagger-item">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-white p-8 md:p-10 border-t-4 border-vintage-red shadow-xl shadow-vintage-ink/5 flex flex-col justify-between group lg:hover:-translate-y-2 transition-all duration-500"
            >
              <div className="space-y-6">
                <Quote className="text-vintage-red/20 lg:group-hover:text-vintage-red/40 transition-colors duration-500" size={32} />
                <p className="text-lg md:text-xl font-serif italic text-vintage-ink leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-vintage-red/10 grayscale lg:group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-vintage-ink">
                    {t.name}
                  </h4>
                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-vintage-red">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 text-center reveal">
          <p className="text-[10px] text-vintage-ink/30 font-bold uppercase tracking-[0.4em]">
            Resultados reais de clientes ativos · Consultoria Estratégica
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Testimonials;
