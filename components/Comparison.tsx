
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
          
          <div className="bg-black p-10 sm:p-16 md:p-20">
            <h4 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-10">O Velho Mundo: Financiamento</h4>
            <div className="space-y-8">
               <div className="flex justify-between items-end border-b border-white/5 pb-6">
                  <span className="text-gray-400 text-xs sm:text-sm">Custo Efetivo</span>
                  <span className="text-white font-bold text-sm sm:text-base">12% a 15% ao ano</span>
               </div>
               <div className="flex justify-between items-end border-b border-white/5 pb-6">
                  <span className="text-gray-400 text-xs sm:text-sm">Multiplicador Final</span>
                  <span className="text-brand-500 font-bold text-sm sm:text-base">Até 2.5x o valor original</span>
               </div>
               <div className="flex justify-between items-end border-b border-white/5 pb-6">
                  <span className="text-gray-400 text-xs sm:text-sm">Soberania Financeira</span>
                  <span className="text-gray-500 uppercase text-[10px] font-bold">Refém do Banco</span>
               </div>
            </div>
          </div>

          <div className="bg-brand-950/20 p-10 sm:p-16 md:p-20 relative overflow-hidden">
            <div className="absolute top-6 right-6 pointer-events-none">
               <div className="w-3 h-3 rounded-full bg-brand-600 animate-pulse"></div>
            </div>
            <h4 className="text-brand-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-10">O Novo Mundo: Ademicon</h4>
            <div className="space-y-8">
               <div className="flex justify-between items-end border-b border-brand-900/40 pb-6">
                  <span className="text-gray-300 text-xs sm:text-sm">Taxa de Administração</span>
                  <span className="text-white font-bold text-sm sm:text-base">~ 1.1% ao ano (Fixo)</span>
               </div>
               <div className="flex justify-between items-end border-b border-brand-900/40 pb-6">
                  <span className="text-gray-300 text-xs sm:text-sm">Eficiência do Capital</span>
                  <span className="text-brand-500 font-bold text-sm sm:text-base">100% Patrimônio Próprio</span>
               </div>
               <div className="flex justify-between items-center border-b border-brand-900/40 pb-6">
                  <span className="text-gray-300 text-xs sm:text-sm">Status da Operação</span>
                  <span className="text-brand-500 uppercase text-[10px] font-bold bg-brand-600/20 px-3 py-1 rounded-full">Dono do Crédito</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
