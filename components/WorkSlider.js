import {useRouter} from "next/router";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumbA.png",
          link: "real-estate-web-nextjs-3qo46pg4w-anggaihza.vercel.app",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {BsArrowRight} from "react-icons/bs";
import Image from "next/image";
import {useEffect} from "react";

const WorkSlider = () => {
  const router = useRouter();

  const handleImageClick = (link) => {
    if (!link) {
      return;
    }

    if (!link.includes("://")) {
      link = "https://" + link;
    }

    window.open(link, "_blank");
  };

  useEffect(() => {
    const handleNavigation = (link) => {
      if (!link) {
        return;
      }

      router.push(link);
    };

    document.querySelectorAll(".swiper-slide").forEach((slide) => {
      slide.addEventListener("click", (event) => {
        const clickedImage = event.target.closest("div[data-image-link]");
        if (clickedImage) {
          const link = clickedImage.getAttribute("data-image-link");
          handleImageClick(link);
        } else {
          const slideLink = slide.getAttribute("data-slide-link");
          handleNavigation(slideLink);
        }
      });
    });
  }, [router]);
  return (
    <Swiper
      spaceBetween={10}
      pagination={{clickable: true}}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]">
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} target="_blank" rel="noopener noreferrer">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleImageClick(image.link)}
                    className="relative rounded-lg overflow-hidden flex
                  items-center justify-center group"
                    data-image-link={image.link}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=""
                      />{" "}
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22db] opacity-0
                      group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title 2 */}
                          <div
                            className="translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
