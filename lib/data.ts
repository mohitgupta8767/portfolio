import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../components/Assets/growth.png";
import rmtdevImg from "../components/Assets/stock.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Associate Content Analyst",
    location: "Angel One",
    description:
      "Performing thorough research to stay updated on market trends, emerging technologies, and industry news. Incorporating insights into content to provide readers with valuable and timely information. /n Ensuring that all content maintains Angel One’s brand voice and adheres to company guidelines. Crafting content that reflects the company’s values and resonates with the target audience.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    title: "Assistant Manager - Financial writer ",
    location: "5paisa",
    description:
      "Researched and write Quora answers and off-page blogs on a variety of financial topics, including investment strategies, technical analysis, markets trends, personal finance and stock investing. /n Consistently attained first-page rankings on Google search results for clients' blogs, resulting in significant visibility and increased traffic, highlighting expertise in SEO optimization and content strategy.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2023 - May 2024",
  },
  {
    title: "Finance Content Writer",
    location: "Content Ladder",
    description:
      "Expanded content portfolio by writing long-form articles and blogs for prominent fintech companies such as INDmoney, Policybazaar, Jupiter Money etc., demonstrating versatility and industry knowledge. / n Implemented SEO best practices to optimize articles, resulting in increased organic traffic by 50% within first 2 months and improved search engine rankings for clients. /n Crafted compelling content that significantly increased user engagement and reader retention, contributing to a more impactful online presence for clients.",
    icon: React.createElement(CgWorkAlt),
    date: "Sepetember 2022 - July 2023",
  },
  {
    title: "Finance Content Writer",
    location: "IIFPIA",
    description:
      "Authored informative content on finance topics like investment banking, financial modeling, business valuation, and stock investing, showcasing deep understanding of complex financial concepts /n Developed expertise in stock market fundamentals, culminating in the preparation to write a comprehensive book on the basics of the stock market.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2020 - May 2022",
  },
  {
    title: "Soft Skill & Communicative English Trainer ",
    location: "Quess Corporate",
    description:
      "Designed and implemented tailored training modules to enhance soft skills and communicative English, including leadership, teamwork, problem-solving, and effective communication.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 - October 2022",
  },
  {
    title: "Soft Skill & Communicative English Trainer",
    location: "ASMACS Skill Development Private Limited",
    description:
      "Conducted engaging training sessions using diverse methods such as role-playing, group discussions, and practical exercises to promote active learning and real-world application of skills.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2018 – December 2020",
  },
] as const;

export const projectsData = [
  {
    title: "What are some things you can do to retire early?",
    description:
      "The project involved extensive research, content creation, and strategic promotion, resulting in over 15.1 million views.",
    tags: "https://www.quora.com/Whats-the-best-stock-swing-trading-strategy/answer/5paisa-Capital-Limited-1?ch=10&oid=1477743730439473&share=2b0170a4&srid=Xo2um&target_type=answer",
    imageUrl: rmtdevImg,
  },
  {
    title: "What's the best stock swing trading strategy?",
    description:
      "Achieved over 15.1 million views on Quora for a comprehensive post, demonstrating significant impact and expertise in the field.",
    tags: "https://www.quora.com/What-are-some-things-you-can-do-to-retire-early/answer/5paisa-Capital-Limited-1?ch=10&oid=1477743742455570&share=36853040&srid=Xo2um&target_type=answer",
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "Technical Analysis",
  "Search Engine Optimization",
  "Blog Writing",
  "Keyword planning and topic generation",
  "Microsoft Office",
  "Content Writing",
  "Leadership",
  "Critical Thinking",
  "Decision Making",
  "Soft Skills",
  "Writing Skills",
  "Communication Skills",
] as const;
