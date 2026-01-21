
import React from 'react';
import { Shield, Target, Trophy } from 'lucide-react';

const Legacy: React.FC = () => {
  return (
    <section className="py-48 bg-black relative overflow-hidden">
      <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-600/10 blur-[180px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto mb-32">
          <span className="text-brand-500 font-bold uppercase tracking-[0.8em] text-[10px] mb-8 block">A Imortalidade do Ativo</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-12">
            FORGE SEU <br/>
            <span className="text-brand-500 text-glow-red">IMPÉRIO</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            Consórcio não é gasto. É o método mais inteligente de erguer uma <span className="text-white font-bold border-b border-brand-600">fortaleza financeira</span> que resiste a crises e protege quem você ama.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-6 flex flex-col items-center group">
            <div className="p-8 bg-brand-950/20 border border-brand-500/20 rounded-full group-hover:bg-brand-600 transition-all duration-700">
              <Shield size={48} strokeWidth={1} className="text-brand-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Sobrevivência</h4>
            <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">Patrimônio físico imune à inflação e à volatilidade do mercado financeiro.</p>
          </div>

          <div className="space-y-6 flex flex-col items-center group">
            <div className="p-8 bg-brand-950/20 border border-brand-500/20 rounded-full group-hover:bg-brand-600 transition-all duration-700">
              <Target size={48} strokeWidth={1} className="text-brand-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Foco</h4>
            <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">Direcionamento de recursos para o que realmente importa: ativos geradores de renda.</p>
          </div>

          <div className="space-y-6 flex flex-col items-center group">
            <div className="p-8 bg-brand-950/20 border border-brand-500/20 rounded-full group-hover:bg-brand-600 transition-all duration-700">
              <Trophy size={48} strokeWidth={1} className="text-brand-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Herança</h4>
            <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">Construa hoje o conforto que as próximas gerações da sua família herdarão.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
