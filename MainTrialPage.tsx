import Image from "next/image";
import CImg from "./GameEvent.png"
import DCImg from "./Keyboard.jpg"
import auroImg from "./auro1.jpg"
import Starfield from "./component/Starfield";
import RL from "./reactLogo.png"

import Scroll from "./ScrollRevealSection"



const dataV={

  // "frontend":["React.js", "Next.js", "Node.js", "CSS", "HTML","Vis.js", "Flutter"],
  // "backend":["Node.js", "Express.js", "MySQL","Convex"],
  // "Data science and machine learning":[ "NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
  // "Data Visualization": ["Tableau", "Seaborn", "Matplotlib", "Plotly"],
  // "Programming language": ["Python", "JavaScript", "Java", "PHP", "Haskell", "R", "Dart", "C"],
  // "Tools": ["AWS","Git"]


    "Full Stack Development": [
      "React.js", "Next.js", "Node.js", "Express.js", "CSS", "HTML", "Flutter", "Convex"
    ],
    "Data & Visualization": [
      "NumPy", "Pandas", "Scikit-learn", "TensorFlow",
      "Tableau", "Seaborn", "Matplotlib", "Plotly", "Vis.js"
    ],
    "Programming Languages": [
      "Python", "JavaScript", "Java", "PHP", "Haskell", "R", "Dart", "C"
    ],
    "Tools & Platforms": [
      "MySQL", "AWS", "Git"
    ]

  
}

// const dataVal=await data()

// console.log(dataV["frontend"][0]);

