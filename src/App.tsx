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


    <section id='feature'>
      <CardGallery/>
    </section>
    <section id='about'>

    </section>
    <section id='promotions'>

    </section>
    <section id='socials'>

    </section>
    </>
  )
}

export default App
