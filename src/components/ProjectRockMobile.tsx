import React from "react";

const ProjectRock: React.FC = () => {
  return (
    <div className="flex flex-col">

        <div id="project-rock-comp-mobile" className="w-full bg-cover bg-center  h-dvh ">
            {/* image for mobile on the background in styles */}
        </div>

         <div className="flex flex-col w-full h-[75dvh] justify-around gallery-content-mobile">
            <h3 className="text-black font-plak-bold text-16px" style={{
              fontSize: "clamp(.875em, 1vw, 16px)"
            }}
            >Project Rock</h3>

            <h2 className="text-black font-plak-condensed text-[64px] leading-none"
            style={{
              fontSize: "clamp(4em, 1vw, 64px)", // 105px at 1920px = 5.47vw
            }}>EVERY SIDE<br></br> OF STRONG</h2>

            <p className="text-black font-plak-regular text-[14px]"
            style={{
              fontSize: "clamp(.75em, 1vw, 14px)", // 105px at 1920px = 5.47vw
            }}>The Underground collection is inspired by the idea of a Project Rock fight club. A place where we push each other harder to make each other stronger. A drop dedicated to you and your crew. The neon colourways are a reflection of the energy we bring to every rep, every set and every challenge.  </p>

            <button className=" text-white bg-black font-plak-regular border-solid border-1 border-light-blue-500 p-3 second-button"
            style={{
              fontSize: "clamp(.75em, 1vw, 14px)", // 105px at 1920px = 5.47vw
            }}>Shop Project Rock</button>

            </div>
            </div>

      );
};

export default ProjectRock;
