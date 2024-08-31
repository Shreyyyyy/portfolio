import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "segar.png",
    name: "Chandrasegar T", // Replace with actual client's name
    position: "VIT Vellore - Associate Professor", // e.g., "Project Manager"
    message:
      "This project was a game-changer for our operations. The innovative approach and attention to detail provided by Shreyans made a significant impact on our productivity and client satisfaction.",
  },
  {
    image: "/pafrimala.png",
    name: "Parimala M", // Replace with actual client's name
    position: "VIT Vellore - Associate Professor", // e.g., "CEO"
    message:
      "The delivery of the project exceeded our expectations. Shreyans's ability to tackle complex problems and deliver practical solutions was outstanding. Highly recommend for any critical projects!",
  },
  {
    image: "/neha.png",
    name: "Neha Singhal", // Replace with actual client's name
    position: "Christ - Associate Professor", // e.g., "CTO"
    message:
      "I was impressed with the professionalism and the quality of work that Shreyans provided. The project was delivered on time, within budget, and with excellent results.",
  },

  {
    image: "/surabhi.jpg",
    name: "Surabhi Saxena", // Replace with actual client's name
    position: "Christ - Associate Professor", // e.g., "CTO"
    message:
      "He is a very hardworking student, till i saw him, he does his best to submit work on/before time",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
