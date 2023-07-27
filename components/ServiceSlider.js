import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import {FreeMode, Pagination} from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Empowering Your Business with Custom High-Performance Website Development.",
  },

  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Transforming visions into stunning digital experiences with artistic expertise.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Inspiring content that engages, connects, and drives meaningful interactions.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Boosting visibility, driving traffic, reaching your target audience effectively.",
  },
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Connecting your brand with customers through thoughtfully crafted identities.",
  },
];

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{clickable: true}}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]">
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65, 47, 123, 0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group 
            cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icons */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                {" "}
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
