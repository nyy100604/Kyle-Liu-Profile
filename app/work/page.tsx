"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// icons
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

// components
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "幼兒STEM師培認證系統開發",
    description:
      "開發和維護幼兒STEM師培認證系統，提供證書查詢、瀏覽、創建和上傳功能。使用區塊鏈技術與撰寫智能合約並確保證書的不可轉移性和安全性，幫助家長了解老師的實力和資質，增強教育透明度和信任度。",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Shadcn" },
      { name: "Framer-motion" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Hardhat" },
      { name: "Solidity" },
      { name: "Ethers.js" },
      { name: "ERC-1155" },
    ],
    image: "/work/work1-desktop.png",
    live: "https://early-childhood-stem-teacher-training-certification-system.vercel.app/",
    github:
      "https://github.com/nyy100604/Early-Childhood-STEM-Teacher-Training-Certification-System",
  },
  {
    num: "02",
    category: "fullstack",
    title: "溫度保險理賠",
    description:
      "開發基於區塊鏈的保險項目，使用ERC20標準的ntdToken作為交易資金、使用ERC1167標準製造保險合約。模擬Oracle機制，當達到一定溫度時進行自動理賠，強調農夫在理賠過程中的自主權和透明性，確保理賠過程高效且公正。",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Shadcn" },
      { name: "Framer-motion" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Hardhat" },
      { name: "Solidity" },
      { name: "Ethers.js" },
      { name: "ERC-20" },
      { name: "ERC-1167" },
    ],
    image: "/work/work2-desktop.png",
    live: "https://temperature-insurance.vercel.app",
    github: "https://github.com/nyy100604/temperature-Insurance",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const [api, setApi] = useState<CarouselApi>();
  console.log("project", project);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // console.log(api.selectedScrollSnap());
      setProject(projects[api.selectedScrollSnap()]);
    });
  }, [api]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container  mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] xl:items-center">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2
                className=" text-[42px] font-bold leading-none text-white
          group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="w-full">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent inline">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    {" "}
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    {" "}
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* youtube
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    {" "}
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaYoutube className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Video introduction</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] xl:pt-14">
            <Carousel
              className="flex flex-col relative items-center"
              setApi={setApi}
            >
              <CarouselContent>
                <CarouselItem>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/OP0Wdt7YDf8?si=lP5TT3GJl7EEcy-_"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-[50vh] rounded-2xl"
                  ></iframe>
                </CarouselItem>
                <CarouselItem>
                  <iframe
                    src="https://www.youtube.com/embed/vJzGyiE6t2w?si=HeKFmC3p90tzrvDM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-[50vh] rounded-2xl"
                  ></iframe>
                </CarouselItem>
              </CarouselContent>
              <div className="absolute -bottom-8">
                {" "}
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
