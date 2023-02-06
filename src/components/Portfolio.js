import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Pick-A-Meal",
    image: "/img/pickameal.jpg",
    description: "The one-stop semantic recipe search database for finding all of your favourite recipes.",
    repo: "https://github.com/jeco1988/Pick-A-Meal",
    live: "https://jeco1988.github.io/Pick-A-Meal/",
  },
  {
    id: 1,
    title: "Jack's Tech Blog",
    image: "/img/techblog.jpg",
    description: "A CMS-style blog site where users can publish their blog posts and comment on other developers’ posts as well.",
    repo: "https://github.com/jeco1988/techblog",
    live: "https://jackstechblog.herokuapp.com/",
  },
  {
    id: 2,
    title: "Open Weather Dashboard",
    image: "/img/openweatherdashboard.jpg",
    description: "A weather dashboard that allows the user to search a city and retrieve a current weather forecast for the desired location.",
    repo: "https://github.com/jeco1988/OpenWeatherDashboard",
    live: "https://jeco1988.github.io/OpenWeatherDashboard/",
  },
  {
    id: 3,
    title: "Quiz Challenge",
    image: "/img/quizchallenge.jpg",
    description: "A timed coding quiz with multiple-choice questions. The timed quiz will store top scores to gauge progress compared to others. Each incorrect answer will deduct 10 seconds off the time remaining.",
    repo: "https://github.com/jeco1988/QuizChallenge",
    live: "https://jeco1988.github.io/QuizChallenge/",
  },
  {
    id: 4,
    title: "Jack's Workday Scheduler",
    image: "/img/jacksworkdayscheduler.jpg",
    description: "A simple workday scheduling application that allows the user to save scheduled events each hour of the day. Utilising the local storage, users will be able to refresh the page without losing input data.",
    repo: "https://github.com/jeco1988/JacksWorkdayScheduler",
    live: "https://jeco1988.github.io/JacksWorkdayScheduler/",
  },
  {
    id: 5,
    title: "Jack's Password Generator",
    image: "/img/jackspasswordgenerator.jpg",
    description: "The one-stop semantic recipe search database for finding all of your favourite recipes.",
    repo: "https://github.com/jeco1988/JacksPasswordGenerator",
    live: "https://jeco1988.github.io/JacksPasswordGenerator/",
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