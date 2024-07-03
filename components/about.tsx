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
        Hey there! I'm Jayden, a final-year ICT student majoring in <span className="font-medium">Information and Technology</span>. 
        Previously minoring in <span className="font-medium">Management Information Systems</span> and <span className="font-medium">Advertising Technologies</span>. 
        When I'm not knee-deep in coursework, you'll find me taking online courses to level up my programming skills. From <span className="font-medium">JavaScript, HTML, CSS, Vue.js, C++, Node.js, MongoDB, MySQL, to AWS</span> — you name it, I’m probably learning it!
        </p>

        <p className="mb-3">
        I am all about turning theory into practice by building projects, though I know there's always room for growth. As I gear up for graduation this <span className="italic">December 2024</span>, 
        I am on the lookout for a <span className="underline">graduate program or internship</span> to get some real-world IT experience. 
        Besides hitting the courses, I've been working at <span className="font-medium">Chatime, Sunglass Hut, and Happytel </span>in Australia to support my living expenses. 
        </p>

        <p>
        <span className="font-medium">Fun fact: </span> I am multilingual! I can chat in <span className="font-medium">English, Mandarin, Malay, and Cantonese</span>, thanks to my <span className="underline">Malaysian</span> roots. When I’m not coding, I love <span className="italic">dancing, watching movies, and snapping aesthetic photos</span>. 
        I am eager to learn, ready to tackle challenges, and hopefully, make my <span className="underline">mark</span> in the IT world!
        </p>

    </motion.section>
  );
}