
import React, { useMemo } from 'react';

const Pain: React.FC = () => {
  const stats = useMemo(() => [
    { value: "588 Mil+", label: "CLIENTES ATENDIDOS" },
    { value: "R$ 132,4 BI+", label: "CRÉDITO COMERCIALIZADO" },
    { value: "846 Mil+", label: "COTAS ATIVAS" },
    { value: "28 MARCAS", label: "ADMINISTRADAS" },
  ], []);

  return (
    <section className="bg-vintage-red py-8 md:py-10 overflow-hidden reveal" aria-label="Estatísticas de Mercado">
      <div className="container mx-auto px-6 max-w-6xl">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group transform-gpu">
              <dd className="text-white text-xl md:text-2xl font-black tracking-tighter group-hover:scale-105 transition-transform duration-500 font-sans">
                {stat.value}
              </dd>
              <dt className="text-white/50 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] mt-1">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Pain;
