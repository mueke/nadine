import React from 'react';
import { PROCESS_PRICING_CONTENT } from '../constants';
import type { PriceItemData } from '../types';

const PriceItem: React.FC<PriceItemData> = ({ title, description, price }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
            <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
            <span className="text-xl font-bold text-[#004d40]">{price}</span>
        </div>
    </div>
);

const ProcessAndPricing: React.FC = () => {
  const { title, initialInfo, priceItems, location } = PROCESS_PRICING_CONTENT;
  return (
    <section id="process" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#004d40]">
          {title}
        </h2>

        <div className="space-y-6">
            <div className="text-center p-6 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-800">{initialInfo.title}</h4>
                <p className="text-gray-600">{initialInfo.description}</p>
            </div>
            
            {priceItems.map(item => (
                <PriceItem 
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </div>

        <div className="mt-12 text-center text-gray-600 bg-gray-50 p-6 rounded-lg">
            <p>{location}</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndPricing;
