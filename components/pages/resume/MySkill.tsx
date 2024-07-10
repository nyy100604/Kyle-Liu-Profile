import React from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
} from "react-icons/si";
import { SiSolidity, SiShadcnui, SiFramer, SiExpress } from "react-icons/si";

//   components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// skill
const skill = {
  title: "我的技能",
  description: "以程式語言、前端技術、後端技術與區塊鏈介紹",
  skillList: {
    language: [
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <SiTypescript />,
        name: "Typescript",
      },
    ],
    frontend: [
      {
        icon: <FaHtml5 />,
        name: "Html 5",
      },
      {
        icon: <FaCss3 />,
        name: "Css 3",
      },
      {
        icon: <FaReact />,
        name: "React.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind.css",
      },
      {
        icon: <SiShadcnui />,
        name: "Shadcnui",
      },
      {
        icon: <SiFramer />,
        name: "Framer-motion",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
      },
    ],
    backend: [
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <SiMongodb />,
        name: "Mongodb",
      },
      {
        icon: <SiExpress />,
        name: "Express",
      },
      {
        icon: <SiMongodb />,
        name: "Mongodb",
      },
      {
        icon: <FaDocker />,
        name: "Docker",
      },
    ],
    blockchain: [
      {
        icon: <SiSolidity />,
        name: "Solidity",
      },
    ],
  },
};

const MySkill = () => {
  return (
    <div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{skill.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-xl">
            {skill.description}
          </p>
        </div>
        {/* language */}
        <div>
          <h1 className="pb-4 text-xl font-bold">程式語言</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
            {skill.skillList.language.map((item, index) => {
              return (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize"> {item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </div>
        {/* frontend */}
        <div>
          <h1 className="pb-4 text-xl font-bold">前端技術</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
            {skill.skillList.frontend.map((item, index) => {
              return (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize"> {item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </div>
        {/* backend */}
        <div>
          <h1 className="pb-4 text-xl font-bold">後端技術</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
            {skill.skillList.backend.map((item, index) => {
              return (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize"> {item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </div>
        {/* blockchain */}
        <div>
          <h1 className="pb-4 text-xl font-bold">區塊鏈</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
            {skill.skillList.blockchain.map((item, index) => {
              return (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize"> {item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
