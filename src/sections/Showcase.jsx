import React, { useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);


    useGSAP(()=>{
        gsap.fromTo(sectionRef.current, 
            {
                opacity:0
            },
            {
                opacity: 1,
                duration: 1.5
            }
        );

        const cards = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current];

        cards.forEach((card,index) => {
            gsap.fromTo(
                card,
                {
                    y:50,
                    opacity: 0
                },
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3*(index+1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    },
                },
            )
        })
    },[]);

    return (

        <div id='work' className='app-showcase' ref={sectionRef}>
            <div  className='w-full'>
                <div className='showcaselayout'>
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='project1'/>
                        </div>
                        <div className='text-content'>
                            <h2>PrepWise</h2>
                            <p className='text-white-50 md:text-xl'>Next.js, 
                                Firebase, 
                                Tailwind CSS,
                                Vapi AI, 
                                shadcn/ui, 
                                Google Gemeni, 
                                Zod <br></br> 
                                <span className='text-lg italic text-white'>
                                    Prepwise is a sleek, modern react based platform designed to help users master 
                                    job interview preparation through interactive, AI-powered learning experiences.
                                </span>
                            </p>
                        </div>
                        <div className='image-wrapper mt-10'>
                            <img src='/images/project1.png' alt='project1'/>
                        </div>
                        <div className='text-content'>
                            <h2>Ecolens</h2>
                            <p className='text-white-50 md:text-xl'>
                                React, 
                                Jest, 
                                JUnit, 
                                Docker, 
                                MSW, 
                                Springboot, 
                                MariaDb, 
                                CI/CD, 
                                Recharts and More,
                                <br></br>

                                <span className='text-lg italic text-white'>
                                    Ecolens serves as a water contamination monitoring 
                                    service which allows for active monitoring of contaminents
                                     in water in every logged region of Canada and offers mutliple visualization elements
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png'/>
                            </div>
                            <h2>Zentry Clone</h2>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project3.png'/>
                            </div>
                            <h2>Billiards / 8 ball pool</h2>
                        </div>
                        <div className='project' ref={project4Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project3.png'/>
                            </div>
                            <h2>Portfolio </h2>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Showcase