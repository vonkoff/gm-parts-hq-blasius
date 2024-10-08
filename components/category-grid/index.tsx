'use client';
import React, { useState } from 'react';

interface Category {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const categories: Category[] = [
  {
    title: 'ENGINES',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-engine-graphic-l-xl.svg',
    imageAlt: 'Engine',
    href: '/parts/engine',
  },
  {
    title: 'FILTERS',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-filters-graphic-l-xl.svg',
    imageAlt: 'Filters',
    href: '/parts/filters',
  },
  {
    title: 'CHEMICALS & FLUIDS',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-chemicals-fluids-graphic-l-xl.svg',
    imageAlt: 'Chemicals and Fluids',
    href: '/parts/chemicals-fluids',
  },
  {
    title: 'IGNITION PARTS',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-ignition-parts-graphic-l-xl.svg',
    imageAlt: 'Ignition Parts',
    href: '/parts/ignition',
  },
  {
    title: 'BATTERIES & RELATED PARTS',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-battery-accessories-graphic-l-xl.svg',
    imageAlt: 'Batteries and Related Parts',
    href: '/parts/batteries-related',
  },
  {
    title: 'TRANSMISSIONS',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-transmission-graphic-l-xl.svg',
    imageAlt: 'Transmissions',
    href: '/parts/transmission',
  },
  {
    title: 'STEERING & SUSPENSION',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-steering-suspension-graphic-l-xl.svg',
    imageAlt: 'Steering and Suspension',
    href: '/parts/steering-suspension',
  },
  {
    title: 'HEATING & AIR CONDITIONING',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-heat-ac-graphic-l-xl.svg',
    imageAlt: 'Heating and Air Conditioning',
    href: '/parts/heating-air-conditioning',
  },
  {
    title: 'TIRES & WHEELS',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-wheels-graphic-l-xl.svg',
    imageAlt: 'Tires and Wheels',
    href: '/parts/tires-wheels',
  },
  {
    title: 'ELECTRICAL',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-electrical-graphic-l-xl.svg',
    imageAlt: 'Electrical',
    href: '/parts/electrical',
  },
  {
    title: 'BRAKE SYSTEM',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-brake-system-graphic-l-xl.svg',
    imageAlt: 'Brake System',
    href: '/parts/brakes',
  },
  {
    title: 'BODY',
    imageSrc:
      'https://www.gmparts.com/content/dam/gmparts/na/us/en/index/01-images/2023/11-08/gmgp-bumpers-fascias-graphic-l-xl.svg',
    imageAlt: 'Body',
    href: '/parts/body',
  },
];

export const CategoryGrid: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = 8; // 4 columns x 2 rows
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  const slides = [];
  for (let i = 0; i < categories.length; i += itemsPerSlide) {
    slides.push(categories.slice(i, i + itemsPerSlide));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      {/* Grid for small screens */}
      <div className="grid grid-cols-2 gap-6 md:hidden">
        {categories.map((category) => (
          <a
            href={category.href}
            key={category.title}
            className="group flex flex-col items-center text-center"
          >
            <div className="w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={category.imageSrc}
                alt={category.imageAlt}
                className="h-32 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-sm font-medium text-gray-900">{category.title}</h3>
          </a>
        ))}
      </div>

      {/* Slider for medium screens */}
      <div className="hidden md:block lg:hidden">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="grid w-full flex-shrink-0 grid-cols-4 grid-rows-2 gap-6"
                >
                  {slide.map((category) => (
                    <a
                      href={category.href}
                      key={category.title}
                      className="group flex flex-col items-center text-center"
                    >
                      <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={category.imageSrc}
                          alt={category.imageAlt}
                          className="h-32 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="mt-4 text-sm font-medium text-gray-900">{category.title}</h3>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Grid for large screens */}
      <div className="hidden grid-cols-6 gap-6 lg:grid">
        {categories.map((category) => (
          <a
            href={category.href}
            key={category.title}
            className="group flex flex-col items-center text-center"
          >
            <div className="w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={category.imageSrc}
                alt={category.imageAlt}
                className="h-32 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-sm font-medium text-gray-900">{category.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};
