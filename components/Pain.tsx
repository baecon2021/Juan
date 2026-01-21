
import React from 'react';

const Pain: React.FC = () => {
  const stats = [
    { value: "588 Mil+", label: "CLIENTES ATENDIDOS" },
    { value: "R$ 132, 4 BI+", label: "CRÉDITOS COMERCIALIZADOS" },
    { value: "846 Mil+", label: "COTAS COMERCIALIZADAS" },
    { value: "28 marcas+", label: "ADMINISTRADAS" },
  ];

  return (
    <section className="bg-[#A50000] py-6 md:py-8 overflow-hidden border-b border-white/5" aria-label="Estatísticas de Mercado">
      <div className="container mx-auto px-6 max-w-5xl">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-1 group">
              <dt className="text-white/60 text-[7px] md:text-[8px] font-bold uppercase tracking-[0.25em] leading-tight max-w-[140px] order-2">
                {stat.label}
              </dt>
              <dd className="text-white text-lg md:text-xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-500 order-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Pain;
