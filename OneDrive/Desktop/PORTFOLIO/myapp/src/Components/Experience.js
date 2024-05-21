import React, { useState } from "react";
import ok from '../Components/asset/ok.png'
import management from '../Components/asset/management.svg'


const items = [
    {
        id: 1, name: "Frontend", category: "Category A", description: " As a web development executive at CIG, IARC, and NSS groups of IIT Roorkee, I've shaped our digital presence by crafting our official websites. Collaborating closely with my team, we've fostered creativity and innovation, overcoming challenges and celebrating successes together. Beyond coding, my role entails understanding each group's ethos and objectives, translating them into dynamic online experiences. This collaborative environment has facilitated my growth, refining both technical and interpersonal skills. Each project iteration deepens my understanding of frameworks, languages, and design principles. My contributions extend beyond technical expertise, embodying our mission of disseminating knowledge and fostering community. With each website launch, I've not only showcased my skills but also advanced our organizations."
    },
    { id: 2, name: "Backend", category: "Category B", description: 'Embark on my backend odyssey across two vibrant hackathons, where creativity knew no bounds. In the realm of gaming, I spearheaded the development of " Ice and Water," a captivating 3D multiplayer experience, leveraging C# within Unity for seamless integration.Transitioning to education, my team and I pioneered an online coaching hub, revolutionizing learning through dynamic features like live classes and interactive tests.Furthermore, I engineered a live weather application, empowering users worldwide to access real-time temperature data with ease.Throughout these ventures, my prowess in backend development shone, cementing my legacy as an adaptable technologist capable of transforming ideas into tangible innovations.' },
    { id: 3, name: "Management", category: "Category C", description: "In my management journey, I've orchestrated numerous college events, including the renowned 'Cognizance,' Asia's second-largest tech fest, showcasing my organizational prowess and attention to detail. Additionally, I contributed to the success of the prestigious 'National Social Summit' at IIT Roorkee, demonstrating my ability to handle diverse responsibilities with poise and efficiency. Furthermore, my involvement in 'IIT Roorkee's Cam Day' underscored my commitment to fostering community engagement and meaningful experiences. Throughout these endeavors, I led with a strategic mindset, coordinating logistics, managing teams, and ensuring seamless execution, leaving an indelible mark on each event's success." },
    { id: 4, name: "Marketing", category: "Category D", description: "With experience spanning across both academic and extracurricular realms, I bring a dynamic blend of portfolio marketing skills honed through roles at 'Cognizance', our college's tech fest, and as a marketing volunteer for the National Service Scheme (NSS). At 'Cognizance', I collaborated with diverse teams to strategize and execute marketing campaigns, leveraging innovative approaches to enhance event visibility and engagement. My tenure with NSS further fortified my ability to communicate effectively, tailor messaging to target audiences, and manage promotional activities efficiently. Through these experiences, I've cultivated a keen understanding of the nuances of portfolio marketing, adeptly navigating between organizational objectives and audience needs to drive impactful outcomes." },
];
function Experience() {
    const [selectedCategory, setSelectedCategory] = useState("Category A");

    const filterItems = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory
        ? items.filter((item) => item.category === selectedCategory)
        : items;
    return (
        <>
            <div className="w-screen  py-[5vh] px-[2.5vw] sm:px-[5vw] md:py-[10vh]  md:px-[10vw]" id="Experience" style={{ backgroundImage: `url(${ok})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className=' text-center mb-5 text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-700'>My Experience</h1>
                <div className=" w-full h-full px-2 py-10 sm:p-10 xl:p-20">
                    <div className=" w-full h-[10%] bg-transparent flex  flex-col items-center justify-center">
                        <div class="flex flex-wrap rounded-md shadow-sm" role="group">
                            <button type="button" class="flex items-center px-2 py-1 gap-1 text-[0.5rem] sm:text-xs md:text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                onClick={() => filterItems("Category A")}>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                                frontend
                            </button>
                            <button type="button" class="flex items-center px-2 py-1 gap-1 text-[0.5rem] sm:text-xs md:text-sm font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                onClick={() => filterItems("Category B")}>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                                </svg>
                                backend
                            </button>
                            <button type="button" class="flex items-center px-2 py-1 gap-1 text-[0.5rem] sm:text-xs md:text-sm font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                onClick={() => filterItems("Category C")}>
                                <img src={management} class="w-3 h-3" />
                                management
                            </button>
                            <button type="button" class="flex items-center px-2 py-1 gap-1 text-[0.5rem] sm:text-xs md:text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                onClick={() => filterItems("Category D")}>
                                <svg fill="#ffffff" class="w-3 h-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.5 7c-1.381 0-2.5 1.12-2.5 2.5 0 0.284 0.058 0.551 0.144 0.805l-6.094 5.247c-0.427-0.341-0.961-0.553-1.55-0.553-0.68 0-1.294 0.273-1.744 0.713l-4.774-2.39c-0.093-1.296-1.162-2.323-2.482-2.323-1.38 0-2.5 1.12-2.5 2.5 0 0.378 0.09 0.732 0.24 1.053l-4.867 5.612c-0.273-0.102-0.564-0.166-0.873-0.166-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5 0-0.332-0.068-0.649-0.186-0.939l4.946-5.685c0.236 0.073 0.48 0.124 0.74 0.124 0.727 0 1.377-0.316 1.834-0.813l4.669 2.341c0.017 1.367 1.127 2.471 2.497 2.471 1.381 0 2.5-1.119 2.5-2.5 0-0.044-0.011-0.086-0.013-0.13l6.503-5.587c0.309 0.137 0.649 0.216 1.01 0.216 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z"></path>
                                </svg>
                                marketing
                            </button>
                        </div>

                        {filteredItems.map((item) => (
                            <div key={item.id} className=" mt-5  h-[90%] w-[100%]">
                                <div className=" w-full">
                                    <p className="font-bold text-green-500 text-4xl text-center ">{item.name}</p>
                                    <p className=" mt-5 text-[0.5rem] sm:text-sm lg:text-lg  text-center " >{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
