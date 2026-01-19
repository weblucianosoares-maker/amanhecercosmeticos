import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-24 bg-forest text-white">
      <div className="max-w-[1000px] mx-auto px-6 bg-white/5 rounded-[40px] border border-white/10 p-8 md:p-16 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary/20">
          <div className="h-full bg-primary w-4/5"></div>
        </div>
        <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold mb-6">ESTOQUE LIMITADO: ÚLTIMAS 14 UNIDADES</div>
        <h2 className="text-3xl md:text-5xl font-black mb-8">Leve o Kit Completo Amanhecer Coco Hoje</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <div className="text-left">
            <ul className="space-y-3 opacity-90">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Ativador 1L</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Shampoo Nutritivo</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Condicionador Selante</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Máscara de Reposição</li>
            </ul>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
            <p className="text-sm opacity-70 line-through">De R$ 219,00</p>
            <div className="flex items-start gap-1 justify-center">
              <span className="text-2xl font-bold mt-2">R$</span>
              <span className="text-6xl font-black text-primary tracking-tighter">169,00</span>
            </div>
            <p className="text-xs font-bold mt-2 text-primary uppercase">Ou 10x de R$ 16,90</p>
          </div>
        </div>
        <a
          href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto bg-primary text-white px-16 py-6 rounded-2xl text-xl font-extrabold shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all inline-block"
        >
          QUERO MEU KIT COM 23% OFF
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-8 opacity-50 grayscale contrast-200">
          <span className="material-symbols-outlined text-4xl">security</span>
          <span className="material-symbols-outlined text-4xl">local_shipping</span>
          <span className="material-symbols-outlined text-4xl">verified_user</span>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;