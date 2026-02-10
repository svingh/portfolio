import React from 'react'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import NavBar from './Components/NavBar'
import SoftSkills from './sections/SoftSkills'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Showcase/>
            <SoftSkills/>
            <Experience/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App