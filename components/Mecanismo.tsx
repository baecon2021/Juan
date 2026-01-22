
import React from 'react';

const Mecanismo: React.FC = () => {
  const passos = [
    {
      num: "♙",
      titulo: "Abertura",
      desc: "O poder do grupo a seu favor. O capital coletivo substitui os juros abusivos, transformando o que seria lucro do banco em economia real para o seu bolso."
    },
    {
      num: "♘",
      titulo: "O Movimento",
      desc: "Flexibilidade tática total. Você concorre a sorteios mensais ou realiza lances estratégicos para antecipar sua carta de crédito e agir no tempo que você planejou."
    },
    {
      num: "♔",
      titulo: "Xeque-Mate",
      desc: "Poder de compra imbatível. Com o crédito em mãos, você negocia como um comprador à vista, garantindo as melhores oportunidades e os maiores descontos do mercado."
    }
  ];

  return (
    <section id="alavancagem" className="py-16 md:py-28 bg-vintage-bg reveal relative transform-gpu scroll-mt-24">
      <div className="container mx-auto px-8 md:px-16 max-w-[90rem] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-vintage-red font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] block">Simples como o jogo</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-vintage-ink leading-[1.1] tracking-tight">
                A Estratégia da <br />
                <span className="italic font-light text-vintage-red">Conquista.</span>
              </h2>
            </div>
            
            <p className="text-vintage-ink/70 text-sm md:text-lg leading-relaxed max-w-lg font-light">
              No xadrez financeiro, o consórcio é a sua melhor peça. Você planeja cada passo e foge das armadilhas dos juros bancários com maestria técnica e segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0.5 bg-white border border-vintage-red/20 rounded-sm overflow-hidden shadow-2xl max-w-xl lg:ml-auto w-full">
            {passos.map((passo, idx) => (
              <div 
                key={idx} 
                className={`p-7 md:p-9 transition-colors duration-500 ease-in-out lg:hover:bg-white group transform-gpu cursor-default active:bg-vintage-ink/5 ${
                  idx % 2 === 0 ? 'bg-vintage-red' : 'bg-vintage-red/95'
                }`}
              >
                <div className="flex gap-6 md:gap-8 items-start">
                  <div className="text-4xl md:text-5xl text-white/40 font-serif lg:group-hover:text-vintage-red lg:group-hover:scale-110 transition-all duration-500 leading-none select-none">
                    {passo.num}
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="font-bold text-white text-xs md:text-base uppercase tracking-[0.3em] lg:group-hover:text-vintage-ink transition-colors duration-500">
                      {passo.titulo}
                    </h4>
                    <p className="text-white/90 text-[12px] md:text-sm leading-relaxed font-normal lg:group-hover:text-vintage-ink/80 transition-colors duration-500">
                      {passo.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mecanismo;
