"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import SkillStack from "@/components/pages/resume/SkillStack";
import MySkill from "@/components/pages/resume/MySkill";

// about data
const about = {
  title: "關於我",
  description: [
    {
      title: "教育背景",
      desc: "大家好，我是劉威成，畢業於國立台灣師範大學科技系碩士。在研究所至第一份工作期間，我積累了豐富的網站製作經驗，也發表過多篇區塊鏈與教育結合的相關研究。我的碩論也是區塊鏈相關的主題，這些經驗培養了我的研究能力和解決問題的能力。",
    },
    {
      title: "技術專長",
      desc: "我熟悉區塊鏈的相關應用，如使用Hardhat框架進行NFT智能合約的撰寫。因此，構建一個Dapp網站對我來說並不困難。我對程式設計有著極大的熱情，享受解決複雜問題的過程以及看到自己的代碼變成實際應用時的成就感。",
    },
    {
      title: "前端開發熱情",
      desc: "我相信寫程式是一門藝術，每一行代碼都應該被精心設計和優化。我對前端開發尤其熱衷，喜歡使用Next.js來處理CSR和SSR，並構建動態且高效的用戶界面，並關注用戶體驗和介面設計的細節。",
    },
    {
      title: "興趣與靈感來源",
      desc: "寫程式已經成為我生活的一部分，但我的生活不僅僅是編碼，畫畫和運動也是我的興趣所在。我認為這些興趣不僅豐富了我的生活，也給了我更多的靈感和創意。",
    },
  ],

  info: [
    {
      fieldName: "姓名",
      fieldValue: "劉威成",
    },
    {
      fieldName: "電話號碼",
      fieldValue: "0968387954",
    },
    {
      fieldName: "國家",
      fieldValue: "台灣",
    },
    {
      fieldName: "電子郵件",
      fieldValue: "nyy100604@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "工作經驗",
  description: "以下為我的工作經驗",
  items: [
    {
      company: "國立台灣師範大學",
      position: "全端工程師",
      duration: "2023/7 - 2023/12",
      desc: {
        duty: "主要職責：幼兒STEM師培認證系統開發",
        task1: {
          title: "網站規劃與程式撰寫：",
          desc: "全面負責整個系統的規劃與開發，主要功能包括證書查詢、證書上傳、證書創建及老師基本資料的填寫。",
        },
        task2: {
          title: "技術堆疊：",
        },
      },
    },
  ],
};

// education data
const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "學歷",
  description: "以下為我的最高學歷。",
  items: [
    {
      school: "國立台灣師範大學",
      degree: "科技所 碩士",
      duration: "2021 - 2023",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="text-xl flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">工作經驗</TabsTrigger>
            <TabsTrigger value="education">最高學歷</TabsTrigger>
            <TabsTrigger value="skills">工作技能</TabsTrigger>
            <TabsTrigger value="aboutMe">關於我</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 text-xl mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <div className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col
                          items-start gap-1l"
                        >
                          <div className="flex flex-col lg:flex-row">
                            {" "}
                            <div className="text-3xl font-bold text-accent ">
                              {item.company}
                              <span className="text-white hidden lg:inline">
                                ，
                              </span>
                            </div>
                            <div className="text-lg lg:text-3xl text-start">
                              {" "}
                              {item.duration}
                            </div>
                          </div>

                          <div className="w-full overflow-x-scroll no-scrollbar">
                            {" "}
                            <div className="min-w-[800px]">
                              <h3 className="text-2xl max-w-[500px] text-justify py-4 font-medium">
                                {item.desc.duty}
                              </h3>
                              {/* work intro */}
                              <div className="text-justify">
                                <div className="pb-4">
                                  <h1 className="font-semibold text-xl">
                                    1. {item.desc.task1.title}
                                  </h1>
                                  <div className="py-2 font-thin indent-8">
                                    {item.desc.task1.desc}
                                  </div>
                                </div>
                                {/* skill stack */}
                                <div>
                                  <h1 className="font-semibold text-xl">
                                    2. {item.desc.task2.title}
                                  </h1>
                                  <SkillStack />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 text-xl mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1"
                        >
                          <span className="text-accent text-3xl font-bold">
                            {item.duration}
                          </span>
                          <h3
                            className="text-2xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left pt-4"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-xl">
                              {item.school}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full ">
              <MySkill />
            </TabsContent>
            {/* about */}
            <TabsContent
              value="aboutMe"
              className="w-full  text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description.map((item, index) => {
                    return (
                      <div key={index}>
                        <h1 className="text-white font-bold">{item.title}</h1>
                        <p className="text-justify">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

          <div></div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
