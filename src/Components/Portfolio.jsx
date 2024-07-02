/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Image Transformation tool with AI",
    description:
      "An AI-powered Image Transformation Tool utilizes advanced algorithms to enhance, edit, or manipulate images. It automates tasks like resizing, color adjustment, and style transfer, achieving professional-level results with minimal user input.",
    url: "https://imaginify-gjze.vercel.app/",
  },
  {
    title: "News-react-app",
    description:
      "A News React App delivers real-time news updates with a responsive user interface built on React.js. It fetches data from reliable APIs, categorizes news by topics, and supports search functionality.",
    url: "https://react-news-app-eight-lac.vercel.app/",
  },
  {
    title: "Box-office",
    description:
      "Box-Office is an intuitive web app that utilizes APIs to fetch and display real-time data on movies and actors. Users can search for films or performers, accessing detailed information such as box office earnings, cast members, and critical reviews.",
    url: "https://gopalsingh2809.github.io/box_office/",
  },
  {
    title: "Tic-Tac-Toe game",
    description:
      "Tic Tac Toe is a classic two-player game where opponents take turns marking Xs and Os on a 3x3 grid. The objective is to form a horizontal, vertical, or diagonal line of three symbols. Simple yet strategic, it's popular for its quick gameplay and accessibility across all ages.",
    url: "https://github.com/GopalSingh2809/tictactoe_game",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
