"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dataV = {
  "Full Stack Technologies": ["React.js", "Next.js", "Node.js", "Express.js", "CSS", "HTML", "Flutter", "Convex", "Redux", "React Native","Firebase"],
  "Data Science & Visualization": ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Tableau", "Seaborn", "Matplotlib", "Plotly"],
  "Programming Languages": ["Python", "JavaScript", "Scala", "Java", "PHP", "TypeScript", "Haskell", "R", "Dart", "C", "SQL"],
  "Tools & Libraries": ["MySQL", "AWS", "Git", "Docker", "Vis.js", "Bitbucket", "Tailwind CSS", "Framer Motion"]
};

export default function SkillsCard() {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-28 w-full max-w-6xl p-2">
      {Object.entries(dataV).map(([category, skills], index) => (
        <motion.div
          key={index}
          onClick={handleClick}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          animate={{ scale: clicked ? 1 : 1.02 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className={`relative contentCard ${clicked ? 'bg-realtive' : 'bg-white'} min-h-[200px]  sm:min-h-[250px] lg:h-[300px] w-full rounded-md shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg `}
        >
            {/* lg:w-[450px] */}
          <AnimatePresence mode="wait">
            {clicked ? (
              <motion.div
                key="category"
                className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl lg:text-5xl font-bold changa-one-regular text-center uppercase m-4 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {category}
              </motion.div>
            ) : (
              <motion.div
                key="skills"
                className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-2 p-4 overflow-auto "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skillsComp font-bold text-center flex items-center justify-center gap-8 "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
