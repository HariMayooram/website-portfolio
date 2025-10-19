"use client";
import Head from "./head";
import Image from "next/image";
// import CImg from "./GameEvent.png";

// import DCImg from "./Hari.jpg";
import DCImg from "./HariHG.jpg";
// import auroImg from "./auro1.jpg";
import Starfield from "./component/Starfield";
// import RL from "./reactLogo.png";

import Scroll from "./ScrollRevealSection";
// import { div } from "framer-motion/client";

import { motion } from "framer-motion";

import SkillsCard  from "./skillsCard";
import gitH from "./github.png";


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

// const dataV = {
//   "Full Stack Development": [
//     "React.js",
//     "Next.js",
//     "Node.js",
//     "Express.js",
//     "CSS",
//     "HTML",
//     "Flutter",
//     "Convex",
//     "Redux",
//     "React Native",
//     "Firebase",
//   ],
//   "Data & Visualization": [
//     "NumPy",
//     "Pandas",
//     "Scikit-learn",
//     "TensorFlow",
//     "Tableau",
//     "Seaborn",
//     "Matplotlib",
//     "Plotly",

//   ],
//   "Programming Languages": [
//     "Python",
//     "JavaScript",
//     "Scala",
//     "Java",
//     "PHP",
//     "TypeScript",
//     "Haskell",
//     "R",
//     "Dart",
//     "C",
//     "SQL"
//   ],
//   "Tools & Platforms": ["MySQL", "AWS", "Git","Docker", "Vis.js","Bitbucket",
//     "Tailwind CSS",  "Framer Motion "]
// };



