import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden" id="depoimentos">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-forest dark:text-white">Quem usa, aprova</h2>
            <p className="text-lg opacity-70 mt-4 dark:text-white/70">Veja o resultado real de quem trocou as promessas pela definição de verdade.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined fill-1">star</span>
              ))}
            </div>
            <span className="font-bold dark:text-white">4.9/5 (1.2k+ avaliações)</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Mariana Silva"
            text="O ativador de 1L é um salvador de vidas! Meus cachos nunca ficaram tão definidos por tanto tempo, e o melhor é que o produto dura muito. Vale cada centavo!"
          />
          <TestimonialCard
            name="Ana Beatriz"
            text="Estou em transição capilar e esse kit foi a única coisa que ajudou a esconder as duas texturas sem pesar o cabelo. O cheiro de coco é maravilhoso."
            featured
          />
          <TestimonialCard
            name="Juliana Costa"
            text="O dia seguinte (day-after) é real! Acordo, balanço o cabelo e ele está pronto. Recomendo pra todas as minhas amigas cacheadas."
          />
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 hover:brightness-110 transition-all inline-block"
          >
            JUNTE-SE A ELAS
          </a>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  text: string;
  featured?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, featured }) => (
  <div className={`bg-white dark:bg-background-dark p-8 rounded-2xl shadow-lg border border-chocolate/5 dark:border-white/10 ${featured ? 'md:scale-105 z-10' : ''}`}>
    <div className="flex gap-4 items-center mb-6">
      <div className="size-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div>
        <p className="font-bold dark:text-white">{name}</p>
        <p className="text-xs opacity-50 dark:text-white/50">Cliente Verificada</p>
      </div>
    </div>
    <p className="italic text-chocolate/80 dark:text-white/80 leading-relaxed">"{text}"</p>
  </div>
);

export default TestimonialsSection;