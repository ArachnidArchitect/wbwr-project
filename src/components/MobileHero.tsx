import React from "react";
import videoFile from "/assets/Mobile Assets/UA_Theme_1_MB.mp4";

const MobileHero: React.FC = () => {
  return (
    <div>
    <div className=" w-screen h-dvh overflow-hidden flex flex-col">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlayed content */}
    </div>
       <div className="h-[75dvh] flex flex-col justify-evenly  mobile-hero-content gallery-content-mobile">
        <h1  className="text-black text-black font-plak-condensed leading-[1.1]"
            style={{
              fontSize: "clamp(4em, 2vw, 48px)", // 105px at 1920px = 5.47vw
            }}
        >CHECK OUT OUR LATEST GEAR</h1>

        <p
        className="text-black font-plak-regular leading-[1.1]"
            style={{
              fontSize: "clamp(.875rem, 1vw, 14px)", // 105px at 1920px = 5.47vw
            }}
        >Advanced tech, superior comfort and all performance is what our latest UA gear is all about. Built to go further, push hard and break your boundaries.</p>
        <button className="text-white bg-black w-full py-[1em]">Shop UA New Arrivals</button>
    </div>
    </div>
  );
};

export default MobileHero;
