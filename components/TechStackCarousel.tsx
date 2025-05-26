import { techStack } from '@/data';
import Image from 'next/image';
import React from 'react';

const TechStackCarousel = () => {
  return (
    <div className="overflow-hidden px-12 mt-4">
      <div className="whitespace-nowrap animate-infiniteScroll">
        {[...techStack, ...techStack].map((tech, index) => (
          <span key={index} className="inline-block mx-2 font-semibold text-white">
            <Image
              src={`/${tech}.png`}
              alt={tech}
              width={80}
              height={80}
              className="mx-auto"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;