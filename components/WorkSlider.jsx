import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        
        {
          title: "Restaurant Project",
          path: "/restaurant-project.jpg",
          link: "https://github.com/Shreyyyyy/Revolutionizing-Restaurant-Recommendations-using-neural-network",
        },
        {
          title: "Cycle Renting Project",
          path: "/cycle-renting-project.jpg",
          link: "https://github.com/Shreyyyyy/peddle_mobile_app_UG_project",
        },
        {
          title: "Submarine Project",
          path: "/submarine-project.jpg",
          link: "https://github.com/Shreyyyyy/Submarine-Danger-Prediction",
        },  
        {
          title: "Hospital Project",
          path: "/hospital-project.jpg",
          link: "https://github.com/Shreyyyyy/Hospital-Length-of-Stay-Prediction-App-using-XGBoost-and-Streamlit",
        },
        
      ],
    },
    {
      images: [
        
        {
          title: "Live Project",
          path: "/live-project.jpg",
          link: "https://github.com/Shreyyyyy/passco.tech",
        },
        {
          title: "Face Project",
          path: "/face-project.jpg",
          link: "https://github.com/Shreyyyyy/Automated-Attendance-Monitoring",
        },
        {
          title: "MERN Project",
          path: "/mern.jpg",
          link: "https://github.com/Shreyyyyy/MERN",
        },
        {
          title: "Java Game Project",
          path: "/gamejava.jpg",
          link: "https://github.com/Shreyyyyy/game_java",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[500px] sm:h-[550px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={270}
                    height={350}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#000000] to-[#800000] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[30px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">CLICK</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        ME
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
