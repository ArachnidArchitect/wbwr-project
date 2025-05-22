import { useState } from 'react';
import VideoBackground from "./components/VideoBackground";
import CardGallery from "./components/GalleryComp"
import ProjectRock from './components/ProjectRock';
import PromotionsComp from './components/PromotionsComp.tsx';

function App() {


  return (
    <>
    <section id='hero'>
        <VideoBackground />
      {/* call to action component goes here */}
    </section>


    <section id='feature'className='padding'>
      <CardGallery/>
    </section>
    <section id='project-rock' className='padding'>
      <ProjectRock/>
      {/* Project Rock card goes here */}
    </section>
    <section id='promotions' className='padding'>
      <PromotionsComp/>
    </section>
    <section id='socials' className='padding'>

    </section>
    </>
  )
}

export default App
