import React from 'react';

const HowToUseSection: React.FC = () => {
    return (
        <section className="py-20 bg-white dark:bg-black/5" id="como-usar">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-forest dark:text-white mb-4">
                        Cachos Perfeitos em 3 Passos
                    </h2>
                    <p className="opacity-70 dark:text-white/70">
                        Rotina simples, resultado profissional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-primary/20 -z-10"></div>

                    <StepCard
                        number="1"
                        icon="water_drop"
                        title="Lave"
                        description="Limpeza nutritiva que prepara os fios sem ressecar ou agredir."
                    />
                    <StepCard
                        number="2"
                        icon="spa"
                        title="Trate"
                        description="Aplique a máscara de alto impacto e deixe agir por 5 minutos."
                    />
                    <StepCard
                        number="3"
                        icon="auto_awesome"
                        title="Defina"
                        description="Finalize com o Ativador de 1L para blindar os cachos e garantir definição."
                    />
                </div>
            </div>
        </section>
    );
};

interface StepCardProps {
    number: string;
    icon: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description }) => (
    <div className="flex flex-col items-center text-center bg-white dark:bg-background-dark p-8 rounded-3xl shadow-lg border border-chocolate/5 z-10 transition-transform hover:-translate-y-2">
        <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 text-3xl shadow-lg shadow-primary/30 relative">
            <span className="material-symbols-outlined text-3xl">{icon}</span>
            <div className="absolute -top-3 -right-3 size-8 bg-forest rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                {number}
            </div>
        </div>
        <h3 className="text-2xl font-black text-forest dark:text-white mb-3">{title}</h3>
        <p className="opacity-70 dark:text-white/70 leading-relaxed">{description}</p>
    </div>
);

export default HowToUseSection;
