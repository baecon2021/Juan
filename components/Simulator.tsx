
import React, { useState, useMemo, useCallback } from 'react';

type Category = 'imovel' | 'carro';

interface DataPoint {
  credit: number;
  installment: number;
}

const IMOB_DATA: DataPoint[] = [
  { credit: 80000, installment: 341.82 },
  { credit: 100000, installment: 427.27 },
  { credit: 150000, installment: 854.55 },
  { credit: 200000, installment: 854.55 },
  { credit: 350000, installment: 1495.45 },
  { credit: 500000, installment: 1958.33 },
  { credit: 1000000, installment: 3196.67 },
];

const CARRO_DATA: DataPoint[] = [
  { credit: 42000, installment: 313.95 },
  { credit: 68000, installment: 508.30 },
  { credit: 200000, installment: 1682.00 },
  { credit: 350000, installment: 2320.00 },
  { credit: 400000, installment: 2320.00 },
];

const Simulator: React.FC = () => {
  const [category, setCategory] = useState<Category>('imovel');
  const [credit, setCredit] = useState(500000);

  const currentData = useMemo(() => (category === 'imovel' ? IMOB_DATA : CARRO_DATA), [category]);

  const calculatedInstallment = useMemo(() => {
    const data = currentData;
    const exact = data.find(p => p.credit === credit);
    if (exact) return exact.installment;

    let lower = data[0];
    let upper = data[data.length - 1];

    for (let i = 0; i < data.length - 1; i++) {
      if (credit >= data[i].credit && credit <= data[i + 1].credit) {
        lower = data[i];
        upper = data[i + 1];
        break;
      }
    }

    if (lower === upper) return lower.installment;
    const ratio = (credit - lower.credit) / (upper.credit - lower.credit);
    return lower.installment + ratio * (upper.installment - lower.installment);
  }, [credit, currentData]);

  const formatter = useMemo(() => new Intl.NumberFormat('pt-BR', { 
    minimumFractionDigits: 0,
    maximumFractionDigits: 2 
  }), []);

  const handleCategoryChange = useCallback((cat: Category) => {
    setCategory(cat);
    setCredit(cat === 'imovel' ? 500000 : 68000);
  }, []);

  const WHATSAPP_URL = useMemo(() => 
    `https://wa.me/554788451523?text=Olá, gostaria de um diagnóstico sobre crédito para ${category === 'imovel' ? 'imóvel' : 'veículo'} no valor de R$ ${formatter.format(credit)}.`,
  [category, credit, formatter]);

  return (
    <section id="simulator" className="py-24 md:py-40 bg-vintage-paper relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-vintage-red/10"></div>
      
      <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
        <header className="mb-20 text-center space-y-6 reveal">
          <span className="text-vintage-red font-bold uppercase tracking-[0.6em] text-[10px] block">Diagnóstico Patrimonial</span>
          <h2 className="text-4xl md:text-7xl font-serif text-vintage-ink tracking-tight leading-none">
            Trace o seu <span className="italic font-light">Destino.</span>
          </h2>
          <p className="text-vintage-gray/60 text-xs md:text-sm font-light uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
            Ajuste as coordenadas do seu investimento e visualize a arquitetura financeira da sua próxima conquista.
          </p>
        </header>

        <nav className="flex justify-center mb-16 reveal">
          <div className="flex gap-12 border-b border-vintage-ink/5 pb-4 px-8">
            <button 
              onClick={() => handleCategoryChange('imovel')}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 relative ${category === 'imovel' ? 'text-vintage-red' : 'text-vintage-ink/30 hover:text-vintage-ink'}`}
            >
              Imóveis
              {category === 'imovel' && <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-vintage-red animate-fade-in"></div>}
            </button>
            <button 
              onClick={() => handleCategoryChange('carro')}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 relative ${category === 'carro' ? 'text-vintage-red' : 'text-vintage-ink/30 hover:text-vintage-ink'}`}
            >
              Veículos
              {category === 'carro' && <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-vintage-red animate-fade-in"></div>}
            </button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-12 gap-px bg-vintage-red/5 border border-vintage-red/10 rounded-sm overflow-hidden shadow-2xl reveal">
          
          {/* Input Section */}
          <div className="lg:col-span-7 bg-white p-10 md:p-20 flex flex-col justify-center space-y-16">
            <div className="space-y-6">
              <label htmlFor="credit-range" className="text-[10px] font-bold uppercase tracking-[0.4em] text-vintage-ink/40">Volume de Crédito Desejado</label>
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-serif text-vintage-red italic" aria-hidden="true">R$</span>
                <output className="text-5xl md:text-8xl font-serif font-black text-vintage-ink tracking-tighter leading-none">
                  {formatter.format(credit)}
                </output>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative group">
                <input 
                  id="credit-range"
                  type="range" 
                  min={currentData[0].credit} 
                  max={currentData[currentData.length - 1].credit} 
                  step="1000" 
                  value={credit}
                  onChange={e => setCredit(Number(e.target.value))}
                  className="w-full h-1 bg-vintage-paper rounded-full appearance-none cursor-pointer accent-vintage-red"
                />
              </div>
              <div className="flex justify-between text-[9px] text-vintage-ink/30 font-bold uppercase tracking-[0.3em]">
                <span>Início: R$ {formatter.format(currentData[0].credit)}</span>
                <span>Limite: R$ {formatter.format(currentData[currentData.length - 1].credit)}</span>
              </div>
            </div>
          </div>

          {/* Result Section - Red Background Upgrade */}
          <div className="lg:col-span-5 bg-vintage-red p-10 md:p-20 text-white flex flex-col justify-between relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 text-[15rem] font-serif text-white/[0.05] pointer-events-none select-none italic transition-colors duration-1000">♔</div>

            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                 <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-vintage-paper/60">Parcela Mensal Estimada</span>
                 <div className="flex items-start gap-4">
                    <span className="text-2xl font-serif text-white/40 mt-1" aria-hidden="true">R$</span>
                    <div className="text-6xl md:text-7xl font-serif font-bold tracking-tighter text-white">
                      {formatter.format(calculatedInstallment)}
                    </div>
                 </div>
              </div>

              <div className="space-y-6 pt-10 border-t border-white/10">
                 <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold">
                    <span className="text-white/40">Taxa de Juros</span>
                    <span className="text-white">Isento</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold">
                    <span className="text-white/40">Custos Bancários</span>
                    <span className="text-white">Zero</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold">
                    <span className="text-white/40">Modelo Administrativo</span>
                    <span className="text-white">Taxa Reduzida</span>
                 </div>
              </div>
            </div>

            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 w-full py-5 bg-white text-vintage-red text-center font-bold uppercase tracking-[0.4em] text-[10px] transition-all duration-500 hover:bg-vintage-paper active:scale-[0.98] z-10 rounded-sm shadow-xl"
            >
              Falar com um consultor
            </a>
          </div>
        </div>

        <footer className="mt-16 text-center reveal">
          <p className="text-[9px] text-vintage-ink/20 font-bold uppercase tracking-[0.4em]">
            Análise técnica baseada em tabelas vigentes · Registro Bacen 03/00/017-4
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Simulator;
