import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import ok from '../Components/asset/ok.png';
import COGNIZANCE from '../Components/asset/COGNIZANCE.png';
import one from '../Components/asset/NssCer.jpg';
import camday from '../Components/asset/camday.jpg'

function Thought() {
  const slides = [
    {
      des: "Technology empowers us to innovate, connect, and elevate humanity, but its true value lies in how we wield its potential.",
      img: COGNIZANCE
    },
    {
      des: "In the digital realm, technology serves as a catalyst for progress, enabling innovation, collaboration, and the realization of human aspirations.",
      img: camday
    },
    {
      des: "Through technology, we unlock boundless possibilities, bridging distances, sparking creativity, and shaping a brighter future for all.",
      img: one
    },
    {
      des: "Through technology, we unlock boundless possibilities, bridging distances, sparking creativity, and shaping a brighter future for all.",
      video:'<iframe width="100%" height="50%" src="https://www.youtube.com/embed/rEFesroSeN4?si=A8ZI40eFnym0hDYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      des: "Through technology, we unlock boundless possibilities, bridging distances, sparking creativity, and shaping a brighter future for all.",
      video:'<iframe width="100%" height="50%" src="https://www.youtube.com/embed/4QFWXjaxSIw?si=aiU5n946xbGn8YD9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },

    
    // {
    //   des: "Tech empowers us to transcend limitations, fostering collaboration, creativity, and progress, but its essence lies in our ethical stewardship.",
    //   img: one
    // },
    // {
    //   des: "Technology's essence lies not just in its innovation, but in how it fosters connection, creativity, and equitable progress for humanity.",
    //   img: one
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change the interval duration as needed (2000ms = 2 seconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='flex flex-col justify-center  items-center w-screen  m-auto py-16 px-4 relative group'
      style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className=' text-center py-8 text-3xl md:text-4xl text-yellow-500 font-serif font-bold'>My other projects and certificates</h1>
      <div
        className='w-full h-full rounded-2xl  bg-center bg-cover duration-500 flex justify-center items-center'
      >

        {/* Display three cards at a time */}
        {[...slides.slice(currentIndex), ...slides.slice(0, currentIndex)].slice(0, 3).map((slide, index) => (
          <div key={index} className="mr-4 p-5 rounded-md shadow-lg bg-white  ">
            <div className=" overflow-hidden   text-black w-56 h-[60%] flex flex-col items-center justify-center align-middle">
              {slide.video ? (
                <div  dangerouslySetInnerHTML={{ __html: slide.video }} />
              ) : (
                <img src={slide.img} className='w-[100%] h-[50%] rounded-md' alt='' />
              )}
              <div className="px-6 py-4 w-[100%] h-[50%]">
                <p className="text-center text-sm flex align-middle justify-center items-center md:text-[1rem]">
                  {slide.des}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thought;
