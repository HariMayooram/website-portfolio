

// NEWERRRRRRR
import Image from "next/image";
import CImg from "./GameEvent.png"
import DCImg from "./Keyboard.jpg"
import auroImg from "./auro1.jpg"
import Starfield from "./component/Starfield";
import RL from "./reactLogo.png"

const dataV={

  "frontend":["React.js", "Next.js", "Node.js", "CSS", "HTML","Vis.js", "Flutter"],
  "backend":["Node.js", "Express.js", "MySQL","Convex"],
  "Data science and machine learning":[ "NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
  "Data Visualization": ["Tableau", "Seaborn", "Matplotlib", "Plotly"],
  "Programming language": ["Python", "JavaScript", "Java", "PHP", "Haskell", "R", "Dart", "C"],
  "Tools": ["AWS","Git"]

}

// const dataVal=await data()

console.log(dataV["frontend"][0]);

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



  <div className="h-screen  ">
  <main>
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
            </div>
      </main>
    </div>

  <div className="h-screen">
  
  
  </div>















    {/* <div className="h-screen">

<section id ="about" className="relative z-10 action1 flex flex-row p-8">
  <div className="flex flex-col">

      <h1 className="merriweather-regular text-3xl">ABOUT ME</h1>
      <h2>Summary for about me section</h2> */}
{/* //           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li> */}
{/* //         </ul> */}
{/* </div> */}
{/* </section>
</div> */}
    </div>
    // {
//     // [20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
//     <div className="grid grid-rows">
//       {/* <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      
//        <section className=" grid grid-row grid-cols gap-8 ">
//       <div className="section section::before"> 
//       <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           </ul>
//           </div>
//         {/* <Image
//           className="dark"
//           src={Img}
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         /> */}
//         {/* </div> */}
//         {/* </section> */}

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

// </section>
//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center sm:text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">
//               Get started by editing{" "}
//               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//                 src/app/page.tsx
//               </code>
//               .
//             </p>
//           </li>
//           <li>
//             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
//           </li>
//         </ul>

//       {/* </div> */}
      
//       {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//           <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         /> 
//         <ul>
//           <li>
//             <h1 className="text-3xl font-bold text-center :text-right">
//               Hey There
//             </h1>
//           </li>
//           <li>

//           </li>
//         </ul>
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>


//       </main> */}
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
//       </footer>
//     </div>
// }
  );
}









// OLDERRRRRRRRRRRRR



// import Image from "next/image";
// import CImg from "./GameEvent.png"
// import DCImg from "./Keyboard.jpg"
// import auroImg from "./auro1.jpg"
// import Starfield from "./component/Starfield";
// import RL from "./reactLogo.png"


// export default function Home() {
//   return (

//     <div className="grid grid-row-1 fit-content ">
//       {/* <section className="relative section::before">

//         <Image src={CImg} alt="Desc" width={1500} height={300}></Image>

//         <h1>THE Possiblity of these</h1>
//       </section> */}
// <div className="relative h-screen w-full section::before bg-animated-earth ">
//       {/* Background Image */}
//       {/* <Image 
//         src={auroImg} 
//         alt="Game Event" 
//         fill 
       
//         style={{ objectFit: 'cover', opacity:0.2,  background:"black" }} 
//       /> */}
//       {/* Text Overlay */}
//       <div className="absolute flex flex-col inset-0 justify-center items-center ">
//         <h1 className="text-5xl font-bold text-white">Hey there. This is <span className=" name">Harigovind R</span> (Hari)</h1>
//         <p className="text-white mt-4 text-center"> An explorer at heart - Always learning. Always building.</p>
//         <p className="text-white text-center"> From full-stack applications to machine learning experiments, I’m driven by a deep curiosity to understand, build, refine, and deliver meaningful solutions.
//           {/* Your subtitle or description goes here.sdhfdhfsfldsjfhsdljfljdfhthellests seeif the text crosses he line iintede to check or if this croses the text speed and goes beyond it
//           THEEKJDFKDJFDKFJDKJFDKFJDFJSFKJDLKFJSLFKSLDFKSF
//           SKDFJSDKFSLFKasdasdfdfsfdsfsdfsdfsfsdfsdfgjhkghkghkg
//           AKDFJALKFJALFKD
//           SDLKFJSDLFKJSLFKDJFKJSLDKFJSLKFJSFJSLKFKFSKFJSKFJKFSLKDFSKDJFSKCEJCL FOR TEH ODNFOOF TJE SKDLFSLKFJSKFSLKFSKFKFJSKJFASKDJFKAJFLKJSDFLKJF'SKDFJALKDSJFSLKDFJLSKDFSLKDJFSKLDJFFSKLJSLDKFSKLSKDFJALKDSJFSLKDFJLSKDFSLKDJFSKLDJFAKSDJFLKDSFJAKLDSJFKSDFJFSDLF */}
//       </p>
//       </div>
//     </div>

