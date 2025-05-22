import { useState } from 'react';
import VideoBackground from "./components/VideoBackground";
import CardGallery from "./components/GalleryComp"

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
    <section id='about' className='padding'>
      {/* about card goes here */}
    </section>
    <section id='promotions' className='padding'>

    </section>
    <section id='socials' className='padding'>

    </section>
    </>
  )
}

export default App
