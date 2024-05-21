import React from 'react';
import './style.css';
import left from '../Components/asset/left.jpg';
import education from '../Components/asset/education.png'
import NSS from '../Components/asset/NSS.png'
import darkNight from '../Components/asset/darkNight.jpg'
import Summit from '../Components/asset/Summit.png'
import deepBlue from '../Components/asset/deepBlue.jpg'
import marineblue from '../Components/asset/marineblue.jpg'
import CIG from '../Components/asset/CIG.png'
import WeatherApp from '../Components/asset/WeatherApp.png'
import { motion } from 'framer-motion';
import ok from '../Components/asset/ok.png'
import {fadeIn} from '../Components/variant'

function Projact() {
  return (
    <>
      <div className=" w-screen h-auto py-[10vh] px-5 sm:px-[10vw] box-border" id='Projects' style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='text-[#289C02] text-4xl'>MY PROJECTS</div>
        {Data.map((t, index) => (
          <motion.div
            whileHover={{ scale: 1.025 }}
            // variants={fadeIn("up",0.2)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{once: false, amount: 0.7}}
            className=" w-[90vw] sm:w-[80vw] md:h-[80vh] flex mt-[10vh] bg-[#706f7520] rounded-xl" key={index}>
            <div className="projact_box_1_left rounded-l-[12px] bg-slate-500 w-1/2 flex items-center justify-center p-6" style={{ backgroundImage: `url(${t.Img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <a href={t.link} target="_blank" rel="noopener noreferrer" className=''>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <img src={t.projectIcon} alt='' className=' w-28 h-28 sm:w-36  sm:h-36' />
                  <p className='text-center text-white text-[1.5rem] sm:text-[2rem]'>{t.Content}</p>
                </div>
              </a>
            </div>
            <div className="projact_box_1_right w-1/2 flex flex-col items-start justify-start  p-4 sm:p-6">
              <h1 className=' text-sm sm:text-xl md:text-3xl xl:text-4xl font-bold '>{t.ProjactTitle}</h1>
              <p className=' text-[0.5rem] sm:text-sm mt-5 md:text-[1rem] lg:text-lg md:mt-10  xl:text-xl xl:mt-20'>{t.WebDescripton}</p>
              <p className=' text-[0.5rem] sm:text-sm mt-3 md:text-[1rem] md:mt-5 lg:text-lg xl:text-xl xl:mt-10'>Link of Web: <a href='' className=' text-blue-500'>{t.WebLink}</a></p>
            </div>
          </motion.div>
        ))}
      </div>

    </>
  );
}

export default Projact;

const Data = [
  {
    Img: left,
    Content: "SK SCHOOL",
    link: 'https://gk-school.netlify.app/Home',
    projectIcon: education,
    ProjactTitle: "Sk-School An Educational websites",
    WebDescripton: "Step into the digital realm of SK School, brought to life on January 25, 2024. Designed with HTML, CSS, JavaScript, and React,adorned with Tailwind CSS for a formal touch. it's a dynamic, fully responsive website featuring carousels, modal boxes, active email contact forms, and animated text, ensuring an engaging user experience.",
    WebLink: "https://gk-school.netlify.app/Home",
  },
  {
    Img: darkNight,
    Content: "NSS IIT'R",
    link: 'https://nss.iitr.ac.in/home',
    projectIcon: NSS,
    ProjactTitle: "National Service Scheme IIT Roorkee",
    WebLink: "https://nss.iitr.ac.in/home",
    WebDescripton: "Explore the official website of NSS IIT Roorkee, crafted with precision on 14 September 2023. Utilizing HTML, CSS, JavaScript, and React framework, adorned with Bootstrap CSS for a formal touch. Meticulously designed on Figma, presenting an esteemed online presence."
  },
  {
    Img: deepBlue,
    Content: "NSS IIT'R",
    link: 'https://socialsummit.iitr.ac.in/',
    projectIcon: Summit,
    ProjactTitle: "National Social Summit IIT Roorkee",
    WebLink: "https://socialsummit.iitr.ac.in/",
    WebDescripton: "Join the National Social Summit'24 at IIT Roorkee's vibrant website, designed with HTML, CSS, and JavaScript, powered by React and enriched with animations and Bootstrap. Explore a platform fostering positive societal transformations with engaging interface crafted on Figma.",
  },
  {
    Img: marineblue,
    Content: "CIG IIT'R",
    link: 'https://cig-web.netlify.app',
    projectIcon: CIG,
    ProjactTitle: "Corporate Interaction Group IIT Roorkee",
    WebLink: "https://cig-web.netlify.app",
    WebDescripton:
      "Discover the official website of CIG IIT Roorkee, established on January 4, 2024. CIG fosters interaction with the corporate sector at IIT Roorkee. Crafted using HTML, CSS, JavaScript, and React, it's fully responsive with an intuitive interface. Featuring carousels, modal boxes, active email contact forms, and animated text.",

  },
  // {
  //   Img: marineblue,
  //   Content: "Weather App",
  //   link: 'https://cig-web.netlify.app',
  //   projectIcon: WeatherApp,
  //   ProjactTitle: "Weather App With A Real Time API",
  //   WebLink: "https://gk-school.netlify.app/Home",
  //   WebDescripton:
  //     "Stay updated with real-time weather information worldwide on this dynamic website. Utilizing real-time API, Node.js, and Express.js for backend, it offers accurate temperature data, alongside current day, date, and time. Crafted with HTML, CSS, JavaScript, React, and Bootstrap, ensuring seamless user experience on any device.",
  // },
];
