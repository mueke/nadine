import React from 'react';
import type { TrainingItem } from '../types';
import { ABOUT_CONTENT, TRAININGS } from '../constants';

const TrainingTimelineItem: React.FC<{ item: TrainingItem; isLast: boolean }> = ({ item, isLast }) => (
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.year}</time>
    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
    {item.description && <p className="text-base font-normal text-gray-600">{item.description}</p>}
  </li>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#004d40]">
          {ABOUT_CONTENT.title}
        </h2>
        <div className="text-lg text-gray-700 space-y-4 text-left md:text-justify">
          {ABOUT_CONTENT.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#004d40]">
            {ABOUT_CONTENT.trainingsTitle}
          </h3>
          <ol className="relative border-s border-gray-200">
            {TRAININGS.map((item, index) => (
              <TrainingTimelineItem key={index} item={item} isLast={index === TRAININGS.length - 1} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
