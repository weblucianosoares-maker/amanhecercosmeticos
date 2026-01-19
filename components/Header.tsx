import React from 'react';
import logoFull from './assets/logo-full.png';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f3eee7] dark:border-white/10 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoFull}
            alt="Amanhecer Professional"
            className="h-12 md:h-16 object-contain"
          />
        </div>
        <nav className="flex items-center gap-8">
          {/* Links removidos conforme solicitado */}
          <a
            href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            QUERO MEU KIT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;