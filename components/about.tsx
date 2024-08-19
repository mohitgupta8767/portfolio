"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I pursued my
        passion for content writer. I specialize in both the fundamentals and technical aspects of the{" "}
        <span className="font-medium">stock market</span>.{" "}
        <span >With two years of experience at the International Institute of Financial Planning and Investment Advisory</span>,  I have also contributed to <span className="font-medium">Content Ladder, Bullsmart, and Pepper Content.</span> 
        {" "}I’ve written for leading fintech companies such as <span className="font-medium">5Paisa, INDmoney, Policybazaar, Jupitermoney, Alice Blue, and IBN Technologies</span>.

        Currently, I’m shaping financial content at <span className="font-medium">Angelone</span>, where I excel at making complex topics accessible and understandable.
     
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
