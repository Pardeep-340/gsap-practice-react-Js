import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImg from "../assets/image/png/Image.png";

gsap.registerPlugin(ScrollTrigger);

const DreamTempleJourney = () => {
  const containerRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !rowRef.current) return;

    const container = containerRef.current;
    const row = rowRef.current;

    // Ensure images are loaded and the row width is accurate
    const updateRowWidth = () => {
      const rowWidth = row.scrollWidth;
      const containerWidth = container.offsetWidth;

      gsap.to(row, {
        x: -(rowWidth - containerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${rowWidth}`,
          pin: true,
          scrub: 1,
        },
      });
    };

    // Update row width after images are loaded
    const images = row.querySelectorAll("img");
    if (images.length > 0) {
      let loadedCount = 0;
      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
          if (loadedCount === images.length) updateRowWidth();
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) updateRowWidth();
          };
        }
      });
    } else {
      updateRowWidth();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div
        className="container max-w-[1140px] mx-auto pt-10"
        ref={containerRef}
      >
        <div className="flex justify-between items-center mb-10">
          <button className="bg-yellow-800 px-3 py-2 rounded-md">btn1</button>
          <span className="bg-slate-600 h-[4px] w-full"></span>
          <button className="bg-yellow-800 px-3 py-2 rounded-md">btn2</button>
          <span className="bg-slate-600 h-[4px] w-full"></span>
          <button className="bg-yellow-800 px-3 py-2 rounded-md">btn3</button>
          <span className="bg-slate-600 h-[4px] w-full"></span>
          <button className="bg-yellow-800 px-3 py-2 rounded-md">btn4</button>
        </div>
        <div className="overflow-hidden">
          <div className="flex myRow" ref={rowRef}>
            <img src={myImg} alt="img" />
            <img src={myImg} alt="img" />
            <img src={myImg} alt="img" />
            <img src={myImg} alt="img" />
          </div>
        </div>
      </div>
      <div className="next-section">{/* Next section content */}</div>
    </div>
  );
};

export default DreamTempleJourney;
