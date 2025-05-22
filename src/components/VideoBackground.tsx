import React from "react";
import videoFile from "/assets/Desktop Assets/UA_Theme_1_DT.mp4"; // Add your video to `src/assets/`

const VideoBackground: React.FC = () => {
  return (
    <div className="relative w-screen h-auto overflow-hidden pb-[2em]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-screen h-full object-cover z-[-1] overflow-hidden"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex items-center justify-end h-full overflow-hidden ">
        <div className="w-5/12">
        <div className="w-6/12">
            <h1 className="text-black font-plak-condensed ">
            CHECK OUT OUR LATEST GEAR
            </h1>
            <p className="font-plak-regular text-xs py-6">Advanced tech, superior comfort and all performance is what our latest UA gear is all about. Built to go further, push hard and break your boundaries.</p>
            <button className="font-plak-regular bg-black text-white w-full px-[2em] py-[1em]">Shop UA New Arrivals</button>

        </div>
        
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
