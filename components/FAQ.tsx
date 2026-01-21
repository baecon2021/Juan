
import React, { useState } from 'react';
import { Plus, Minus, ShieldCheck, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "O custo real da alavancagem.", a: "Diferente dos bancos, não operamos com juros compostos. Sua única taxa é administrativa, fixa e diluída, preservando sua liquidez para outros investimentos." },
    { q: "A inteligência da contemplação.", a: "Trabalhamos com grupos saudáveis e lances táticos fundamentados. A posse não é um evento de sorte, é um passo planejado da sua engenharia financeira." },
    { q: "Proteção do poder de compra.", a: "Todas as cartas são blindadas por correções anuais (INCC/IPCA), garantindo que sua capacidade de aquisição seja preservada independente do cenário macroeconômico." },
    { q: "Migração de dívida bancária.", a: "Utilizamos o consórcio como ferramenta de *debt-swap*, substituindo financiamentos caros por crédito estratégico, reduzindo seu passivo imediatamente." },
    { q: "Posso utilizar meu FGTS?", a: "Sim, para consórcios imobiliários você pode utilizar o saldo do FGTS para dar lances, amortizar parcelas ou quitar o saldo devedor após a contemplação." },
    { q: "Como funcionam os sorteios mensais?", a: "Os sorteios ocorrem mensalmente via Loteria Federal. Todos os participantes com as parcelas em dia concorrem em igualdade de condições para a contemplação." },
    { q: "Qual a garantia da entrega do bem?", a: "A Ademicon é autorizada e fiscalizada pelo Banco Central. Além disso, os grupos possuem seguro e fundo de reserva para garantir a saúde financeira e as entregas." },
    { q: "Posso antecipar a quitação?", a: "Sim. Você pode antecipar o pagamento de parcelas a qualquer momento, reduzindo o tempo de contrato ou o valor das parcelas vincendas, sem cobrança de multas." }
  ];

  const [open, setOpen] = useState<number | null>(null);
  const WHATSAPP_URL = "https://wa.me/554788451523";

  return (
    <section id="faq" className="py-24 md:py-32 bg-vintage-bg">
      <div className="container mx-auto px-10 md:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <span className="text-vintage-red font-bold uppercase tracking-[0.8em] text-[10px] mb-6 block">Consultoria</span>
            <h2 className="text-4xl md:text-6xl font-serif text-vintage-ink leading-tight mb-8">Dúvidas <br/><span className="italic font-light">Frequentes.</span></h2>
            <p className="text-vintage-gray text-[10px] md:text-xs font-sans font-light leading-loose mb-10 uppercase tracking-[0.3em] opacity-50">
              A clareza é a base de qualquer boa estratégia. Abaixo, respondemos os pontos fundamentais para o seu planejamento.
            </p>
            <div className="flex items-center gap-4 text-vintage-red text-[9px] font-bold uppercase tracking-[0.5em] opacity-40">
               <ShieldCheck size={16} strokeWidth={1} /> Auditoria Bacen
            </div>
          </div>

          <div className="lg:w-2/3 space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className={`transition-all duration-700 border-b ${open === i ? 'border-vintage-red' : 'border-vintage-red/10'}`}>
                <button 
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
                >
                  <span className={`text-base md:text-xl font-serif transition-all duration-500 tracking-tight ${open === i ? 'text-vintage-red font-bold translate-x-2' : 'text-vintage-ink group-hover:text-vintage-red group-hover:translate-x-1'}`}>{faq.q}</span>
                  <div className={`transition-transform duration-500 ${open === i ? 'rotate-180' : ''}`}>
                    {open === i ? <Minus size={16} className="text-vintage-red"/> : <Plus size={16} className="text-vintage-gray/30"/>}
                  </div>
                </button>
                {open === i && (
                  <div className="pb-8 px-2 text-vintage-gray font-sans font-light leading-relaxed animate-fade-in-up text-xs md:text-base max-w-2xl opacity-80">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 p-12 md:p-20 border border-vintage-red/10 text-center relative overflow-hidden bg-white shadow-xl rounded-sm">
           <div className="relative z-10">
             <h3 className="text-3xl md:text-5xl font-serif text-vintage-ink mb-8 leading-tight">Pronto para o seu <br/><span className="italic text-vintage-red underline underline-offset-4 decoration-1">Próximo Movimento?</span></h3>
             <p className="text-vintage-gray mb-12 max-w-xl mx-auto text-[10px] md:text-xs font-light uppercase tracking-[0.3em] leading-loose opacity-60">
               Sua transição para o capital inteligente <br className="hidden md:block"/> começa com uma análise personalizada.
             </p>
             <a 
               href={WHATSAPP_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="group inline-flex items-center gap-4 mx-auto px-10 py-6 bg-vintage-red text-white font-bold uppercase tracking-[0.6em] text-[10px] md:text-[11px] hover:bg-vintage-ink transition-all duration-700 shadow-xl shadow-vintage-red/20"
             >
               Solicitar Análise Prime
               <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
             </a>
           </div>
           {/* Decorative Accents */}
           <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-vintage-red/5"></div>
           <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-vintage-red/5"></div>
           <div className="absolute top-1/2 left-6 -translate-y-1/2 text-[6rem] font-serif text-vintage-red/[0.02] pointer-events-none select-none italic">♔</div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
