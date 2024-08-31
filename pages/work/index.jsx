import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I have led and delivered a range of impactful technology projects across diverse domains. My work emphasizes innovation and practicality, focusing on enhancing operational efficiencies through robust full-stack development and pioneering predictive models in safety applications.
              
              My portfolio includes advanced applications in:
              
              Restaurant Recommendation using Neural Networks
              Developing a system that utilizes machine learning algorithms to provide personalized restaurant recommendations based on user preferences and past dining experiences.
              
              Hospital Length of Stay Prediction
              Creating a predictive model that forecasts the expected length of stay for patients in a hospital setting, enabling better resource allocation and improved patient outcomes.
              
              Automated Attendance Monitoring
              Implementing a system that automates the process of tracking employee attendance, reducing manual effort and ensuring accurate record-keeping.
              
              Peddle Mobile App
              Designing and developing a mobile application that promotes sustainable transportation by providing users with a platform to rent bicycles and track their rides, contributing to a greener environment.
              These projects reflect my commitment to using technology to solve real-world problems and create meaningful impacts.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