export default function Home() {
  return (

    <div className="grid grid-row-1 fit-content ">
      {/* <section className="relative section::before">

        <Image src={CImg} alt="Desc" width={1500} height={300}></Image>

        <h1>THE Possiblity of these</h1>
      </section> */}
<div className="relative h-screen w-full section::before bg-animated-earth ">
      {/* Background Image */}
      {/* <Image 
        src={auroImg} 
        alt="Game Event" 
        fill 
       
        style={{ objectFit: 'cover', opacity:0.2,  background:"black" }} 
      /> */}
      {/* Text Overlay */}
      <div className="absolute flex flex-col inset-0 justify-center items-center ">
        <h1 className="text-5xl font-bold text-white">Hey there. This is <span className=" name">Harigovind R</span> (Hari)</h1>
        <p className="text-white mt-4 text-center"> An explorer at heart - Always learning. Always building.</p>
        <p className="text-white text-center"> From full-stack applications to machine learning experiments, I’m driven by a deep curiosity to understand, build, refine, and deliver meaningful solutions.
          {/* Your subtitle or description goes here.sdhfdhfsfldsjfhsdljfljdfhthellests seeif the text crosses he line iintede to check or if this croses the text speed and goes beyond it
          THEEKJDFKDJFDKFJDKJFDKFJDFJSFKJDLKFJSLFKSLDFKSF
          SKDFJSDKFSLFKasdasdfdfsfdsfsdfsdfsfsdfsdfgjhkghkghkg
          AKDFJALKFJALFKD
          SDLKFJSDLFKJSLFKDJFKJSLDKFJSLKFJSFJSLKFKFSKFJSKFJKFSLKDFSKDJFSKCEJCL FOR TEH ODNFOOF TJE SKDLFSLKFJSKFSLKFSKFKFJSKJFASKDJFKAJFLKJSDFLKJF'SKDFJALKDSJFSLKDFJLSKDFSLKDJFSKLDJFFSKLJSLDKFSKLSKDFJALKDSJFSLKDFJLSKDFSLKDJFSKLDJFAKSDJFLKDSFJAKLDSJFKSDFJFSDLF */}
      </p>
      </div>
    </div>

    {/* <div className="h-screen">
  <section id="about" className="relative z-10 action1 flex flex-row items-center justify-between p-8 "> */}
    {/* Left Section: About Me Content */}
    {/* <div className="ml-8 contentExtra contentCard flex flex-row items-center">
    <div className="flex flex-col w-1/2 ">
      <h1 className="merriweather-regular text-4xl font-bold mb-4">ABOUT ME</h1> */}
      {/* <h2 className="text-xl mb-4">Summary for about me section</h2> */}
      {/* <p className="text-lg mb-4">
I see code as an art, something that evolves incrementally with each bug fixed, feature shipped, and insight gained. 
I am driven by curiosity, whether it's crafting intuitive user interfaces, optimizing backend flows, or unraveling patterns hidden in data. 
My projects span full-stack infrastructure, machine learning algorithms, all unified by a commitment to building intelligent, responsive, and 
continuously improving systems.</p>
<p className="text-lg mb-4">
As a software developer with a Master's degree in Computer Science from DePaul University, Chicago,
I have a strong foundation in web and mobile development, complemented by hands-on experience in data analysis and applied machine learning. 
I approach development with structure and precision, prioritizing clean architecture, scalability, and performance. 
Continuously expanding my skill set through practical exploration, I strive to deliver robust and meaningful solutions.</p>
    </div> */}

    {/* Right Section: Image */}
    {/* <div className=" flex justify-between ml-45">
      <Image
        src={DCImg}
        alt="About Me"
        className="rounded-2xl shadow-lg transition-transform hover:scale-105"
        width={450}
        height={450}
      />
    </div>

    </div> */}





<div className="h-screen  ">

<div className="fixed inset-0 -z-10 pointer-events-none">
  <Starfield />
  </div>
  <main id="about" className="relative z-10 action1 flex flex-col lg:flex-row items-center justify-between p-8 contentExtra contentCard">

    {/* Left Section: About Me Content */}
    <div className="lg:w-3/4 w-full flex flex-col items-start lg:pr-8 ">
      <h1 className="holtwood-one-sc-regular  text-4xl font-bold mt-5 mb-15 text-center">ABOUT ME</h1>
      <p className="text-md mb-6">
        I see code as an art, something that evolves incrementally with each bug fixed, feature shipped, and insight gained.
        I am driven by curiosity, whether it's crafting intuitive user interfaces, optimizing backend flows, or unraveling patterns hidden in data.
        My projects span full-stack infrastructure, machine learning algorithms, all unified by a commitment to building intelligent, responsive, and
        continuously improving systems.
      </p>
      <p className="text-md mb-6">
        As a software developer with a Master's degree in Computer Science from DePaul University, Chicago,
        I have a strong foundation in web and mobile development, complemented by hands-on experience in data analysis and applied machine learning.
        I approach development with structure and precision, prioritizing clean architecture, scalability, and performance.
        Continuously expanding my skill set through practical exploration, I strive to deliver robust and meaningful solutions.
      </p>
    </div>

    {/* Right Section: Image */}
    <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
      <Image
        src={DCImg}
        alt="About Me"
        className="rounded-2xl shadow-lg transition-transform hover:scale-105 object-cover"
        width={450}
        height={450}
      />
    </div>
  </main>
  </div>



  <div className=" ">
  <main className="mb-40">
        <div className="lg:  mx-16 items-start lg:pr-8 ">
        <div className="">
          <h1 className="holtwood-one-sc-regular text-4xl font-bold my-5">WORK <br />EXPERIENCE</h1>
          <div className="ml-40">
            <div className="changa-one-regular text-4xl ml-100">
            {/* <br /> */}
            SOFTWARE DEVELOPER
            </div>

            <br />

            <div className="">
            <p className="text-lg ml-102 mb-6 tomorrow-regular "> AltraDimension Technologies</p>

            <p className="text-md mb-6 ml-102 mr-20">
            Enhanced data accessibility by developing custom React hooks within management system components, leading to a 12% increase in user
            engagement and productivity by streamlining data flow, improving component reusability, and simplifying complex state and logic handling.
            • Improved application efficiency by collaborating with the backend team to integrate AWS server-side logic into React client-side applications.
            • Elevated user satisfaction by 6% by developing targeted features in a cross-platform React Native app enhancing navigation, UI responsiveness
            and performance. Incorporated user feedback and design standards to refine functionality and deliver a seamless and intuitive user experience.
            </p>
            </div>
          </div>

          <div className="ml-40">
            <div className="changa-one-regular text-4xl ml-100">
            <br />
            FULL STACK DEVELOPER
            </div>

            <br />

            <div className="">
            <p className="text-lg mb-6 tomorrow-regular ml-102"> Bharat Electronics Limited</p>

            <p className="text-md mb-6 ml-102 ">
            Developed a web-based network and systems management platform using JavaScript to efficiently monitor, maintain and modify system
            components. Enabled real time updates, enhancing overall operational efficiency, and reducing manual interventions.
            • Utilized vis.js and various complementary frameworks/ libraries, resulting in a measurable 12% improvement in overall system response time</p>
            </div>
          </div>

          <div className="ml-40">
            <div className="changa-one-regular text-4xl ml-100">
            <br />
            VOLUNTEER
            </div>

            <br />

            <div className=" mr-20">
            <p className="text-lg mb-6 tomorrow-regular ml-102"> SHARP NGO</p>

            <p className="text-md mb-6 ml-102">
            Conducted comprehensive educational sessions focused on promoting health awareness and hygiene practices in response to the COVID-19 pandemic. Reached students across more than 150 schools within six months, delivering interactive workshops, practical demonstrations, and accessible learning materials to instill long-term healthy behaviors and preventive measures among young populations.</p>
            </div>
          </div>
          </div>
          
        
        </div>
    
    </main>

    
  {/* <main>
        <div className="lg: flex flex-row mx-16 items-start lg:pr-8 ">
          <h1 className="holtwood-one-sc-regular text-4xl font-bold mt-5 mb-15">ABOUT ME</h1>
          <div className=" grid grid-cols-3 grid-rows-2 border-white w-full">

        {  Object.entries(dataV).map(([ctg,skill],index)=>
        

                <div key={index} className="contentCard card-skillsComp group ">
                  <div className="grid grid-row-3 grid-cols-3">
                  {skill.map((each)=>
                  <div key= {each} className="skillsComp font-bold">
                  {each}  </div>
                )}
                </div>
                </div>
                )
          } 

              </div>
            </div>
      </main> */}


            {/* <div className="contentCard card-skillsComp group grid grid-row-2 grid-cols-6">

            <div className="skillsComp">React.js            </div> 
            <Image src={RL} alt="" width={40} height={40}/>
            <div className="skillsComp">Next.js            </div> 
            <Image src={RL} alt="" width={40} height={40}/>
            <div className="skillsComp">Node.js            </div> 
            <Image src={RL} alt="" width={40} height={40}/>
            <div className="skillsComp">CSS           </div> 
            <Image src={RL} alt="" width={40} height={40}/>
            <div className="skillsComp">HTML           </div> 
            <Image src={RL} alt="" width={40} height={40}/>
            <div className="skillsComp">Vis.js            </div> 
            <Image src={RL} alt="" width={40} height={40}/>
            <div className="skillsComp">Flutter           </div> 
            <Image src={RL} alt="" width={40} height={40}/> */}
            {/* Next.js, Node.js, CSS, HTML, Vis.js, Flutter */}
            {/* </div> */}
            {/* <div className=" absolute inset-0 bg-opacity-90 opacity-0 group-hover:opacity-100">
              Check

            </div> */}

            {/* </div> */}


          

    </div>
              <br />
  <div className="h-screen ">
  <main>

          <div className=" lg: my-[5%] flex flex-row mx-16 items-start lg:pr-8 ">
          <h1 className="holtwood-one-sc-regular text-4xl font-bold mt-5 mb-15">SKILLS</h1>
          <div className=" grid grid-cols-2 grid-row-2  border-white w-full justify-around bg-red        ">

          {/* <div className=" bg-[#124b50] card-skillsComp contentCard "> */}

          {  Object.entries(dataV).map(([ctg,skill],index)=>
        

        <div key={index} className="contentCard card-skillsComp group">
          <div className="grid grid-row-3 grid-cols-3">
          {skill.map((each)=>
          <div key= {each} className="skillsComp font-bold">
          {each}  </div>
        )}
        </div>
        </div>
        )
  }


          {/* </div> */}

        
                        </div>
            </div>



        {/* <div className="lg: my-[5%] flex flex-row mx-16 items-start lg:pr-8 ">
          <h1 className="holtwood-one-sc-regular text-4xl font-bold mt-5 mb-15">ABOUT ME</h1>
          <div className=" grid grid-cols-2  border-white w-full justify-around">

        {  Object.entries(dataV).map(([ctg,skill],index)=>
        

                <div key={index} className="contentCard card-skillsComp group ">
                  <div className="grid grid-row-3 grid-cols-3">
                  {skill.map((each)=>
                  <div key= {each} className="skillsComp font-bold">
                  {each}  </div>
                )}
                </div>
                </div>
                )
          }
                        </div>
            </div> */}
            
      </main>

  
  </div>

  <div className="my-[7%]">
  <main>
        <div className="lg:  mx-16 items-start lg:pr-8 ">
          <h1 className="holtwood-one-sc-regular text-4xl font-bold mt-5 mb-15">PROJECTS</h1>
          <div className="mt-[5%]">
            <div className="changa-one-regular text-4xl ml-[30%]">
            {/* <br /> */}
            Predicting Customer Conversion for Bank Marketing Campaigns
            </div>

            <br />

            <div className="">

            <p className="text-md mb-6 ml-[30%] mr-20">
            • In order to predict customer conversion in a telemarketing campaign for a  bank, I created a machine learning pipeline for this project. • Using more than 41,000 client records with personal, financial, and campaign-related information in the dataset. • The goal was to predict whether a client would sign up for a term deposit, following a marketing call. • I used SMOTE (Synthetic Minority Over-sampling Technique) to balance the dataset in order to address the highly unbalanced target variable. This enhanced the model's capacity to identify instances of minority classes. • This greatly enhanced generalization on unseen data and prevented biased predictions. Using both Random Forest and Logistic Regression, I built and compared models, assessing them using important performance metrics such as accuracy, ROC AUC, precision, recall, and F1-score. • Surprisingly, Logistic Regression gave better ROC AUC scores in some cases, highlighting its ranking ability, while Random Forest showed higher precision and recall post-resampling.

          This project demonstrates my ability to build end-to-end prediction pipelines, handle imbalanced classification problems, and model interpretability to extract meaningful business insights—a critical skill set for any data-driven career.</p>
            </div>
          </div>

          <div className="mt-[5%]">
            <div className="changa-one-regular text-4xl ml-[30%]">
            {/* <br /> */}
            Student Support Platform
            </div>

            <br />

            <div className="">

            <p className="text-md mb-6 ml-[30%] mr-20">
          • Built dynamic and responsive user-facing pages using Next.js and Tailwind CSS, integrating AI powered chat feature for personalization and
        recommendations. Improving load performance and enhancing user interactivity by 43% through optimized rendering and efficient styling.
        • Implemented a scalable, modular architecture using React and custom hooks, significantly improving code maintainability and state
        management. Enabled faster development cycles, easier feature updates and enhanced reusability across the application.
        • Integrated frontend with a real time convex database by using reactive data subscriptions, enabling automatic UI updates without manual API
        calls. This ensured seamless data flow, reduced latency, and provided users with a consistently updated and responsive interface experience.</p></div>
          </div>



          <div className="mt-[5%]">
            <div className="changa-one-regular text-4xl ml-[30%]">
            {/* <br /> */}
            Virtual Instructor to Monitor Movement Based Activities using Deep CNNs
            </div>

            <br />

            <div className="">

            <p className="text-md mb-6 ml-[30%] mr-20">
            • Built a cross platform mobile application using Flutter to provide real time guidance, correction and monitoring of user performed physical
              activities. Enabled interactive fitness sessions with live visual and haptic feedback, improving user experience, accuracy, and consistency.
              • Implemented accurate activity recognition using a Deep Convolutional Neural Network with TensorFlow, enabling accurate classification of
              physical movements. Improved performance analysis and real time feedback accuracy, supporting personalized user insights.
              • Enhanced user engagement and safety by implementing a real time feedback mechanism, resulting in 38% increase in user interaction. Enabled
              immediate movement correction and performance improvement, contributing to a more responsive fitness experience
                  </p>
                </div>
          </div>


        
        </div>
    
    </main>
  

  </div>





{/* <div className="">
<Scroll/>
  </div> */}

<main className="h-[100vh] bg-white">
{/* <div className=" left-[-10%] z-10 h-[15%] w-[110%] rounded-b-[100%]  bg-black"> */}

<div className=" absolute left-[-10%] z-10 h-[15%] w-[110%] rounded-b-[25%] shadow-[0_50px_50px_0px_rgba(0,0,0,0.7)] bg-[#292929]">


</div>
{/* </div> */}
      {/* <h1 className="text-5xl font-bold mb-10 text-center">Scroll down 👇</h1>
      <p className="text-lg max-w-2xl mx-auto text-center mb-20">
        As you scroll toward the bottom, the footer will begin to rise up and fade in.
      </p> */}
      
      {/* Add filler content for scroll */}
      {/* <div className="h-[150vh]" /> */}

      {/* Footer Reveal */}
      <Scroll />
    </main>













    </div>
  
  );
}
