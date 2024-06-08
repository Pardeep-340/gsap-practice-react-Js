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

    // GSAP timeline and ScrollTrigger for step buttons and lines
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 10%",
        end: "+=400%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.floor(progress * 4); // Assuming there are 4 slides
          goToSlide(slideIndex);
        },
      },
    });

    tl.fromTo(
      ".step-button1",
      {
        boxShadow: "0px 0px 0 0 #e0a922 inset",
      },
      {
        boxShadow: "85px 0px 0 0 #e0a922 inset",
      },
      0
    )
      .fromTo(
        ".line1",
        {
          "--line-before-width": "0%",
        },
        {
          "--line-before-width": "100%",
        },
        ">"
      )
      .fromTo(
        ".step-button2",
        {
          boxShadow: "0px 0px 0 0 #e0a922 inset",
        },
        {
          boxShadow: "85px 0px 0 0 #e0a922 inset",
        },
        ">"
      )
      .fromTo(
        ".line2",
        {
          "--line-before-width": "0%",
        },
        {
          "--line-before-width": "100%",
        },
        ">"
      )
      .fromTo(
        ".step-button3",
        {
          boxShadow: "0px 0px 0 0 #e0a922 inset",
        },
        {
          boxShadow: "85px 0px 0 0 #e0a922 inset",
        },
        ">"
      )
      .fromTo(
        ".line3",
        {
          "--line-before-width": "0%",
        },
        {
          "--line-before-width": "100%",
        },
        ">"
      )
      .fromTo(
        ".step-button4",
        {
          boxShadow: "0px 0px 0 0 #e0a922 inset",
        },
        {
          boxShadow: "85px 0px 0 0 #e0a922 inset",
        },
        ">"
      );

    const goToSlide = (slideIndex) => {
      console.log("Go to slide", slideIndex);
      // Add code to navigate to the appropriate slide based on slideIndex
    };

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
        <div className="buttons_parent">
          <div className="position_relative">
            <button className="step-button step-button1">STEP1</button>
          </div>
          <div className="line line1"></div>
          <div className="position_relative">
            <button className="step-button step-button2">STEP2</button>
          </div>
          <div className="line line2"></div>
          <div className="position_relative">
            <button className="step-button step-button3">STEP3</button>
          </div>
          <div className="line line3"></div>
          <div className="position_relative">
            <button className="step-button step-button4">STEP4</button>
          </div>
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
      <div className="next-section"></div>
    </div>
  );
};

export default DreamTempleJourney;
