import React from 'react';
import modelKit from './assets/model-kit.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
            Oferta Exclusiva de Lançamento
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-forest dark:text-white">
            A Nutrição que seu Cabelo Deseja. <span className="text-primary">A Economia</span> que sua Rotina Precisa.
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed text-chocolate/80 dark:text-white/80">
            O Kit completo com Ativador de 1L, Shampoo, Condicionador e Máscara para cachos definidos, nutridos e protegidos por muito mais tempo.
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-chocolate/60 dark:text-white/60 text-base font-medium">
              De <span className="line-through">R$ 219,00</span> por apenas
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-primary">R$ 169,00</span>
              <span className="text-lg font-bold text-chocolate dark:text-white/80">à vista</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-5 rounded-xl text-lg font-extrabold shadow-xl shadow-primary/30 hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>QUERO MEU KIT COM 23% OFF</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium opacity-70">
            <div className="flex -space-x-2">
              <div className="size-8 rounded-full border-2 border-white bg-gray-200"></div>
              <div className="size-8 rounded-full border-2 border-white bg-gray-300"></div>
              <div className="size-8 rounded-full border-2 border-white bg-gray-400"></div>
            </div>
            <span>Mais de 5.000 mulheres já transformaram seus cachos</span>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-4 relative">
            <img
              src={modelKit}
              alt="Modelo segurando o Kit Amanhecer Coco"
              className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-forest text-white p-4 rounded-2xl shadow-xl border-4 border-white -rotate-3 hidden md:block animate-bounce-slow z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Ultra Rendimento</p>
            <p className="text-2xl font-black italic">KIT COMPLETO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;