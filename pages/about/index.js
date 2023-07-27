import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaSass,
  FaJs,
  FaReact,
  FaStackOverflow,
  FaCode,
  FaDatabase,
  FaGit,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobelightroom,
} from "react-icons/si";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaNodeJs />,
          <SiNextdotjs />,
          <FaWordpress />,
          <FaSass />,
          <FaDatabase />,
          <FaCode />,
          <FaStackOverflow />,
          <FaGit />,
        ],
      },
      {
        title: "Design & Video",
        icons: [
          <FaFigma />,
          <SiAdobeillustrator />,
          <SiAdobephotoshop />,
          <SiAdobepremierepro />,
          <SiAdobelightroom />,
        ],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  // {
  //   title: "experience",
  //   info: [
  //     {
  //       id: 1,
  //       title: "UX/UI Designer - XYZ Company",
  //       stage: "2012 - 2023",
  //     },
  //     {
  //       id: 2,
  //       title: "Web Developer - ABC Agency",
  //       stage: "2010 - 2012",
  //     },
  //     {
  //       id: 3,
  //       title: "Intern - DEF Corporation",
  //       stage: "2008 - 2010",
  //     },
  //   ],
  // },
  {
    title: "credentials",
    info: [
      {
        id: 1,
        title: "Full Stack Web Development - Purwadhika Digital School & Technology",
        stage: "2023",
      },
      {
        id: 2,
        title: "Junior Web Programming (Work in Tech Indonesia) - RubicWeb Inco Academy",
        stage: "2022",
      },
      {
        id: 3,
        title: "IT Support - Coursera",
        stage: "2021",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden absolute z-10 xl:flex max-w-[607px w-full h-full -bottom-15 -left-[330px]">
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
            className="h2">
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] hidden md:flex mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            {/* 10 year ago, I began freelancing as a developer. Since then I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and costumer use. */}
            Passionate technologist driven by creativity and innovation.
            Crafting impactful digital experiences with a collaborative
            approach.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden z-50 md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 gap-3">
              {/* experience */}
              {/* <div
                className="relative after:w-[1px] after:h-full after:bg-white/10 
            after:top-0 
            ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year of experience
                </div>
              </div> */}
              {/* projects */}
              {/* <div
                className="relative after:w-[1px] after:h-full after:bg-white/10 
            after:top-0
            ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index == itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8
                  after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
          xl:items-start 
          ">
            {aboutData[index].info.map((item, innerIndex) => {
              const isExperienceOrCredentials =
                item.title === "experience" || item.title === "credentials";
              return (
                <div
                  key={innerIndex}
                  className="flex-1 max-w-max gap-y-2 text-white/60">
                  {isExperienceOrCredentials ? (
                    <div className="flex md:flex-row">
                      {/* title */}
                      <div className="font-light mb-2 md:mb-0">
                        {item.title}
                      </div>
                      <div className="hidden md:flex">-</div>
                      <div>{item.stage}</div>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      {/* title */}
                      <div>{item.stage}</div>
                      <div className="font-light mb-2">{item.title}</div>
                    </div>
                  )}

                  {/* icons */}
                  <div className="flex flex-wrap gap-x-4">
                    {item.icons?.map((icon, itemIndex) => (
                      <div key={itemIndex} className="text-2xl text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
