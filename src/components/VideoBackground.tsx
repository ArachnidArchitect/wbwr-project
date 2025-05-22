import React from "react";
import videoFile from "/assets/Desktop Assets/UA_Theme_1_DT.mp4";

const VideoBackground: React.FC = () => {
  return (
    <div className="relative aspect-[2560/1000] overflow-hidden flex justify-end">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlayed content */}
      <div className="relative z-10 flex items-center  h-full w-1/2  px-[5vw]">
        <div className="max-w-[50%] space-y-[1.2vw] pl-4">
          <h1
            className="text-black font-plak-condensed leading-[1.1]"
            style={{
              fontSize: "clamp(2rem, 5.47vw, 105px)", // 105px at 1920px = 5.47vw
            }}
          >
            CHECK<br></br> OUT OUR<br></br> LATEST<br></br> GEAR
          </h1>

       <p
  className="font-plak-regular text-black"
  style={{
    fontSize: "clamp(.75em, 1vw, 12px)",
    lineHeight: "1",
  }}
>
  Advanced tech, superior comfort and all performance is what our
  latest UA gear is all about. Built to go further, push hard and
  break your boundaries.
</p>

          <button
            className="font-plak-regular bg-black text-white"
            style={{
              fontSize: "clamp(0.875em, .75vw, 14px)",
              padding: " 1em 0",
              width: "100%",
            }}
          >
            Shop UA New Arrivals
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
