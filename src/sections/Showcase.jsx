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

        const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

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
                            <h2>write project description</h2>
                            <p className='text-white-50 md:text-xl'>write some description</p>
                        </div>
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png'/>
                            </div>
                            <h2>Second project</h2>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project3.png'/>
                            </div>
                            <h2>Second project</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Showcase