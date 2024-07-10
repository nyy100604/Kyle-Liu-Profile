import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Homepage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto group">
        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-x-12
        lg:pt-10 lg:pb-10"
        >
          {" "}
          {/* text */}
          <div className="text-center lg:text-left order-2 lg:order-none space-y-12">
            <div>
              {" "}
              <span className="text-2xl font-semibold">
                Software Developer
              </span>{" "}
              <h1 className="h1 mb-6">
                Hello I'm <br /> <span className="text-accent">Kyle Liu</span>
              </h1>
            </div>

            <p className="max-w-[500px] text-justify mb-9 text-white/80 text-[1.2rem]">
              大家好，我是劉威成，畢業於國立台灣師範大學科技系碩士。一名熱愛學習和挑戰的工程師，擅長
              <span
                className="group-hover:text-accent
                 duration-200"
              >
                前後端
              </span>
              和
              <span
                className="group-hover:text-accent
                 duration-200"
              >
                區塊鏈技術
              </span>
              的開發。我對寫程式充滿熱情，喜歡探索新技術並將其應用於實際項目中。希望能在充滿創新和技術進步的環境中工作，構建高效、安全且創新的應用和系統。
            </p>
            {/* btn and social */}
            <div className="flex justify-center items-center gap-x-8 pb-10 lg:pb-0">
              {" "}
              <Link href="https://drive.google.com/file/d/1PRpfz6y3PMnoIW9iL7QQgkak-lUqD1II/view?usp=sharing">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="box-border order-1 lg:order-none ">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
