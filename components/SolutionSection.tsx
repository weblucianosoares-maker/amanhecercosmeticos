import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24" id="beneficios">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div
            className="w-full lg:w-1/2 aspect-square rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDna7d_aMN86ghDX6XSXO9LllV8FrQqAZxMo3f9ckBYG8c7Rp9XfUX_dO8MzDQ6sFLqnJEokuV7IIMSmvMszVu0g2d1Yp3MAK5HeydwyGF7tvLpVvjFFOSJMQECi1JIgR9OSSWZUTSqTmv1xLmw7lm6Djqxjj38YS80tkGjUsU1ZkhhJA4ov6QQcVNhlszK5NWuV7okKmXxpozuxurSBPIlIRviogq2O8qtbJa9vE23lIXTHa0HeruGTRGroyDHA8vOUxDW8CqF93u_')" }}
            aria-label="Close up of coconut oil and vitamin e capsules"
          ></div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-forest dark:text-white">A Solução: Óleo de Coco + Vitamina E</h2>
            <p className="text-xl text-chocolate/80 dark:text-white/80 leading-relaxed">
              Nossa fórmula exclusiva não apenas hidrata, ela realiza um <span className="font-bold text-forest dark:text-primary">tratamento profundo</span> que repõe os lipídios essenciais.
            </p>
            <div className="space-y-6">
              <BenefitItem
                title="Blindagem Anti-Umidade"
                description="O óleo de coco sela a cutícula, mantendo a hidratação dentro e o frizz fora."
              />
              <BenefitItem
                title="Proteção Antioxidante"
                description="A Vitamina E protege os fios contra agressores externos e envelhecimento precoce."
              />
              <BenefitItem
                title="Brilho Espelhado"
                description="Nutrição que devolve a luminosidade natural até dos cabelos mais porosos."
              />
            </div>
            <div className="pt-4">
              <a
                href="https://www.amanhecerprofessional.com.br/produtos/kit-nutricao-coco-shampoo-condicionador-e-mascara-300ml-e-ativador-de-cachos-1l/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 hover:brightness-110 transition-all inline-block"
              >
                QUERO A SOLUÇÃO COMPLETA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="flex gap-4">
    <div className="size-6 mt-1 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white">
      <span className="material-symbols-outlined text-sm">check</span>
    </div>
    <div>
      <h4 className="font-bold text-lg dark:text-white">{title}</h4>
      <p className="opacity-70 dark:text-white/70">{description}</p>
    </div>
  </div>
);

export default SolutionSection;