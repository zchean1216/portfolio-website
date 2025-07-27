"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
    const { ref } = useSectionInView("About");
  
    return (
    <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        G'day! I'm Jayden, a fresh ICT graduate with a major in <span className="font-medium">Information and Technology</span>. 
        I previously completed minors in <span className="font-medium">Management Information Systems</span> and <span className="font-medium">Advertising Technologies</span>. 
        Currently working as an IT Specialist at Caleb & Brown, where I'm getting hands-on experience with cybersecurity, system administration, and automation. I'm always keen to learn new tech as I've been working with <span className="font-medium">JavaScript, HTML, CSS, Vue.js, Python, Bash scripting, JumpCloud, and various cybersecurity tools</span>, basically anything that helps me grow in the IT field!
        </p>

        <p className="mb-3">
        During my studies, I worked a fair dinkum variety of part-time jobs to support myself. I started out washing dishes, then moved up to kitchen hand work, before getting into food and beverage roles at <span className="font-medium">Chatime and Delaware North stadiums</span>. 
        From there, I transitioned into retail at <span className="font-medium">Sunglass Hut</span> and even did some coaching work. Each of these jobs taught me something different - from working under pressure in busy kitchens to delivering great customer service in retail, and developing communication skills through coaching. 
        It's been quite the journey, and I reckon all these experiences have made me more well-rounded and better at working with people from all walks of life.
        </p>

        <p>
        <span className="font-medium">A bit about me personally: </span> I speak <span className="font-medium">English, Mandarin, Malay, and Cantonese</span> — perks of growing up with <span className="underline">Malaysian</span> heritage! Outside of work and coding, I'm into <span className="italic">dancing, catching films, and taking photos</span> (always on the hunt for that perfect shot). 
        I am eager to learn, ready to tackle challenges, and hopefully, make my <span className="underline">mark</span> in the IT world!
        </p>

    </motion.section>
  );
}
