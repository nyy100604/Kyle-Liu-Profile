"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { animate, delay, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "獎學金",
    description: "國立台灣師範大學科技系碩士班一年級研究生獎學金",
    href: "https://drive.google.com/file/d/1hA0YjmN_CyeOZqs3eq2RlGucKoAMV1wX/view?usp=sharing",
  },
  {
    num: "02",
    title: "獎學金",
    description: "國立台灣師範大學科技系碩士班二年級研究生獎學金",
    href: "https://drive.google.com/file/d/1UWTw0HKwhmT1tOCSquoHsoKTHNppGMuq/view?usp=sharing",
  },
  {
    num: "03",
    title: "獎學金",
    description: "獲得113年度國家科學及技術委員博士生研究獎學金",
    href: "https://drive.google.com/file/d/1yE1lSHFSVM01BosQlVbciFNQWTkcqzZa/view?usp=sharingg",
  },
];

const Rewwards = () => {
  return (
    <section className="min-h-[80vh] flex justify-center py-12 xl:py-0">
      <div className="max-w-[900px] mx-auto mt-4">
        <div className="grid grid-cols-1 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all
              duration-500"
                  >
                    {service.num}
                  </div>
                  <a
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center 
                items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </a>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 w-full sm:w-[700px] lg:w-[900px]">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rewwards;
