import React from "react";

const ProjectRock: React.FC = () => {
  return (
        <div id="project-rock-comp" className="w-full aspect-[258/100] bg-cover bg-center flex justify-end items-end ">
            <div className="flex flex-col w-1/4 h-11/12 justify-evenly mr-12">
            <h3 className="text-white font-plak-bold text-16px">Project Rock</h3>
            <h2 className="text-white font-plak-condensed text-[64px] leading-none">EVERY SIDE OF STRONG</h2>
            <p className="text-white font-plak-regular text-[14px]">The Underground collection is inspired by the idea of a Project Rock fight club. A place where we push each other harder to make each other stronger. A drop dedicated to you and your crew. The neon colourways are a reflection of the energy we bring to every rep, every set and every challenge.  </p>

            <button className=" text-white font-plak-regular border-solid border-1 border-light-blue-500 p-3 ">Shop Project Rock</button>

            </div>
        </div>

      );
};

export default ProjectRock;
