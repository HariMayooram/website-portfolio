"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import gitH from "./github.png";
import Linkd from "./linkedin.png";
import xT from "./twitter.png";
import Image from "next/image";

export default function FooterReveal() {
  const { scrollYProgress } = useScroll();

  // Map scroll progress (from 70% to 95%) to opacity and Y position
  const opacity = useTransform(scrollYProgress, [0.95, 0.99], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0.95, 0.99], [100, 0]);

  return (
    <motion.section
      style={{ opacity, y: translateY }}
      id="contact"
      className="h-[70%] absolute bottom-0 left-0 w-full bg-white text-black  p-2  z-50 "
    >
      {/* text-grey-900 */}

      <h1 className="changa-one-boldD text-6xl color-green md:mx-6">
        HARIGOVIND R (HARI)
      </h1>
      <hr className="border border-black my-4 lg:mx-6" />
      <div className="h-[80%] flex flex-col justify-end mx-6">
        <div>
          <h1 className="changa-one-boldD text-4xl mt-[2%] text-[#2f9397] mb-4">
            {" "}
            Fire a Message My Way
          </h1>
          <a
            className="skillsComp text-black "
            href="mailto:harigov.raj@gmail.com"
          >
            harigov.raj@gmail.com
          </a>
        </div>
        <div className="h-full  flex flex-row justify-between items-end ">
          <div className="my-15 sm:my-3">
            <Link href="/" className="yesteryear-regular text-4xl m-4 ">
              HG
            </Link>
          </div>

          <div className="tomorrow-regular invisible sm:visible">
            <h1>
              {" "}
              Made by <span className="italic">Harigovind R </span>{" "}
            </h1>
          </div>

          <div className="my-10 sm:my-0">
            <h1 className="tomorrow-regular "> Connect: </h1>
            <div className="flex flex-row">
              <a href="https://github.com/HariMayooram">
                <Image
                  alt="github"
                  className="h-8 w-8 m-2 hover:scale-125 hover:shadow-lg hover:shadow-white "
                  src={gitH}
                />
              </a>
              <a href="https://www.linkedin.com/in/harigovindr/">
                <Image alt="linkedIn" className="h-8 w-8 m-2 hover:scale-125 hover:shadow-lg hover:shadow-white" src={Linkd} />
              </a>
              <a href="">
                <Image alt="twitter" className="h-8 w-8 m-2 hover:scale-125 hover:shadow-lg hover:shadow-white" src={xT} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
