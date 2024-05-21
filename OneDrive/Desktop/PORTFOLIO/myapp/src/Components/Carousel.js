import React, { useEffect } from 'react';
import './Carousel.css';

function Carousel() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <div className=" py-5  w-screen  relative ">
      <h1 className='pl-10  text-center absolute z-0  text-[6rem] sm:text-[8rem] md:text-[10rem] '>Skills</h1>

      <div className="scroller w-screen rotate-12" data-speed="slow">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>Responsys Development</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Figma</li>
          <li>React</li>
          <li>C++</li>
          <li>Data Structures</li>
          <li>Analytics</li>
        </ul>
      </div>
  

      <div className="scroller -rotate-12" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>Responsys Development</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Figma</li>
          <li>React</li>
          <li>C++</li>
          <li>Data Structures</li>
          <li>Analytics</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