export default function Home() {
  return (
    <div className=" ubuntu-regular">
      <Head />
      <div className="w-full bg-animated-earth h-screen relative flex items-center">
        {/* Text Overlay */}
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
          <div className="flex flex-col max-w-4xl mx-auto text-center justify-center">
            <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Hey there. This is
              <br />
              <span className="name">Harigovind Rajagopal</span> (Hari)
            </h1>
            <p className="text-white mt-6 text-base sm:text-lg md:text-xl break-words leading-relaxed">
              An explorer at heart – Always learning. Always building.
            </p>
            <p className="text-white mt-4 text-base sm:text-lg md:text-xl break-words leading-relaxed">
              From full-stack applications to machine-learning experiments, I'm
              driven by a deep curiosity to understand, build, refine, and
              deliver meaningful solutions.
            </p>
            <button className="mx-auto mt-8 sm:mt-10 px-8 py-4 bg-[#124b50] hover:bg-[#69dbebbe] tomorrow-extrabold text-white rounded font-bold text-base sm:text-lg transition-colors duration-300">
              <a href="mailto:harigov.raj@gmail.com">HIRE ME</a>
            </button>
          </div>
        </div>
      </div>

      <div className="h-screen w-full flex items-center justify-center">
      <div id="about" className="w-full">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Starfield />
        </div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sideRevealVariant}
          className="flex items-center justify-center py-12"
        >
          <main className="relative z-10 flex flex-col items-center justify-center contentCard w-[95%] sm:w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="w-full flex flex-col items-start p-4 sm:p-6 lg:p-8">
              <h1 className="holtwood-one-sc-regular text-3xl sm:text-4xl font-bold mb-6 text-center w-full">
                ABOUT ME
              </h1>
              {/* Right Section: Image */}
              <div className="flex flex-col sm:flex-row w-full mb-6 gap-4 sm:gap-6">
                <div className="w-full sm:w-1/2 md:w-2/5 flex items-center justify-center sm:justify-start">
                  <Image
                    src={DCImg}
                    alt="About Me"
                    className="rounded-2xl shadow-lg transition-transform hover:scale-105 object-cover w-full max-w-[280px] sm:max-w-none sm:w-full h-auto"
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-3/5 flex items-center tomorrow-regular text-sm sm:text-base leading-relaxed text-center sm:text-left name">
                  3+ YOE  |  Software Engineer  |  ML / AI Enthusiast  |  Healthcare Insurance FinTech  |  Photography Tyro
                </div>
              </div>
              {/* Left Section: About Me Content */}

              <p className="text-sm sm:text-base leading-relaxed mb-4">{`
                I see code as an art, something that evolves incrementally with
                each bug fixed, feature shipped, and insight gained. I am driven
                by curiosity, whether it's crafting intuitive user interfaces,
                optimizing backend flows, or unraveling patterns hidden in data.
                My projects span full-stack infrastructure, machine learning
                algorithms, all unified by a commitment to building intelligent,
                responsive, and continuously improving systems.
                `}
                </p>
              <p className="text-sm sm:text-base leading-relaxed mb-4">{`
                As a software developer with a Master's degree in Computer
                Science from`}
                <span className="name"> DePaul University, Chicago. </span>
                {`I have a strong foundation in web and mobile development,
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
      </div>

      <div className="min-h-screen">
        <main className="py-12 sm:py-16">
          <div className="mt-12 sm:mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-16">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={sideRevealVariant}
              className=""
            >
              <div className="lg:flex lg:gap-8">
                <h1 className="lg:sticky lg:top-8 lg:w-1/4 holtwood-one-sc-regular text-3xl sm:text-4xl font-bold my-6 sm:my-8 lg:h-fit">
                <span className="backdrop-blur-[10px] rounded lg:mx-2 inline-block px-2 py-1">
                  WORK<br />
                  EXPERIENCE
                </span>
                </h1>
                <div className="lg:w-3/4">
                  <div className="changa-one-regular text-2xl sm:text-3xl md:text-4xl break-words">
                    SOFTWARE ENGINEER
                  </div>

                  <br />

                  <div className="">
                    <p className="text-base sm:text-lg mb-4 sm:mb-6 tomorrow-regular">
                     Unum
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed mb-6">
                      • Developed secure, scalable backend systems for Commercial Lines insurance (property, auto compensation) using
Node.js, Express.js, and Python (Flask/ FastAPI) leveraged MongoDB and MySQL for transactional policy and claims
data, enabling robust querying and analytics.
• Automated claims and policy workflows for Coastal Insurance and high-risk categories by integrating RESTful APIs with
underwriting modules; implemented role-based access control and encrypted data exchange for sensitive risk
evaluations.
• Led deployment of insurance modules for Critical Illness, Accident, and Group Life products in Agile Scrum teams;
contributed to sprint planning, performed code reviews, and handled unit tests using Jest and PyTest for release
readiness.
• Engineered GitHub Actions and Docker based CI/CD pipelines for insurance product releases (Disability, Life, Dental,
Vision) maintained AWS cloud hosting and container orchestration for zero-downtime updates.
• Optimized performance of reporting/quoting systems for Commercial Property and Business Interruption Coverage
using backend caching, query optimization, and data migration scripts; reduced report latency by 30%.
• Developed dashboard analytics and risk profile visualization tools utilizing React.js and Chart.js, enabling business
users to monitor claims trends, loss ratios, and policy performance metrics for strategic decision-making across
multiple insurance product lines.
• Performed rigorous integration and regression testing for compliance across marine, flood, and liability insurance lines
built and maintained automated test suites (JUnit, Selenium), ensuring backend systems met all financial and
insurance regulatory standards.
                    </p>
                  </div>

                  <div className="changa-one-regular text-2xl sm:text-3xl md:text-4xl break-words mt-12">
                    SOFTWARE DEVELOPER
                  </div>

                  <br />

                  <div className="">
                    <p className="text-base sm:text-lg mb-4 sm:mb-6 tomorrow-regular">
                      Apex Infolab
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed mb-6">
                      • Designed and launched responsive healthcare web portals for patient bookings, EHR access, and appointment
workflows using React.js, Node.js, Express.js, and MySQL implemented Redux state management and RESTful
APIs for scalable user interactions.
• Collaborated directly with healthcare clients to refine requirements and engineered custom modules for lab test
scheduling, patient record search, and secure medical data exchange; followed Waterfall methodology with
structured sprints and milestone tracking.
• Implemented real-time notification and messaging system using Socket.io and WebSocket, allowing physicians and
patients to receive instant updates for appointment confirmations, medical report uploads, and emergency alerts
within the healthcare portal.
• Developed and maintained robust RESTful APIs for integration between hospital systems and third-party healthcare
solutions; enforced OAuth2 authentication, JWT tokens, and data encryption for compliant patient privacy and data
integrity.
• Upgraded UI/UX for health professional workflows with Material UI, responsive design, and cross-browser/device
testing using Selenium and BrowserStack improved navigation and speed for diverse user bases.
• Optimized medical record databases by leveraging SQL query tuning, stored procedures, and building automated
daily backup scripts; maintained high-availability architectures on AWS cloud instances.
                    </p>
                  </div>
                </div>

                {/* <div className="lg:ml-40">
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
                </div> */}
              </div>
            </motion.section>
          </div>
        </main>
      </div>
      <br />

      <div className="min-h-screen px-4 sm:px-6 my-12 sm:my-16 md:my-20">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sideRevealVariant}
          className=""
        >
          <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16">
            <div className="lg:flex lg:gap-8">
              <h1 className="lg:sticky lg:top-8 lg:w-1/4 holtwood-one-sc-regular text-3xl sm:text-4xl font-bold mt-6 mb-10 sm:mb-12 lg:h-fit">
                <span className="backdrop-blur-sm rounded px-2 py-1 inline-block">
                  SKILLS
                </span>
              </h1>

              <div className="lg:w-3/4">
                <SkillsCard />
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <div className="min-h-screen py-12 sm:py-16 md:py-20">
        <main>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={modSideRevealVariant}
            className=""
          >
            <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16">
              <div className="lg:flex lg:gap-8">
                <h1 className="lg:sticky lg:top-8 lg:w-1/4 holtwood-one-sc-regular text-3xl sm:text-4xl font-bold mt-6 mb-10 sm:mb-12 lg:h-fit">
                  <span className="backdrop-blur-sm rounded px-2 py-1 inline-block">
                    PROJECTS
                  </span>
                </h1>

                <div className="lg:w-3/4 space-y-12 sm:space-y-16">
                <div>
                  <div className="changa-one-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <span className="leading-tight">AskMeStock : A financial stock assistant powered by AI</span>
                      <a href="https://github.com/HariMayooram/AI-stock-chat" className="flex-shrink-0">
                        <Image
                          alt="github"
                          className="h-7 w-7 sm:h-8 sm:w-8 hover:scale-125 hover:shadow-lg transition-transform"
                          src={gitH}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl italic">
                    In Progress
                  </div>

                  <br />

                  <div className="">
                    <p className="text-sm sm:text-base leading-relaxed mb-6">
                    {`
                     • Majority of financial tools today require some basic understanding of finance from the user. 
                     • The smartstock ai assistant bridges this gap by eliminating the need for technical jargon, allowing the users to access stock related information easily.  
                     • Using the latest advancements in  LLMs, I built the backend of SmartStock AI with LangChain.js, integrating large language models through OpenRouter.  
                     • The system is designed to interpret user queries and intelligently route them using agents. I used a model wrapper, allowing the LLM to act as a reasoning engine that understands and processes the user input.  
                     • Additionally, I made use of DynamicStructuredTool to allow the LLM to dynamically call a tool that resolves any company name into its official stock ticker and metadata. This tool is schema validated using Zod, which ensures more reliability.
                     • The application is built on a full stack setup using Next.js App Router. The backend logic is handled through API routes that communicate with LangChain agents. This separation of concerns makes the app easy to maintain, deploy, and scale.  
                     • Future plans for the project includes integrating real-time stock APIs, enabling the chat memory for conversational history and implementing RAG based document chat from any kind of financial PDFs. In addition to this, LangSmith will be used for tracing and debugging.
                    `}
                  </p>
                </div>
              </div>

              <div>
                  <div className="changa-one-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <span className="leading-tight">Predicting Customer Conversion for Bank Marketing Campaigns</span>
                      <a href="https://github.com/HariMayooram?tab=repositories" className="flex-shrink-0">
                        <Image
                          alt="github"
                          className="h-7 w-7 sm:h-8 sm:w-8 hover:scale-125 hover:shadow-lg transition-transform"
                          src={gitH}
                        />
                      </a>
                    </div>
                  </div>

                  <br />

                  <div className="">
                    <p className="text-sm sm:text-base leading-relaxed mb-6">
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

              <div>
                  <div className="changa-one-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words leading-tight">
                    Student Support Platform
                  </div>

                  <br />

                  <div className="">
                    <p className="text-sm sm:text-base leading-relaxed mb-6">
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

              <div>
                  <div className="changa-one-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words leading-tight">
                    Virtual Instructor to Monitor Movement Based Activities using
                    Deep CNNs
                  </div>

                  <br />

                  <div className="">
                    <p className="text-sm sm:text-base leading-relaxed mb-6">
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
              </div>
            </div>
          </motion.section>
        </main>
      </div>

      <main className="relative h-screen bg-white">
        <div className="absolute left-[-10%] z-10 h-[15%] w-[110%] rounded-b-[25%] shadow-[0_50px_50px_0px_rgba(0,0,0,0.7)] bg-animated-black"></div>
        <Scroll />
      </main>
    </div>
  );
}
