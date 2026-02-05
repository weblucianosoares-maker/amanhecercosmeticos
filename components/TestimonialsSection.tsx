import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden" id="depoimentos">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <TrustItem icon="spa" text="Livre de Parabenos" />
          <TrustItem icon="cruelty_free" text="Não Testado em Animais" />
          <TrustItem icon="science" text="Fórmula Profissional" />
          <TrustItem icon="lock" text="Envio Seguro" />
        </div>

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
          <WhatsappTestimonialCard
            name="Mariana Silva"
            time="10:42"
            text="Amiga, o ativador de 1L é um salvador de vidas! Meus cachos nunca ficaram tão definidos por tanto tempo, e o melhor é que o produto dura muito. Vale cada centavo! 😍"
          />
          <WhatsappTestimonialCard
            name="Ana Beatriz"
            time="14:15"
            text="Estou em transição capilar e esse kit foi a única coisa que ajudou a esconder as duas texturas sem pesar o cabelo. O cheiro de coco é maravilhoso. Amei demais!"
            featured
          />
          <WhatsappTestimonialCard
            name="Juliana Costa"
            time="09:30"
            text="O dia seguinte (day-after) é real! Acordo, balanço o cabelo e ele está pronto. Recomendo pra todas as minhas amigas cacheadas. Chegou super rápido tb!"
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

const TrustItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex flex-col items-center justify-center text-center gap-2">
    <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
    <span className="text-sm font-bold text-chocolate dark:text-white">{text}</span>
  </div>
)

interface TestimonialCardProps {
  name: string;
  time: string;
  text: string;
  featured?: boolean;
}

const WhatsappTestimonialCard: React.FC<TestimonialCardProps> = ({ name, time, text, featured }) => (
  <div className={`bg-[#E5DDD5] dark:bg-[#202c33] p-4 rounded-2xl shadow-lg border border-chocolate/5 relative ${featured ? 'md:scale-105 z-10 shadow-2xl' : ''}`}>
    <div className="bg-white dark:bg-[#111b21] rounded-lg p-4 shadow-sm relative after:content-[''] after:absolute after:top-0 after:-left-2 after:w-0 after:h-0 after:border-[10px] after:border-t-transparent after:border-r-white dark:after:border-r-[#111b21] after:border-b-transparent">
      <div className="flex justify-between items-baseline mb-1">
        <span className="font-bold text-[#E55C18] dark:text-[#E55C18] text-sm push-name">{name}</span>
      </div>
      <p className="text-sm text-[#111b21] dark:text-white/90 leading-relaxed mb-2">{text}</p>
      <div className="flex justify-end items-center gap-1">
        <span className="text-[10px] text-gray-400">{time}</span>
        <span className="material-symbols-outlined text-[14px] text-[#53bdeb]">done_all</span>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;