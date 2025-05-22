import { useState } from 'react';
import VideoBackground from "./components/VideoBackground";
import CardGallery from "./components/GalleryComp"
import ProjectRock from './components/ProjectRock';
import PromotionsComp from './components/PromotionsComp.tsx';
import SocialsComp from './components/SocialsComp.tsx'
import MobileHero from './components/MobileHero.tsx';
import ProjectRockMobile from './components/ProjectRockMobile.tsx';

function App() {


  return (
    <>
    <section id='hero' className='hidden md:block'>
        <VideoBackground />
      {/* call to action component goes here */}
    </section>

    {/* conditional renfering for mobile version */}
    <section id='mobile-hero' className='block md:hidden'>
        <MobileHero/>
      {/* call to action component goes here */}
    </section>


    <section id='feature'className='padding'>
      <CardGallery/>
    </section>

    <section id='project-rock' className=' hidden md:block'>
      <ProjectRock/>
      {/* Project Rock card goes here */}
    </section>
    
    <section id='project-rock' className=' block md:hidden'>
      <ProjectRockMobile/>
      {/* Project Rock card goes here */}
    </section>


    <section id='promotions' className='padding'>
      <PromotionsComp/>
    </section>
    <section id='socials' className='padding'>
      <SocialsComp/>
    </section>
    </>
  )
}

export default App
