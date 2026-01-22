
import React, { useState } from 'react';
import { Plus, Minus, ShieldCheck, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: "Qual o custo real do consórcio?", 
      a: "Diferente do banco, não existem juros. Você paga apenas uma taxa administrativa fixa, diluída nas parcelas, o que torna o custo final muito menor que qualquer financiamento." 
    },
    { 
      q: "Como recebo o meu crédito?", 
      a: "Você pode ser contemplado por sorteios mensais ou antecipar sua conquista oferecendo lances. Nós te ajudamos a escolher a melhor estratégia de lance para o seu objetivo." 
    },
    { 
      q: "Meu poder de compra é protegido?", 
      a: "Sim. O valor do crédito é atualizado anualmente para garantir que você compre exatamente o que planejou, independente da variação do mercado imobiliário ou automotivo." 
    },
    { 
      q: "Posso usar meu FGTS?", 
      a: "No consórcio de imóveis, você pode usar seu FGTS para dar lances, abater parcelas ou quitar o saldo devedor, acelerando a entrega do seu bem." 
    }
  ];

  const [open, setOpen] = useState<number | null>(null);
  const WHATSAPP_URL = "https://wa.me/554788451523";

  return (
    <section id="faq" className="py-24 md:py-40 bg-vintage-bg">
      <div className="container mx-auto px-8 md:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <span className="text-vintage-red font-bold uppercase tracking-[0.8em] text-[10px] block">Dúvidas</span>
              <h2 className="text-4xl md:text-6xl font-serif text-vintage-ink leading-tight">
                Tire suas <br/>
                <span className="italic font-light">Dúvidas.</span>
              </h2>
            </div>
            
            <p className="text-vintage-ink/50 text-xs md:text-sm font-sans font-light leading-relaxed uppercase tracking-[0.2em]">
              Transparência é a nossa base. Confira as perguntas mais comuns sobre como economizar com consórcio.
            </p>
            
            <div className="flex items-center gap-3 text-vintage-red/40 text-[10px] font-bold uppercase tracking-[0.4em] pt-4 border-t border-vintage-red/10">
               <ShieldCheck size={18} strokeWidth={1.5} /> Fiscalizado pelo Banco Central
            </div>
          </div>

          <div className="lg:w-2/3 border-t border-vintage-red/10">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`transition-all duration-500 border-b border-vintage-red/10 ${open === i ? 'bg-white/40' : ''}`}
              >
                <button 
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left group px-4 active:bg-vintage-ink/5"
                >
                  <span className={`text-base md:text-xl font-serif transition-all duration-500 tracking-tight ${open === i ? 'text-vintage-red font-bold' : 'text-vintage-ink lg:group-hover:text-vintage-red'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-500 ml-4 ${open === i ? 'rotate-180 scale-125' : 'opacity-30'}`}>
                    {open === i ? <Minus size={20} className="text-vintage-red"/> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${open === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pb-10 px-4 md:px-8">
                    <p className="text-vintage-gray text-sm md:text-base font-light leading-relaxed max-w-2xl border-l-2 border-vintage-red/20 pl-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box Otimizado */}
        <div className="mt-32 p-10 md:p-24 border border-vintage-red/10 text-center relative overflow-hidden bg-white shadow-2xl rounded-sm reveal">
           <div className="relative z-10 space-y-10">
             <h3 className="text-3xl md:text-5xl font-serif text-vintage-ink leading-tight">
               Sua conquista <br/>
               <span className="italic text-vintage-red font-light">Começa aqui.</span>
             </h3>
             
             <p className="text-vintage-ink/40 max-w-xl mx-auto text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] leading-loose">
               Fale com um consultor e receba agora <br className="hidden md:block"/> uma simulação gratuita e sem compromisso.
             </p>
             
             <a 
               href={WHATSAPP_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="group inline-flex items-center gap-3 md:gap-5 px-10 md:px-16 py-5 md:py-8 bg-vintage-red text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[13px] lg:hover:bg-vintage-ink transition-all duration-700 shadow-2xl shadow-vintage-red/20 rounded-sm active:scale-95 transform-gpu"
             >
               Análise Gratuita
               <ArrowRight size={22} className="lg:group-hover:translate-x-3 transition-transform duration-500" />
             </a>
           </div>

           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-vintage-red/5"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-vintage-red/5"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
