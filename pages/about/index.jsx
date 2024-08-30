import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaAws, 
  FaPython, 
  FaDatabase, 
  FaRProject,
  FaAndroid, 
  FaApple
} from 'react-icons/fa';
import {
  SiNextdotjs, 
  SiMongodb, 
  SiTensorflow, 
  SiPandas, 
  SiFlutter
} from 'react-icons/si';
import {
  DiNodejs
} from 'react-icons/di';

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Full Stack Development",
        icons: [
          FaHtml5,      // HTML5
          FaCss3,       // CSS3
          FaJs,         // JavaScript
          FaReact,      // React.js
          SiNextdotjs,  // Next.js
          DiNodejs,     // Node.js
          SiMongodb,    // MongoDB
          FaAws,        // AWS
        ],
      },
      {
        title: "Machine Learning & Data Analysis",
        icons: [
          FaPython,     // Python
          SiTensorflow, // TensorFlow
          FaDatabase,   // SQL databases
          SiPandas,     // Pandas
          FaRProject,   // R
        ],
      },
      {
        title: "Mobile Application Development",
        icons: [
          FaAndroid,    // Android Development
          FaApple,      // iOS Development
          SiFlutter,    // Flutter
        ],
      },
    ],
  },
  
  {
    title: "awards",
    info: [
      {
        title: "First Runner Up - Hackathon",
        stage: "NIT Pondicherry - Gyanith 2023",
      },
      {
        title: "Judge for an App Development Competetion",
        stage: "CHRIST (Deemed to be University)- Gamecraft 2024",
      }
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Inventory Management Web App",
        stage: "Jun 2024 - Jul 2024",
      },
      {
        title: "Project Lead - Submarine Danger Prediction",
        stage: "May 2024 - Jun 2024",
      },
      {
        title: "Developer - Face Recognition Python Project",
        stage: "Sept 2023 - Feb 2024",
      },
      {
        title: "App Developer - Peddle Mobile App",
        stage: "Aug 2022 - Feb 2023",
      },
    ],
  },
  
  {
    title: "credentials",
    info: [
      {
        title: "Master of Computer Applications",
        stage: "CHRIST (Deemed to be University), 2023 - Present",
      },
      {
        title: "Bachelor of Computer Applications",
        stage: "VIT Vellore, 2020 - 2023",
      },
      {
        title: "Class 12th (Commerce with Maths)",
        stage: "Presidium School, Indirapuram, 2019 - 2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"  
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-[-385px] -left-[400px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Lets <span className="text-accent">Code</span> the
            Future Projects
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As a recent graduate stepping into the world of technology, I am keen to dive into new challenges, learn from real-world projects, and collaborate on digital solutions that make a difference. I am passionate about harnessing my skills to innovate, contribute, and grow within the industry.

          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Project Building.
                </div>
              </div>

              {/* repo */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Github Repositories.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={2} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certificates.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={2} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Tools and Frameworks.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
