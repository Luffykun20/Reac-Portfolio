import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Password Generator",
    image: "public/assets/password-generator.png",
    repo: "https://github.com/Luffykun20/password-generator",
    live: "https://luffykun20.github.io/password-generator/",
  },
  {
    id: 1,
    title: "Note taker",
    image: "public/assets/note-taker2.PNG",
    repo: "https://github.com/Luffykun20/Note-Taker",
    live: "https://enigmatic-lake-18808.herokuapp.com/",
  },
  {
    id: 2,
    title: "Code Quiz",
    image: "public/assets/code-quiz.PNG",
    live: "https://github.com/Luffykun20/Code-Quiz",
    repo: "https://luffykun20.github.io/Code-Quiz/",
  },
  {
    id: 3,
    title: "Work Day Scheduler",
    image: "public/assets/scheduler.PNG",
    repo: "https://github.com/Luffykun20/Work-Day-Scheduler",
    live: "https://luffykun20.github.io/Work-Day-Scheduler/",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    image: "public/assets/weather-dashboard.PNG",
    repo: "https://github.com/Luffykun20/Weather-Dashboard",
    live: "https://luffykun20.github.io/Weather-Dashboard/",
  },
  {
    id: 5,
    title: "PWA Text Editor",
    image: "public/assets/text-editor.PNG",
    repo: "https://github.com/Luffykun20/PWA-Text-Editor",
    live: "https://whispering-oasis-78414.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;