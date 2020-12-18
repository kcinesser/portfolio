import React, { Component, Fragment } from "react";

import InternalNav from "../../layout/InternalNav";

import { projects } from "../../utils/projects";

export default class Project extends Component {
  state = {
    slug: "",
  };

  componentDidMount() {
    this.setState({ slug: this.props.match.params.slug });
  }

  technologiesList = (project) => {
    return project.tags.map((tag, index) => {
      switch (tag) {
        case "react":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="react"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/react.png"
              />
            </div>
          );
          break;
        case "django":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="django"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/django.png"
              />
            </div>
          );
          break;
        case "rails":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="rails"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/rails.png"
              />
            </div>
          );
          break;
        case "redux":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="redux"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/redux.png"
              />
            </div>
          );
          break;
        case "sass":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="sass"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/sass.png"
              />
            </div>
          );
          break;
        case "laravel":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="laravel"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/laravel.png"
              />
            </div>
          );
          break;
        case "tailwind":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="tailwind"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/tailwind.png"
              />
            </div>
          );
          break;
        case "wordpress":
          return (
            <div className="grid__item" key={index}>
              <img
                alt="wordpress"
                src="https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/wordpress.png"
              />
            </div>
          );
          break;
        default:
          return "";
      }
    });
  };

  render() {
    let projectFilter = projects.filter((project) => {
      return project.slug === this.state.slug;
    });

    let project = null;

    if (projectFilter.length > 0) {
      project = projectFilter[0];
    }

    if (project) {
      return (
        <Fragment>
          <InternalNav />
          <div className="internal hero">
            <h1>{project.title}</h1>
          </div>
          <div className="container internal">
            <div className="image__container">
              <img alt="featured" src={project.featured_image_url} />
              <p>{project.featured_image_caption}</p>
            </div>
            {project.paragraph_one ? <p>{project.paragraph_one}</p> : false}
            {project.paragraph_two ? <p>{project.paragraph_two}</p> : false}
            {project.paragraph_three ? <p>{project.paragraph_three}</p> : false}
            {project.designer_credit ? (
              <p>
                <a href="http://www.dakotahnicole.com/" target="_blank">
                  Check out Dakotah here.
                </a>
              </p>
            ) : (
              false
            )}

            {project.body_image_url ? (
              <div className="image__container">
                <img alt="one" src={project.body_image_url} />
                <p>{project.body_image_caption}</p>
              </div>
            ) : (
              false
            )}

            {project.body_image_url_two ? (
              <div className="image__container">
                <img alt="two" src={project.body_image_url_two} />
              </div>
            ) : (
              false
            )}
            <h3>Technologies Used</h3>
            <div className="logo-grid">{this.technologiesList(project)}</div>
          </div>
        </Fragment>
      );
    } else {
      return <div>Loading..</div>;
    }
  }
}
