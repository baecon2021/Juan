
import React, { useState, useMemo, useCallback, memo } from 'react';

type Category = 'imovel' | 'carro';

interface DataPoint {
  credit: number;
  installment: number;
}

/** 
 * TABELA IMÓVEIS - ATUALIZADA PARA 50% DE REDUÇÃO
 * Base: R$ 80.000,00 -> R$ 270,00 (conforme feedback do cliente)
 * Coeficiente aplicado: 0,003375
 */
const IMOB_DATA: DataPoint[] = [
  { credit: 80000, installment: 270.00 },
  { credit: 100000, installment: 337.50 },
  { credit: 150000, installment: 506.25 },
  { credit: 200000, installment: 675.00 },
  { credit: 350000, installment: 1181.25 },
  { credit: 500000, installment: 1687.50 },
  { credit: 1000000, installment: 3375.00 },
];

/**
 * TABELA VEÍCULOS - BASEADA NA TABELA TADEU (ANEXO 5)
 */
const CARRO_DATA: DataPoint[] = [
  { credit: 42000, installment: 313.95 },
  { credit: 68000, installment: 508.30 },
  { credit: 200000, installment: 1160.00 },
  { credit: 290000, installment: 1682.00 },
  { credit: 350000, installment: 2030.00 },
  { credit: 400000, installment: 2320.00 },
];

const Simulator: React.FC = () => {
  const [category, setCategory] = useState<Category>('imovel');
  const [credit, setCredit] = useState(category === 'imovel' ? 500000 : 68000);

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

    const range = upper.credit - lower.credit;
    const ratio = range === 0 ? 0 : (credit - lower.credit) / range;
    return lower.installment + ratio * (upper.installment - lower.installment);
  }, [credit, currentData]);

  const formatter = useMemo(() => new Intl.NumberFormat('pt-BR', { 
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
  }), []);

  const handleCategoryChange = useCallback((cat: Category) => {
    setCategory(cat);
    setCredit(cat === 'imovel' ? 500000 : 68000);
  }, []);

  const WHATSAPP_URL = useMemo(() => 
    `https://wa.me/554788451523?text=Olá, gostaria de uma simulação para ${category === 'imovel' ? 'imóvel' : 'veículo'} de ${formatter.format(credit)} com parcela reduzida de 50%.`,
  [category, credit, formatter]);

  return (
    <section id="simulator" className="py-16 md:py-24 bg-vintage-bg relative overflow-hidden flex flex-col items-center border-b border-vintage-red/5 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-16 max-w-7xl relative z-10">
        
        <header className="mb-10 text-center space-y-2 reveal">
          <span className="text-vintage-red font-bold uppercase tracking-[0.6em] text-[10px] block">Simulador de Alavancagem</span>
          <h2 className="text-4xl md:text-6xl font-serif text-vintage-ink tracking-tight">
            Trace o seu <span className="italic font-light">Destino.</span>
          </h2>
        </header>

        <nav className="flex justify-center mb-10 reveal">
          <div className="flex gap-12 border-b border-vintage-ink/5 px-6" role="tablist">
            {(['imovel', 'carro'] as Category[]).map((cat) => (
              <button 
                key={cat}
                role="tab"
                aria-selected={category === cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-500 relative py-4 ${category === cat ? 'text-vintage-red' : 'text-vintage-ink/30 lg:hover:text-vintage-ink'}`}
              >
                {cat === 'imovel' ? 'Imóveis' : 'Veículos'}
                {category === cat && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-vintage-red"></div>}
              </button>
            ))}
          </div>
        </nav>

        <div className="grid lg:grid-cols-12 bg-white border border-vintage-red/5 rounded-sm overflow-hidden shadow-2xl reveal max-w-5xl mx-auto">
          
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <label htmlFor="credit-range" className="text-[10px] font-bold uppercase tracking-[0.4em] text-vintage-ink/40">Crédito Desejado</label>
              <div className="flex items-baseline gap-3">
                <output className="text-4xl md:text-7xl font-sans font-black text-vintage-ink tracking-tighter leading-none">
                  {formatter.format(credit)}
                </output>
              </div>
            </div>

            <div className="space-y-4">
              <input 
                id="credit-range"
                type="range" 
                min={currentData[0].credit} 
                max={currentData[currentData.length - 1].credit} 
                step="5000" 
                value={credit}
                onChange={e => setCredit(Number(e.target.value))}
                className="w-full h-2 bg-vintage-paper rounded-full appearance-none cursor-pointer accent-vintage-red"
                aria-label="Ajustar valor do crédito"
              />
              <div className="flex justify-between text-[9px] text-vintage-ink/30 font-bold uppercase tracking-[0.3em]">
                <span>Mín. {formatter.format(currentData[0].credit)}</span>
                <span>Máx. {formatter.format(currentData[currentData.length - 1].credit)}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-vintage-red p-8 md:p-14 text-white flex flex-col justify-center relative">
            <div className="absolute -top-10 -right-10 text-[18rem] font-serif text-white/[0.03] pointer-events-none italic select-none">♔</div>
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                 <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">Parcela Mensal</span>
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Reduzida (50%)</span>
                 </div>
                 <div className="text-5xl md:text-6xl font-sans font-bold tracking-tighter text-white leading-none">
                    {formatter.format(calculatedInstallment)}
                 </div>
                 <p className="text-[9px] text-white/60 font-bold uppercase tracking-[0.2em] pt-3 italic">
                    *Válido até a contemplação. Valor sujeito a alteração.
                 </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                 <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold">
                  <span className="text-white/40">Taxa de Juros</span>
                  <span className="text-white">0% (Isento)</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold">
                  <span className="text-white/40">Modalidade</span>
                  <span className="text-white">Meia Parcela</span>
                 </div>
              </div>

              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-4 w-full py-5 bg-white text-vintage-red font-bold uppercase tracking-[0.4em] text-[11px] transition-all lg:hover:bg-vintage-paper active:scale-[0.98] shadow-2xl"
              >
                Solicitar Proposta
                <span className="lg:group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center space-y-2 reveal">
          <p className="text-[9px] text-vintage-ink/30 font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
            *As parcelas exibidas referem-se à opção de 50% de redução no valor da prestação até a contemplação do crédito, conforme as tabelas vigentes da Ademicon.
          </p>
          <p className="text-[9px] text-vintage-red/40 font-bold uppercase tracking-[0.3em]">
            Valores sujeitos a alterações sem aviso prévio. Consulte condições no contrato.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Simulator);
