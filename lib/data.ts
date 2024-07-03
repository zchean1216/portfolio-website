import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import userproImg from "@/public/userpro.png";
import datavisImg from "@/public/datavis.png";
import iamImg from "@/public/iam.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Final Year ICT Student",
    location: "Swinburne University, Melbourne, VIC",
    description:
      "I am majoring in IT, with previous minors in Management Information Systems and Advertising Technologies. I am eagerly seeking an internship or graduate program before graduating by December 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Customer Service Representative",
    location: "Chadstone Shopping Centre, Vic",
    description:
      "I gained valuable communication and problem-solving skills as a customer service representative at Sunglass Hut and Chatime, engaging with customers and efficiently managing multiple tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "I freelanced as a website and mobile application tester, evaluating usability, user experience, and interface design while identifying bugs and collaborating with developers for refinement before release.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "User Profile",
    description:
      "I created a user profile management site with Vue.js and Express. It lets users easily manage their profiles with a simple interface.",
    tags: ["Vue.js", "Express", "JavaScript", "MongoDB", "Node.js"],
    imageUrl: userproImg,
  },
  {
    title: "Data Visualisation",
    description:
      "For my university project, I used D3.js to create interactive visualizations highlighting global mental and behavioral health factors impacting mortality rates.",
    tags: ["D3.js", "HTML", "CSS", "JavaScript"],
    imageUrl: datavisImg,
  },
  {
    title: "Secure IAM Framework for Aged Care Facilities",
    description:
      "My team and I developed a Secure IAM Framework for aged care facilities using open-source Keycloak.",
    tags: ["Keycloack", "Flask", "Figma", "SQL", "IAM framework"],
    imageUrl: iamImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "Multilingual",
  "Customer Service"
] as const;