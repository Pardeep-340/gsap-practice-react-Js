import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";

function HeroScroll() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider_container",
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

    function goToSlide(index) {
      sliderRef.current.slickGoTo(index);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    arrows: false,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="slider_container">
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
      <Slider ref={sliderRef} {...settings}>
        <div className="slide">{/* Slide 1 content */}</div>
        <div className="slide">{/* Slide 2 content */}</div>
        <div className="slide">{/* Slide 3 content */}</div>
        <div className="slide">{/* Slide 4 content */}</div>
      </Slider>
    </div>
  );
}

export default HeroScroll;
