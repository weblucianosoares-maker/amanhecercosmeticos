import React from 'react';
import logoFull from './assets/logo-full.png';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-chocolate/10 bg-background-light dark:bg-background-dark dark:border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img
            src={logoFull}
            alt="Amanhecer Professional"
            className="h-12 object-contain brightness-0 invert dark:brightness-100 dark:invert-0"
          />
        </div>
        <div className="flex gap-8 text-sm opacity-60 font-medium dark:text-white/60">
          <a className="hover:text-primary transition-colors" href="#">Termos</a>
          <a className="hover:text-primary transition-colors" href="#">Privacidade</a>
          <a className="hover:text-primary transition-colors" href="#">Atendimento</a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-bold opacity-50 dark:text-white/50 uppercase tracking-widest">Pagamento Seguro</p>
        <div className="flex gap-2">
          <span className="h-8 w-12 bg-gray-200 dark:bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">PIX</span>
          <span className="h-8 w-12 bg-gray-200 dark:bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">VISA</span>
          <span className="h-8 w-12 bg-gray-200 dark:bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">MASTER</span>
          <span className="h-8 w-12 bg-gray-200 dark:bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">AMEX</span>
        </div>
      </div>
      <p className="text-xs opacity-40 dark:text-white/40 mt-8 text-center">© 2024 Amanhecer Professional Cosméticos. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;