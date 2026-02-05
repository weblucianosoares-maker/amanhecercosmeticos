import React, { useState } from 'react';

const FAQSection: React.FC = () => {
    const faqs = [
        {
            question: "Meu cabelo é tipo 4C, serve?",
            answer: "Sim! A linha de Coco é ideal para curvaturas do 2AB ao 4C, entregando a gordura boa que o fio crespo precisa para se manter nutrido e definido."
        },
        {
            question: "O Ativador pesa no cabelo?",
            answer: "Não. Nossa fórmula foi desenvolvida com tecnologia de nanopartículas que define sem deixar o aspecto 'durinho', pesado ou oleoso."
        },
        {
            question: "Quanto tempo dura o kit?",
            answer: "Dependendo do volume do cabelo e frequência de uso, o Ativador de 1 Litro pode durar de 3 a 5 meses, rendendo muito mais que os produtos convencionais."
        },
        {
            question: "Serve para quem está em transição?",
            answer: "Perfeitamente. A alta carga nutritiva ajuda a disfarçar a diferença de texturas e fortalece o fio novo que está crescendo."
        },
        {
            question: "Entrega em todo o Brasil?",
            answer: "Sim, enviamos para todo o território nacional com código de rastreio e seguro entrega."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-black/10" id="faq">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-forest dark:text-white">Dúvidas Frequentes</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-chocolate/5 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
                <span className="font-bold text-lg text-forest dark:text-white">{question}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 pt-0 text-chocolate/80 dark:text-white/80 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
