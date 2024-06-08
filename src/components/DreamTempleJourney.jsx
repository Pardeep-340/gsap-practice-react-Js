// DreamTempleJourney.js
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import JourneyStep from './JourneyStep ';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: 'Step 01',
    title: 'Submit Your Requirements',
    subtitle: 'Initiate Your Project',
    description: 'Start by sending us your requirements along with details about the space where you plan to install the temple. This allows us to understand your needs, preferences, and the specifics of your environment.',
    image: '/path/to/image1.png',
  },
  {
    step: 'Step 02',
    title: 'Design Consultation',
    subtitle: 'Explore Possibilities',
    description: 'Our team will work with you to design the perfect temple for your space, ensuring that it meets all your specifications and desires.',
    image: '/path/to/image2.png',
  },
  {
    step: 'Step 03',
    title: 'Finalize and Place Your Order',
    subtitle: 'Confirm Your Design',
    description: 'Review the final design and place your order. Our team will begin crafting your temple with the utmost care and precision.',
    image: '/path/to/image3.png',
  },
  {
    step: 'Step 04',
    title: 'Delivery and Installation',
    subtitle: 'Receive and Install',
    description: 'We will deliver and install your temple, ensuring everything is perfect and to your satisfaction.',
    image: '/path/to/image4.png',
  },
];

const DreamTempleJourney = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.journey-step');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${containerRef.current.offsetWidth * (sections.length - 1)}`,
      },
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div className="flex">
        {steps.map((step, index) => (
          <div key={index} className="journey-step flex-shrink-0 w-full">
            <JourneyStep
              step={step.step}
              title={step.title}
              subtitle={step.subtitle}
              description={step.description}
              image={step.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamTempleJourney;
