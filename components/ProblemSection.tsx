import React from 'react';
import painFrizz from './assets/pain-frizz.jpg';
import painYield from './assets/pain-yield.jpg';
import painDryness from './assets/pain-dryness.jpg';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-forest text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Cansada de promessas que não definem seus cachos?</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            Sabemos como é frustrante investir em tratamentos que não trazem o resultado esperado no dia seguinte.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <img
              src={painFrizz}
              alt="Cabelo com frizz"
              className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
            />
            <h3 className="text-xl font-bold mb-4">Frizz que não vai embora</h3>
            <p className="opacity-70">Mesmo após horas de finalização, os fios ficam rebeldes logo na primeira hora fora de casa.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <img
              src={painYield}
              alt="Pote de creme vazio"
              className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
            />
            <h3 className="text-xl font-bold mb-4">O creme acaba em uma semana</h3>
            <p className="opacity-70">Cachos precisam de produto, mas as embalagens tradicionais são pequenas e pesam no seu bolso.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <img
              src={painDryness}
              alt="Cabelo ressecado"
              className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
            />
            <h3 className="text-xl font-bold mb-4">Sem vida no day-after</h3>
            <p className="opacity-70">Acordar e ver toda a definição perdida é desanimador. Você merece cachos prontos todos os dias.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-forest px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            NÃO SOFRA MAIS COM SEUS CACHOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;