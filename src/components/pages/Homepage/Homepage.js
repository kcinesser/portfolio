import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../layout/Nav";
import Sidenav from "./SidenavScroll";

import { projects } from "../../utils/projects";
import Footer from "../../layout/Footer";

export default class Homepage extends Component {
  state = {
    filterValue: "",
  };

  projectsList = () => {
    return projects
      .filter((project) => project.tags.includes(this.state.filterValue))
      .map((project, index) => {
        return (
          <div
            className="grid__item"
            key={index}
            style={{ "--animation-order": index }}
          >
            <div
              className="item__inner"
              style={{ backgroundImage: `url(${project.thumb_image_url})` }}
            >
              <p className="project__title">{project.title}</p>
              <p className="project__excerpt">
                <Link to={`/portfolio/${project.slug}`}>
                  {project.excerpt}{" "}
                </Link>
              </p>
            </div>
          </div>
        );
      });
  };

  handleFilter = (value) => {
    this.setState({ filterValue: value });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="hero" id="hero">
          <div className="hero__content">
            <h1 className="hero__title">Nicolas Esser</h1>
            <div className="hero__subhead">
              <p>web developer</p>
            </div>
          </div>
        </div>
        <div className="container" id="about">
          <div className="col w-full">
            <h1>About</h1>
            <p>
              Hi, I'm Nick, and I'm a web developer. I currently work at
              Firespring Inc. in Lincoln, Nebraska as a, you guessed it, web
              developer. I graduated from the University of Nebraska - Lincoln
              in 2019 with a degree in Computer Science with a minor in
              Mathematics (I also have a degree in Biology from Concordia
              University, but that's probably not why you're here).
            </p>
            <p>
              Starting as a lost intern and transitioning into a full-time upon
              graduating, I've worked on a pretty wide variety of projects
              during my time as a developer, both professionally and personally.
              Anything from custom WordPress sites, themes, and plugins, to full
              stack web applications in Rails, Laravel, or Javascript.
            </p>
            <p>
              One of the best parts about this job is there's always something
              to learn out there. It can be intimidating knowing that you'll
              never know everything there is to know about software development,
              but that's why I love it. I'm always looking for an opportunity to
              learn something new.
            </p>
          </div>
          <div className="col w-3_4 center">
            <h2>SOME THINGS I LOVE</h2>
            <div className="logo-grid">
              <div className="grid__item">
                <img
                  alt="react"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/react.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="redux"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/redux.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="laravel"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/laravel.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="wordpress"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/wordpress.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="rails"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/rails.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="ruby"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/ruby.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="django"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/django.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="python"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/python.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="sass"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/sass.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="tailwind"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/tailwind.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="bootstrap"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/bootstrap.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="vscode"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/vscode.png"
                />
              </div>
            </div>
            <h3>and some things I'd love to learn to love...</h3>
            <div className="logo-grid">
              <div className="grid__item">
                <img
                  alt="angular"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/angular.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="vue"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/vue.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="electron"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/electron.png"
                />
              </div>
              <div className="grid__item">
                <img
                  alt="aspnet"
                  src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/aspnet-featured.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="work">
          <h1>Work</h1>
          <p>
            Here are a few examples of some work I've done over the past few
            years. Some professional, some for fun.
          </p>
          <div className="project__filter col w-3_4 center">
            <ul>
              <li>
                <span onClick={() => this.handleFilter("react")}>React</span>
              </li>
              <li>
                <span onClick={() => this.handleFilter("laravel")}>
                  Laravel
                </span>
              </li>
              <li>
                <span onClick={() => this.handleFilter("wordpress")}>
                  WordPress
                </span>
              </li>
              <li>
                <span onClick={() => this.handleFilter("django")}>Django</span>
              </li>
              <li>
                <span onClick={() => this.handleFilter("rails")}>Rails</span>
              </li>
              <li
                className={`clear ${
                  this.state.filterValue !== "" ? "" : "inactive"
                }`}
              >
                <span onClick={() => this.handleFilter("")}>
                  <i className="fas fa-times"></i>
                </span>
              </li>
            </ul>
          </div>
          <div className="project-grid">{this.projectsList()}</div>
        </div>
        <div className="container dark" id="contact">
          <div className="col w-3_4 center">
            <h1>Contact</h1>
            <p>
              Wanna chat? You can find me on{" "}
              <a
                href="https://www.linkedin.com/in/nicolas-esser-5a99a213a/"
                target="_blank"
              >
                LinkedIn
              </a>
              . Curious to see more about my projects? Checkout my{" "}
              <a href="https://github.com/kcinesser" target="_blank">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
        <Sidenav />
        <Footer />
      </Fragment>
    );
  }
}
