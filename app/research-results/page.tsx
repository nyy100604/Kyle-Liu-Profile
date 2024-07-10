"use client";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "期刊著作",
    description:
      "Hsiao, H. S., & Liu, W. C. (2022). The Implementation of the Learning Token System for Open Educational Resources based on Blockchain Smart Contracts. Current Trends in Computer Sciences & Applications, 2(2), 186-189. doi.org/10.32474/CTCSA.2022.02.000133",
    href: "https://drive.google.com/file/d/1Cu9PoFt7vtX63rzi-9XGLse5Z5QztMpE/view?usp=sharing",
  },
  {
    num: "02",
    title: "學術論著（研討會）",
    description:
      "蕭顯勝、劉威成（2021年12月）。基於區塊鏈與智能合約建置個人學習歷程整合系統。跨疫情的教與學：思維創新與實踐革新」研究生學術精進研討會，國立臺灣師範大學，台灣台北。",
    href: "https://drive.google.com/file/d/18KWet_Pg7bTTmdYrPyvFON5E4rqrZQv3/view?usp=sharing",
  },
  {
    num: "03",
    title: "學術論著（研討會）",
    description:
      "蕭顯勝、劉威成（2023年3月）。發展數位密室逃脫遊戲結合開放徽章之專題導向實作活動。台灣數位學習發展研討會（TWELF2023），台灣屏東。",
    href: "https://drive.google.com/file/d/1ybcg9an-tJpWXVm76LfrQktjibD3ZSfc/view?usp=sharing",
  },
  {
    num: "04",
    title: "碩士論文",
    description:
      "劉威成. (2023). 數位遊戲結合 NFT 融入專題導向實作活動對學生基本心理需求, 學習動機, 學習表現及學習行為之影響.",
    href: "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22111NTNU5036015%22.&searchmode=basic",
  },
];

const Services = () => {
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

export default Services;
