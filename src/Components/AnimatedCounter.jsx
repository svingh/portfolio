import React from 'react'
import { counterItems } from '../Constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
    return (
        <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
            <div className='max-auto grid-3-cols'>
                {counterItems.map((item) => (
                    <div className='flex flex-col justify-center bg-zinc-900 rounded-lg p-10 '>
                        <div key={counterItems.label} className='counter-number 
                        text-white text-5xl font-bold mb-2'>
                        <CountUp suffix={item.suffix} end={item.value}/>
                        </div>
                        <div className='text-white-50 text-lg'>{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter