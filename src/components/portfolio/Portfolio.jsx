import "./portfolio.css";

import IMG1 from "../../assets/E-shop.png";
import IMG2 from "../../assets/Todolist.png";
import IMG4 from "../../assets/Weatherapp.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "E-Shop with React.js",
      img: IMG1,
      description:
        "An eShop website is an online platform where users can browse, purchase, and sell products or services electronically.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://e-shopapps.netlify.app/",
      github: "https://github.com/swaraj-thakur/E-shop.git",
    },
    {
      id: 2,
      title: "Weather App",
      img: IMG4,
      description:
        "A weather app provides current and forecasted weather conditions for specific locations.",
      technologies: "Html | CSS | Javascript",
      link: "https://weather-apphy.netlify.app/",
      github: "https://github.com/swaraj-thakur/Weather-App.git",
    },
    {
      id: 3,
      title: "To Do List App",
      img: IMG2,
      description: "A todo list app helps users organize tasks and manage their time efficiently by listing activities to be completed.",
      technologies: "Html | CSS | Javascript",
      link: "https://todolistapp007.netlify.app/",
      github: "https://github.com/swaraj-thakur/ToDo-List.git",
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
