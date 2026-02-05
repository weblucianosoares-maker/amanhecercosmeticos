import React from 'react';

const ComparisonSection: React.FC = () => {
    return (
        <section className="py-20 bg-forest text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Parem de jogar dinheiro fora!</h2>
                    <p className="text-lg opacity-80">
                        A matemática é simples: mais produto, mais economia, mais resultado.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                    {/* Left Side: Competition */}
                    <div className="flex flex-col items-center">
                        <div className="relative mb-6">
                            <div className="flex gap-2 justify-center items-end opacity-50 grayscale">
                                <div className="w-16 h-20 bg-gray-400 rounded-lg border-2 border-white/20"></div>
                                <div className="w-16 h-20 bg-gray-400 rounded-lg border-2 border-white/20"></div>
                                <div className="w-16 h-20 bg-gray-400 rounded-lg border-2 border-white/20"></div>
                                <div className="w-16 h-20 bg-gray-400 rounded-lg border-2 border-white/20"></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12">
                                <span className="text-red-500 text-8xl font-black opacity-80 drop-shadow-lg">X</span>
                            </div>
                        </div>
                        <p className="text-center font-bold text-white/60">
                            4 Potes Comuns (250g)<br />
                            <span className="text-sm font-normal">Acabam rápido e custam caro</span>
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <span className="material-symbols-outlined text-6xl text-primary animate-pulse">arrow_right_alt</span>
                    </div>
                    <div className="md:hidden block rotate-90 my-4">
                        <span className="material-symbols-outlined text-6xl text-primary animate-pulse">arrow_right_alt</span>
                    </div>

                    {/* Right Side: Our Product */}
                    <div className="flex flex-col items-center relative">
                        <div className="relative mb-6">
                            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full animate-pulse-slow"></div>
                            {/* Visual placeholder for 1L Bottle */}
                            <div className="w-32 h-48 bg-primary rounded-xl border-4 border-white shadow-2xl flex items-center justify-center relative">
                                <span className="text-4xl font-black text-white drop-shadow-md">1L</span>
                                <div className="absolute -top-3 -right-6 bg-yellow-400 text-forest text-xs font-black px-2 py-1 rounded-full uppercase shadow-sm">
                                    GIGA
                                </div>
                            </div>
                        </div>
                        <p className="text-center font-bold text-white text-xl">
                            1 Ativador Amanhecer<br />
                            <span className="text-base font-normal text-primary">= 4 Potes de Farmácia</span>
                        </p>
                    </div>

                </div>

                <div className="mt-12 bg-white/10 rounded-2xl p-6 text-center max-w-2xl mx-auto border border-white/20 backdrop-blur-sm">
                    <p className="text-xl md:text-2xl font-bold">
                        "Um único frasco que dura <span className="text-primary">meses</span>, não semanas."
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ComparisonSection;
