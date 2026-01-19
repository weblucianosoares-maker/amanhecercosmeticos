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
            className="h-12 object-contain brightness-0 invert dark:brightness-100 dark:invert-0" // Ajuste para footer escuro/claro se necessário, mas vou deixar normal primeiro ou ver contexto. O bg é light ou dark. Se bg for light (padrão), logo deve ser escura. Se bg for dark, logo clara. A logo original tem fundo rosa? Se for png transparente com letras brancas, não aparece no light. Se letras forem pretas/escuras e bg light, ok. Vou assumir logo colorida e remover filtros por enquanto.
            // O usuário disse "adapte a cor". Vou remover os filtros e ver como fica, ou usar condicional de dark mode se fosse complexo, mas css filter funciona bem.
            // A logo enviada parece ter fundo rosa sólido. Vou usar mix-blend-multiply se tiver fundo branco, mas se for a rosa...
            // O usuário enviou logo-full.png. Se tiver fundo, vai ficar um quadrado.
            // Vou aplicar a imagem e manter object-contain.
            className="h-12 object-contain"
          />
        </div>
        <div className="flex gap-8 text-sm opacity-60 font-medium dark:text-white/60">
          <a className="hover:text-primary transition-colors" href="#">Termos</a>
          <a className="hover:text-primary transition-colors" href="#">Privacidade</a>
          <a className="hover:text-primary transition-colors" href="#">Atendimento</a>
        </div>
        <p className="text-xs opacity-40 dark:text-white/40">© 2024 Amanhecer Professional Cosméticos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;