//     {/* <div className="h-screen">
//   <section id="about" className="relative z-10 action1 flex flex-row items-center justify-between p-8 "> */}
//     {/* Left Section: About Me Content */}
//     {/* <div className="ml-8 contentExtra contentCard flex flex-row items-center">
//     <div className="flex flex-col w-1/2 ">
//       <h1 className="merriweather-regular text-4xl font-bold mb-4">ABOUT ME</h1> */}
//       {/* <h2 className="text-xl mb-4">Summary for about me section</h2> */}
//       {/* <p className="text-lg mb-4">
// I see code as an art, something that evolves incrementally with each bug fixed, feature shipped, and insight gained. 
// I am driven by curiosity, whether it's crafting intuitive user interfaces, optimizing backend flows, or unraveling patterns hidden in data. 
// My projects span full-stack infrastructure, machine learning algorithms, all unified by a commitment to building intelligent, responsive, and 
// continuously improving systems.</p>
// <p className="text-lg mb-4">
// As a software developer with a Master's degree in Computer Science from DePaul University, Chicago,
// I have a strong foundation in web and mobile development, complemented by hands-on experience in data analysis and applied machine learning. 
// I approach development with structure and precision, prioritizing clean architecture, scalability, and performance. 
// Continuously expanding my skill set through practical exploration, I strive to deliver robust and meaningful solutions.</p>
//     </div> */}

//     {/* Right Section: Image */}
//     {/* <div className=" flex justify-between ml-45">
//       <Image
//         src={DCImg}
//         alt="About Me"
//         className="rounded-2xl shadow-lg transition-transform hover:scale-105"
//         width={450}
//         height={450}
//       />
//     </div>

//     </div> */}





// <div className="h-screen  ">

// <div className="fixed inset-0 -z-10 pointer-events-none">
//   <Starfield />
//   </div>
//   <main id="about" className="relative z-10 action1 flex flex-col lg:flex-row items-center justify-between p-8 contentExtra contentCard">

//     {/* Left Section: About Me Content */}
//     <div className="lg:w-3/4 w-full flex flex-col items-start lg:pr-8 ">
//       <h1 className="merriweather-regular text-4xl font-bold mt-5 mb-15 text-center">ABOUT ME</h1>
//       <p className="text-md mb-6">
//         I see code as an art, something that evolves incrementally with each bug fixed, feature shipped, and insight gained.
//         I am driven by curiosity, whether it's crafting intuitive user interfaces, optimizing backend flows, or unraveling patterns hidden in data.
//         My projects span full-stack infrastructure, machine learning algorithms, all unified by a commitment to building intelligent, responsive, and
//         continuously improving systems.
//       </p>
//       <p className="text-md mb-6">
//         As a software developer with a Master's degree in Computer Science from DePaul University, Chicago,
//         I have a strong foundation in web and mobile development, complemented by hands-on experience in data analysis and applied machine learning.
//         I approach development with structure and precision, prioritizing clean architecture, scalability, and performance.
//         Continuously expanding my skill set through practical exploration, I strive to deliver robust and meaningful solutions.
//       </p>
//     </div>

//     {/* Right Section: Image */}
//     <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
//       <Image
//         src={DCImg}
//         alt="About Me"
//         className="rounded-2xl shadow-lg transition-transform hover:scale-105 object-cover"
//         width={450}
//         height={450}
//       />
//     </div>
//   </main>
//   </div>



//   <span className="">React.js
  















//     {/* <div className="h-screen">

// <section id ="about" className="relative z-10 action1 flex flex-row p-8">
//   <div className="flex flex-col">

//       <h1 className="merriweather-regular text-3xl">ABOUT ME</h1>
//       <h2>Summary for about me section</h2> */}
// {/* //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li> */}
// {/* //         </ul> */}
// {/* </div> */}
// {/* </section>
// </div> */}
//     </div>
//     // {
// //     // [20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
// //     <div className="grid grid-rows">
// //       {/* <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      
// //        <section className=" grid grid-row grid-cols gap-8 ">
// //       <div className="section section::before"> 
// //       <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           </ul>
// //           </div>
// //         {/* <Image
// //           className="dark"
// //           src={Img}
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         /> */}
// //         {/* </div> */}
// //         {/* </section> */}

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// // </section>
// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center sm:text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">
// //               Get started by editing{" "}
// //               <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //                 src/app/page.tsx
// //               </code>
// //               .
// //             </p>
// //           </li>
// //           <li>
// //             <p className="text-center sm:text-left">Save and see your changes instantly.</p>
// //           </li>
// //         </ul>

// //       {/* </div> */}
      
// //       {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
// //           <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         /> 
// //         <ul>
// //           <li>
// //             <h1 className="text-3xl font-bold text-center :text-right">
// //               Hey There
// //             </h1>
// //           </li>
// //           <li>

// //           </li>
// //         </ul>
// //         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
// //           <li className="mb-2">
// //             Get started by editing{" "}
// //             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
// //               src/app/page.tsx
// //             </code>
// //             .
// //           </li>
// //           <li>Save and see your changes instantly.</li>
// //         </ol>


// //       </main> */}
// //       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
// //       </footer>
// //     </div>
// // }
//   );
// }








