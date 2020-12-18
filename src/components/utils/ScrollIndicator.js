import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollIndicator = (props) => {
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [contact, setContact] = useState(false);
  const [aboutPer, setAboutPer] = useState(0);
  const [workPer, setWorkPer] = useState(0);
  const [contactPer, setContactPer] = useState(0);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);

    let about = document.getElementById("about");
    let work = document.getElementById("work");
    let contact = document.getElementById("contact");

    var body = document.body,
      html = document.documentElement;

    var docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    let aboutPer =
      ((about.getBoundingClientRect().top + window.scrollY) / docHeight) * 100;
    let workPer =
      ((work.getBoundingClientRect().top + window.scrollY) / docHeight) * 100;
    let contactPer =
      ((contact.getBoundingClientRect().top + window.scrollY) / docHeight) *
      100;

    setAboutPer(aboutPer);
    setWorkPer(workPer);
    setContactPer(contactPer);

    (y / height) * 100 >= aboutPer ? setAbout(true) : setAbout(false);
    (y / height) * 100 >= workPer ? setWork(true) : setWork(false);
    (y / height) * 100 >= contactPer ? setContact(true) : setContact(false);
  }, [y]);

  return (
    <div className={`scroll-indicator ${props.show ? "" : "active"}`}>
      <div
        className="scroll-container"
        style={{ backgroundPosition: `${scrolled}% -${scrolled}%` }}
      >
        <a href="#hero">
          <i className={`fas fa-home active`}></i>
        </a>
        <a href="#about" style={{ top: aboutPer + "%" }}>
          <i className={`fas fa-user ${about ? "active" : ""}`}></i>
        </a>
        <a href="#work" style={{ top: workPer + "%" }}>
          <i className={`fas fa-code ${work ? "active" : ""}`}></i>
        </a>
        <a href="#contact" style={{ top: contactPer + "%" }}>
          <i className={`fas fa-envelope ${contact ? "active" : ""}`}></i>
        </a>
      </div>
    </div>
  );
};

export default ScrollIndicator;
