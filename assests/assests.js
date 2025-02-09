import cpp from "./cpp.png";
import django from "./django.png";
import express from "./Express.png";
import food_prj from "./food delivery.png";
import mongodb from "./mongo.svg";
import nextjs from "./nextjs.svg";
import python from "./python.svg";
import quiz_prj from "./quiz app.png";
import react from "./react.png";
import sql from "./sql.svg";
import tailwind from "./tailwind.svg";
import typescript from "./typescript.svg";
import logo from "./logo.png";
import hero from "./me_final.png";
import git from "./github.svg";
import linkedin from "./linkedin.svg";
import gmail from "./gmail.svg";
import leetcode from "./leetcode.svg";
import strides from "./strides.png";
import doctor from "./doctor app.png";
import js from "./javascript.svg";
import sass from "./sass.svg";
import firbase from "./firebase.svg";
import c from "./c.svg";
import cplus from "./cpp.svg";
export const assests = {
  cpp,
  django,
  express,
  logo,
  food_prj,
  mongodb,
  nextjs,
  python,
  quiz_prj,
  react,
  sql,
  tailwind,
  typescript,
  hero,
};

export const social_media = [
  {
    img: git,
    link: "https://github.com/roopesh-jsp",
  },
  {
    img: linkedin,
    link: "https://www.linkedin.com/in/rupesh13/",
  },
  {
    img: leetcode,
    link: "https://leetcode.com/u/roopeshrj/",
  },
  {
    img: gmail,
    link: "mailto:rupzkumar5@gmail.com",
  },
];
export const skills = [
  { name: "react", img: react, link: "https://reactjs.org/" },
  { name: "nextjs", img: nextjs, link: "https://nextjs.org/" },
  { name: "tailwind", img: tailwind, link: "https://tailwindcss.com/" },
  {
    name: "ts",
    img: typescript,
    link: "https://www.typescriptlang.org/",
  },
  { name: "express", img: express, link: "https://expressjs.com/" },
  { name: "sql", img: sql, link: "https://www.postgresql.org/" }, // Assuming PostgreSQL for SQL reference
  { name: "mongodb", img: mongodb, link: "https://www.mongodb.com/" },
  { name: "python", img: python, link: "https://www.python.org/" },
  {
    name: "js",
    img: js,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "firebase", img: firbase, link: "https://firebase.google.com/" },
  { name: "sass", img: sass, link: "https://sass-lang.com/" },
  { name: "c", img: c, link: "https://en.cppreference.com/w/c" }, // General C documentation
  { name: "cpp", img: cplus, link: "https://isocpp.org/" }, // Official C++ website
];

export const top_prj = [
  {
    id: 1,
    name: "order now",
    link: "https://github.com/roopesh-jsp/Food-order-full-stack-website",
    img: food_prj,
    description:
      "A full-stack food ordering website built using the MERN stack, featuring distinct user and admin interfaces. The user interface allows customers to browse the menu, place orders, and track the status of their orders. The admin interface provides full control over the system, enabling management of menu items (add, edit, delete) and monitoring of all user orders. The UI is designed to offer an intuitive and seamless experience for both users and administrators.",
  },
  {
    id: 2,

    name: "Chatz",
    link: "https://github.com/roopesh-jsp/chat-application---MERN-stack",
    img: null,
    description:
      "A real-time chat application built using the MERN stack and WebSockets for seamless communication. The app supports both individual and group chats, with real-time messaging across all users. The group chat feature is admin-controlled, allowing the admin to add or remove users and modify the group name. The application is designed to provide smooth, instant communication with an intuitive user experience.",
  },
  {
    id: 3,
    name: "Strides",
    link: "https://github.com/roopesh-jsp/strides2k25",
    img: strides,
    description:
      "A single-page application (SPA) built using React, designed to organize and manage a college event. The mobile-responsive application was accessed by over 4,000 students, many of whom used it on their mobile devices for seamless event registration. The project received special recognition from faculty for its functionality and accessibility.",
  },
  {
    id: 4,
    name: "appointment simulator",
    link: "https://github.com/roopesh-jsp/doctor-appointment-node-js-",
    img: doctor,
    description:
      "A doctor appointment booking application with three interfaces: users, doctors, and admin. Users can book and cancel appointments, while doctors can view and manage their scheduled appointments. The admin interface allows for adding or removing doctors and making them available for bookings. Users receive email notifications regarding their bookings, and missed appointment alerts are sent if they fail to attend.",
  },
];
export const all_prj = [
  {
    id: 11,
    name: "Quiz app",
    link: "https://github.com/roopesh-jsp/reactApps/tree/main/Quiz%20testline%20assignment",
    img: quiz_prj,
    description:
      "A simple quiz game built using React and an external API. The scoring system awards +1 point for each correct answer, -1 for incorrect answers, and 0 for unattempted questions, providing a straightforward and engaging experience for users.",
  },
  ...top_prj,
];
