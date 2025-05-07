"use client";
import Head from "./head";
import Image from "next/image";
// import CImg from "./GameEvent.png";

import DCImg from "./Hari.jpg";
// import auroImg from "./auro1.jpg";
import Starfield from "./component/Starfield";
// import RL from "./reactLogo.png";

import Scroll from "./ScrollRevealSection";
// import { div } from "framer-motion/client";

import { motion } from "framer-motion";


const sideRevealVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};
const modSideRevealVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const dataV = {
  "Full Stack Development": [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "CSS",
    "HTML",
    "Flutter",
    "Convex",
  ],
  "Data & Visualization": [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "TensorFlow",
    "Tableau",
    "Seaborn",
    "Matplotlib",
    "Plotly",
    "Vis.js",
  ],
  "Programming Languages": [
    "Python",
    "JavaScript",
    "Java",
    "PHP",
    "Haskell",
    "R",
    "Dart",
    "C",
  ],
  "Tools & Platforms": ["MySQL", "AWS", "Git"],
};

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Head />
      <div className="w-full bg-animated-earth min-h-[80vh] sm:min-h-[70vh] lg:min-h-[100vh] relative overflow-hidden ">
        {/* Text Overlay */}
        <div className="absolute inset-0 grid lg:place-items-center px-4 sm:px-8 ">
          <div className="flex flex-col max-w-xl text-center justify-center ">
            <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight break-words">
              Hey there. This is{" "}
              <span className="name break-words">Harigovind R</span> (Hari)
            </h1>
            <p className="text-white mt-4 text-sm sm:text-base md:text-lg break-words">
              An explorer at heart – Always learning. Always building.
            </p>
            <p className="text-white mt-2 text-sm sm:text-base md:text-lg break-words">
              From full-stack applications to machine-learning experiments, I’m
              driven by a deep curiosity to understand, build, refine, and
              deliver meaningful solutions.
            </p>
            <button className="mx-auto mt-[8%] p-6 px-6 py-4 bg-[#124b50] hover:bg-[#69dbebbe] tomorrow-extrabold text-white rounded font-bold text-lg ">
              <a href="mailto:harigov.raj@gmail.com">HIRE ME</a>{" "}
            </button>
          </div>
        </div>
      </div>

      <div id="about" className="   ">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Starfield />
        </div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sideRevealVariant}
          className=""
        >
          <main className="!mt-[10%] relative z-10 flex flex-col lg:flex-col items-center justify-between lg:p-2 contentCard w-[97%] sm:w-3/4 lg:w-1/2">
            <div className="lg: w-full h-1/2 flex flex-col items-start lg:p-7 ">
              <h1 className="holtwood-one-sc-regular  text-4xl font-bold mt-[3%] mb-[5%] lg:mt-[1%] lg:mb-[1%] text-center w-full">
                ABOUT ME
              </h1>
              {/* Right Section: Image */}
              <div className="flex flex-row w-full mb-[3%] ">
                <div className="lg: w-2/3 items-end flex">
                  <Image
                    src={DCImg}
                    alt="About Me"
                    className=" rounded-2xl shadow-lg transition-transform hover:scale-125 object-cover w-[50%] h-[80%] md:ml-10"
                  />
                </div>
                <div className="lg: w-1/3 items-end flex tomorrow-regular">
                  Software Developer | ML / AI appreciator | Photography tyro |
                  Bioinformatics and FinTech novice
                </div>
              </div>
              {/* Left Section: About Me Content */}

              <p className="text-md mb-[2%]">{`
                I see code as an art, something that evolves incrementally with
                each bug fixed, feature shipped, and insight gained. I am driven
                by curiosity, whether it's crafting intuitive user interfaces,
                optimizing backend flows, or unraveling patterns hidden in data.
                My projects span full-stack infrastructure, machine learning
                algorithms, all unified by a commitment to building intelligent,
                responsive, and continuously improving systems.
                `}
                </p>
              <p className="text-md mb-[2%]">{`
                As a software developer with a Master's degree in Computer
                Science from{" "}
                <span className="name"> DePaul University, Chicago. </span>I
                have a strong foundation in web and mobile development,
                complemented by hands-on experience in data analysis and applied
                machine learning. I approach development with structure and
                precision, prioritizing clean architecture, scalability, and
                performance. Continuously expanding my skill set through
                practical exploration, I strive to deliver robust and meaningful
                solutions.
              `}
              </p>
            </div>
          </main>
        </motion.section>
      </div>

      <div className=" ">
        <main className="my-20 lg:mt-40">
          <div className="mt-20 mx-16 items-start lg:pr-8 ">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={sideRevealVariant}
              className=""
            >
              <div className="">
                <h1 className="sticky top-0 holtwood-one-sc-regular text-4xl font-bold my-5">
                  WORK <br />
                  EXPERIENCE
                </h1>
                <div className="lg:ml-40">
                  <div className="changa-one-regular text-4xl lg:ml-100 overflow-hidden">
                    {/* <br /> */}
                    SOFTWARE DEVELOPER
                  </div>

                  <br />

                  <div className="">
                    <p className="text-lg lg:ml-102 mb-6 tomorrow-regular ">
                      {" "}
                      AltraDimension Technologies
                    </p>

                    <p className="text-md mb-6 lg:ml-102 lg:mr-20">
                      Enhanced data accessibility by developing custom React
                      hooks within management system components, leading to a
                      12% increase in user engagement and productivity by
                      streamlining data flow, improving component reusability,
                      and simplifying complex state and logic handling. •
                      Improved application efficiency by collaborating with the
                      backend team to integrate AWS server-side logic into React
                      client-side applications. • Elevated user satisfaction by
                      6% by developing targeted features in a cross-platform
                      React Native app enhancing navigation, UI responsiveness
                      and performance. Incorporated user feedback and design
                      standards to refine functionality and deliver a seamless
                      and intuitive user experience.
                    </p>
                  </div>
                </div>

                <div className="lg:ml-40">
                  <div className="changa-one-regular text-4xl lg:ml-100">
                    <br />
                    FULL STACK DEVELOPER
                  </div>

                  <br />

                  <div className="">
                    <p className="text-lg mb-6 tomorrow-regular lg:ml-102">
                      {" "}
                      Bharat Electronics Limited
                    </p>

                    <p className="text-md mb-6 lg:ml-102 ">
                      Developed a web-based network and systems management
                      platform using JavaScript to efficiently monitor, maintain
                      and modify system components. Enabled real time updates,
                      enhancing overall operational efficiency, and reducing
                      manual interventions. • Utilized vis.js and various
                      complementary frameworks/ libraries, resulting in a
                      measurable 12% improvement in overall system response time
                    </p>
                  </div>
                </div>

                <div className="lg:ml-40">
                  <div className="changa-one-regular text-4xl lg:ml-100">
                    <br />
                    VOLUNTEER
                  </div>

                  <br />

                  <div className=" lg:mr-20">
                    <p className="text-lg mb-6 tomorrow-regular lg:ml-102">
                      {" "}
                      SHARP NGO
                    </p>

                    <p className="text-md mb-6 lg:ml-102">
                      Conducted comprehensive educational sessions focused on
                      promoting health awareness and hygiene practices in
                      response to the COVID-19 pandemic. Reached students across
                      more than 150 schools within six months, delivering
                      interactive workshops, practical demonstrations, and
                      accessible learning materials to instill long-term healthy
                      behaviors and preventive measures among young populations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
      <br />

      <div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sideRevealVariant}
          className=""
        >
          <div className="my-20 ">
            <main className="h-[80vh]">
              <div className=" flex flex-col lg:flex-row md:mx-16 items-start lg:pr-8 ">
                <h1 className="holtwood-one-sc-regular text-4xl font-bold mt-5 mb-15 mx-10 sm:mx-0">
                  SKILLS
                </h1>
                <div className=" grid grid-cols-1  border-white w-full justify-center bg-red    lg:ml-[20%] lg:mt-30    ">
                  <div className=" card-skillsComp group md:max-w-[80%]">
                    {Object.entries(dataV).map((ctg, index) => (
                      <div key={index} className="grid grid-cols-5 md:place-items-center">
                        {ctg[1].map((skill) => (
                          <div key={index} className="skillsComp font-bold ">
                            {skill}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.section>
      </div>

      <div className="my-20">
        <main>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={modSideRevealVariant}
            className=""
          >
            <div className="lg:  mx-16 items-start lg:pr-8 ">
              <h1 className="holtwood-one-sc-regular text-4xl font-bold mt-5 mb-15">
                PROJECTS
              </h1>
              <div className="">
                <div className="changa-one-regular text-4xl lg:ml-[30%]">
                  Predicting Customer Conversion for Bank Marketing Campaigns
                </div>

                <br />

                <div className="">
                  <p className="text-md mb-6 lg:ml-[30%] lg:mr-20">
                    {`
                    • In order to predict customer conversion in a telemarketing
                    campaign for a bank, I created a machine learning pipeline
                    for this project. • Using more than 41,000 client records
                    with personal, financial, and campaign-related information
                    in the dataset. • The goal was to predict whether a client
                    would sign up for a term deposit, following a marketing
                    call. • I used SMOTE (Synthetic Minority Over-sampling
                    Technique) to balance the dataset in order to address the
                    highly unbalanced target variable. This enhanced the model's
                    capacity to identify instances of minority classes. • This
                    greatly enhanced generalization on unseen data and prevented
                    biased predictions. Using both Random Forest and Logistic
                    Regression, I built and compared models, assessing them
                    using important performance metrics such as accuracy, ROC
                    AUC, precision, recall, and F1-score. • Surprisingly,
                    Logistic Regression gave better ROC AUC scores in some
                    cases, highlighting its ranking ability, while Random Forest
                    showed higher precision and recall post-resampling. This
                    project demonstrates my ability to build end-to-end
                    prediction pipelines, handle imbalanced classification
                    problems, and model interpretability to extract meaningful
                    business insights—a critical skill set for any data-driven
                    career.
                    `}
                  </p>
                </div>
              </div>

              <div className="mt-[2%]">
                <div className="changa-one-regular text-4xl lg:ml-[30%]">
                  Student Support Platform
                </div>

                <br />

                <div className="">
                  <p className="text-md mb-6 lg:ml-[30%] lg:mr-20">
                    • Built dynamic and responsive user-facing pages using
                    Next.js and Tailwind CSS, integrating AI powered chat
                    feature for personalization and recommendations. Improving
                    load performance and enhancing user interactivity by 43%
                    through optimized rendering and efficient styling. •
                    Implemented a scalable, modular architecture using React and
                    custom hooks, significantly improving code maintainability
                    and state management. Enabled faster development cycles,
                    easier feature updates and enhanced reusability across the
                    application. • Integrated frontend with a real time convex
                    database by using reactive data subscriptions, enabling
                    automatic UI updates without manual API calls. This ensured
                    seamless data flow, reduced latency, and provided users with
                    a consistently updated and responsive interface experience.
                  </p>
                </div>
              </div>

              <div className="mt-[2%]">
                <div className="changa-one-regular text-4xl lg:ml-[30%]">
                  Virtual Instructor to Monitor Movement Based Activities using
                  Deep CNNs
                </div>

                <br />

                <div className="">
                  <p className="text-md mb-6 lg:ml-[30%] lg:mr-20">
                    • Built a cross platform mobile application using Flutter to
                    provide real time guidance, correction and monitoring of
                    user performed physical activities. Enabled interactive
                    fitness sessions with live visual and haptic feedback,
                    improving user experience, accuracy, and consistency. •
                    Implemented accurate activity recognition using a Deep
                    Convolutional Neural Network with TensorFlow, enabling
                    accurate classification of physical movements. Improved
                    performance analysis and real time feedback accuracy,
                    supporting personalized user insights. • Enhanced user
                    engagement and safety by implementing a real time feedback
                    mechanism, resulting in 38% increase in user interaction.
                    Enabled immediate movement correction and performance
                    improvement, contributing to a more responsive fitness
                    experience
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>

      <main className=" relative h-[110vh] bg-white">
        <div className=" absolute left-[-10%] z-10 h-[15%] w-[110%] rounded-b-[25%] shadow-[0_50px_50px_0px_rgba(0,0,0,0.7)] bg-animated-black"></div>
        <Scroll />
      </main>
    </div>
  );
}
