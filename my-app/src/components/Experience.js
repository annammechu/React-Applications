import React from "react";
import ReactDOM from "react-dom";
import "./indexExp.css";
import TimeLine from "./Timeline";
import * as serviceWorker from "./serviceWorker";
import cx from "classnames";

//Eduaction page with timeline as a component

function Experience() 
{
  return (
    <div className="experience">
      <div class="container">
        <div class="row align-items-center my-5">
           <div class="col-lg-5">
            <h1 class="font-weight-light">Where Did I work?</h1>
            <div className="abc">
      <TimeLine 
      events={[
        {
          time: "4) July 20 2020",
          title: " Product Manager ",
          desc:
            "Product Managed three projects-CRM, Cybersecurity, PWA flutter at Saras.care"
        },
        {
          time: "3) July 15 2020",
          title: "RMIT Capstone Project Mentor- Fitkyt",
          desc:
            " Being a recent post graduate student, I mentored and shared my experiences with Fitkyt development for a shopify project  "
        },
        {
          time: "2) March 11 2020",
          title: " Business Analyst Intern",
          desc:
            "As a part of WIL project I worked as Business analyst intern at Saras.care"
        },
        {
          time: "1) Feruary 24 2020",
          title: " RMIT Academic Tutor & Lab Assistant ",
          desc:
            "Being a Tutor for software engineering project management, RMIT University, I have tutored 120 students in AGILE and mentored 15 agile projects"
        }   
      ]}
      startFrom={"last"}
      orientation={"horizontal"}
    />
  </div>
           </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;