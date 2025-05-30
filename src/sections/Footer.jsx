import React from 'react'
import { socialImgs } from '../Constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <span>
                        Alumni UofG@2025
                    </span>
                </div>
                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a
                        className='icon'
                        target='_blank'
                        href={img.url}
                        key={img.url}
                        rel="noopener noreferrer"
                        >
                        <img
                            src={img.imgPath}
                            alt="social icon"
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                        </a>
                    ))}
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>
                    © Vikramjeet Singh
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer