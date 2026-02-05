import React from 'react';
import modelKit from './assets/model-kit.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-8 overflow-hidden min-h-[calc(100vh-80px)] lg:min-h-0 flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 lg:col-span-7 order-2 lg:order-1">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-forest dark:text-white">
            Cachos de Salão em Casa: <span className="text-primary">Nutrição Profunda</span> e Definição que dura dias.
          </h1>
          <p className="text-base md:text-lg opacity-90 leading-relaxed text-chocolate/80 dark:text-white/80 max-w-xl">
            O segredo das profissionais agora disponível para você. O único kit com <span className="font-bold text-forest dark:text-primary">Ativador de 1 Litro</span> que garante brilho intenso e rende 4x mais que os cremes comuns.
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-chocolate/60 dark:text-white/60 text-base font-medium">
              De <span className="line-through">R$ 219,00</span> por apenas
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black text-primary">R$ 169,00</span>
              <span className="text-lg font-bold text-chocolate dark:text-white/80">à vista</span>
            </div>
            <p className="text-sm font-bold text-red-500 animate-pulse mt-1">
              ⚠️ Desconto de R$ 51,00 disponível por tempo limitado.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-extrabold shadow-xl shadow-primary/30 hover:brightness-110 transition-all flex items-center justify-center gap-2"
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
        <div className="order-1 lg:order-2 relative lg:col-span-5">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="rounded-2xl shadow-2xl bg-white p-3 relative rotate-1 lg:rotate-2 hover:rotate-0 transition-all duration-500">
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-20 bg-yellow-400 text-forest font-black rounded-full size-20 md:size-28 flex flex-col items-center justify-center text-center leading-tight shadow-lg border-4 border-white transform rotate-12 group-hover:scale-110 transition-transform">
              <span className="text-[10px] md:text-xs uppercase tracking-wide">Tamanho</span>
              <span className="text-lg md:text-2xl">GIGA</span>
              <span className="text-xs md:text-sm">1 LITRO</span>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={modelKit}
                alt="Modelo segurando o Kit Amanhecer Coco"
                className="w-full h-auto object-cover aspect-[4/3] transform transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-forest text-white p-3 md:p-4 rounded-xl shadow-xl border-4 border-white -rotate-3 hidden md:block animate-bounce-slow z-10">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">Ultra Rendimento</p>
            <p className="text-xl md:text-2xl font-black italic">KIT COMPLETO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;