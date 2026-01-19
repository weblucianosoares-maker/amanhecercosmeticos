import React from 'react';
import productActivator from './assets/product-activator.jpg';
import productShampoo from './assets/product-shampoo.png';
import productConditioner from './assets/product-conditioner.png';
import productMask from './assets/product-mask.png';

const KitSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#f3eee7] dark:bg-white/5" id="kit">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-forest dark:text-white mb-4">O que vem no seu Kit Amanhecer?</h2>
          <p className="max-w-xl mx-auto opacity-70 dark:text-white/70">Tudo o que você precisa para uma rotina de cuidados profissional sem sair de casa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            image={productActivator}
            title="Ativador de Cachos 1L"
            tag="O FAVORITO"
            subTag="Rende Muito Mais!"
            description1="Definição máxima e controle de volume duradouro com textura leve."
          />
          <ProductCard
            image={productShampoo}
            title="Shampoo Suave"
            description1="Limpeza sem ressecamento"
            description2="Remove as impurezas mantendo a oleosidade natural do couro cabeludo."
          />
          <ProductCard
            image={productConditioner}
            title="Condicionador Selante"
            description1="Desembaraço instantâneo"
            description2="Fecha as cutículas e garante maciez extrema após o enxágue."
          />
          <ProductCard
            image={productMask}
            title="Máscara Nutritiva"
            description1="Reposição de massa"
            description2="O tratamento semanal que reconstrói a fibra capilar de dentro para fora."
          />
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest text-white px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-xl inline-block"
          >
            COMPRAR KIT AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  image: string;
  title: string;
  tag?: string;
  subTag?: string;
  description1: string;
  description2?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, tag, subTag, description1, description2 }) => (
  <div className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-chocolate/5 group hover:shadow-xl transition-all">
    <div className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
      {tag && (
        <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
          {tag}
        </div>
      )}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <h3 className="font-bold text-lg mb-2 dark:text-white">{title}</h3>
    {subTag ? (
      <p className="text-sm opacity-70 mb-4 italic text-primary font-bold uppercase">{subTag}</p>
    ) : (
      <p className="text-sm opacity-70 mb-4 dark:text-white/70">{description1}</p>
    )}
    <p className="text-sm opacity-80 dark:text-white/80">{subTag ? description1 : description2}</p>
  </div>
);

export default KitSection;