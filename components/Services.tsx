import React from 'react';
import { SERVICES_CONTENT } from '../constants';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="bg-[#E0F2F1] text-[#004d40] p-3 rounded-full mr-4">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-600">{children}</p>
  </div>
);

const ServiceIcons = [
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3.25M9 14V7m-6 7h18" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 16.663c.527-.527.943-1.12 1.284-1.782M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
];

const Services: React.FC = () => {
  return (
    <section id="offer" className="py-20 md:py-28 bg-[#FDFBF7] scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#004d40]">
          {SERVICES_CONTENT.title}
        </h2>

        <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">{SERVICES_CONTENT.strengthsTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {SERVICES_CONTENT.cards.map((card, index) => (
                    <ServiceCard key={card.title} icon={ServiceIcons[index]} title={card.title}>
                        {card.description}
                    </ServiceCard>
                ))}
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
                {SERVICES_CONTENT.summary}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left md:text-justify bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{SERVICES_CONTENT.dyslexiaTitle}</h3>
                <div className="space-y-4 text-gray-600">
                    {SERVICES_CONTENT.dyslexiaParagraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                    ))}
                </div>
            </div>
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{SERVICES_CONTENT.analysisTitle}</h3>
                    <p className="text-gray-600">
                        {SERVICES_CONTENT.analysisParagraph}
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{SERVICES_CONTENT.trainingTitle}</h3>
                    <p className="text-gray-600">
                        {SERVICES_CONTENT.trainingParagraph}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
