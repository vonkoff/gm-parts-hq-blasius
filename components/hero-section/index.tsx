import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative h-96">
      {/* Background Image */}
      <Image
        src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg"
        alt="Automotive background"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
      />
      {/* Overlay to dim the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Text Overlay */}
      <div className="relative flex h-full items-center justify-center">
        <div className="px-4 text-center text-white">
          <h1 className="text-shadow-outline text-3xl font-bold sm:text-4xl lg:text-5xl">
            Genuine GM Parts: Direct from the Source
          </h1>
          <p className="text-shadow-soft mt-4 text-lg sm:text-xl">
            Your One-Stop Shop for Authentic General Motors Components
          </p>
        </div>
      </div>
    </div>
  );
};
