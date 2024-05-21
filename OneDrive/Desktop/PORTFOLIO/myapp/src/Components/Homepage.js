import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Typed from 'typed.js';
import me from '../Components/asset/me.png';
import './style.css';
import ok from '../Components/asset/ok.png'

function Homepage() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);
  const mainControls = useAnimation();

  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Frontend developer', 'Coder'],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 500) {
      mainControls.start('visible');
    }
  }, [scrollY, mainControls]);

  return (
    <>
      <div className=" w-screen h-screen flex items-center justify-center " style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className=" w-[100%] h-[100%] bg-transparent flex items-center justify-center ">
          <motion.div
            variants={{
              hidden: { x: '-100vw', opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ when: 'beforChildrn', duration: 1 }}
            className=" w-[25rem] h-[12.5rem] sm:w-[35rem] sm:h-[17.5rem] lg:w-[45rem] lg:h-[22.5rem] bg-[#706f7520]  rounded-xl  "
          >
            <div className=" w-full h-full flex items-center p-6 sm:p-10 text-1xl sm:text-4xl text-white font-Quicksand">
              <motion.h1
                variants={{
                  hidden: { y: 0, x: 0, opacity: 0 },
                  visible: { x: 0, y: -20, opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1, duration: 1 }}
                className='font-Quicksand iii'
              >
                Hi! I'm Ganesh prajapati &amp;<br />I  'm a <br />
                <span className="auto-type text-[#289C02] text-2xl sm:text-5xl font-Quicksand"></span>
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div className="py-10  w-screen  flex  items-center justify-evenly " id='Aboutus' style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: '50vw' },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          className=" w-[50rem] h-[25rem] sm:h-[30rem]  rounded-xl  relative z-0 ">
          <div className=" w-full h-full p-10 text-4xl text-white font-Quicksand">
            <h1 className='text-2xl sm:text-4xl text-[#FFD308]'>About-me</h1>
            <h2 className=' text-white text-[0.5rem] leading-3 sm:text-sm md:text-xl mt-5 sm:mt-10'>👋 Hi there! I'm Ganesh Prajapati, a second-year student at IIT Roorkee with a passion for frontend web development. When I'm not buried in code, you can find me actively involved in various groups on campus, such as NSS, CIG, and IARC.
              My journey into the world of tech began with a fascination for solving complex problems, particularly in data structures and algorithms. Whether it's crafting elegant user interfaces or tackling algorithmic challenges, I thrive on the creative and analytical aspects of software development.
              Feel free to connect with me to chat about all things tech, collaboration opportunities, or just to share some coding adventures!</h2>
          </div>
        </motion.div>
        <div className='mr-5 mb-10 sm:mb-0'>
          <img src={me} alt='' className='w-[100%] h-[100%]' />
        </div>
      </motion.div>
    </>
  );
}

export default Homepage;
