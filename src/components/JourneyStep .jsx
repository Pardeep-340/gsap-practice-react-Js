// JourneyStep.js
import React from 'react';

const JourneyStep = ({ step, title, subtitle, description, image }) => {
  return (
    <div className="flex flex-col items-center w-full p-6">
      <div className="w-full max-w-3xl text-center">
        <div className="text-lg font-semibold">{step}</div>
        <div className="text-3xl font-bold my-4">{title}</div>
        <div className="text-xl text-yellow-500">{subtitle}</div>
        <div className="mt-4 text-gray-700">{description}</div>
      </div>
      <div className="mt-6">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default JourneyStep;
