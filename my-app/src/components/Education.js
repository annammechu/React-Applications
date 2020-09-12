import React from "react";

//Education page

function Education() {
  return (
    <div className="education">
      <div class="container">
	      <div class="row align-items-center my-5">
		    <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('F:/React/React/my-app/src/img/rmituni.jpg')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
              <p style={{textAlignVertical: "justify",textAlign: "justify"}}>
			  <h1 class="font-weight-dark">MY EDUCATION</h1>
              <p> <h2>Master of Information Technology, RMIT University</h2> </p> 
              <p>•	SEH Indian Scholarship Recipient. </p>
			  <p>•	Completed coursework in Software Engineering Project Management [Agile Methodology], Change and Governance in IT, Data mining, Secure Electronic Commerce, Information System Risk Management and Cloud Computing.</p>
              <p>•	Worked in a cybersecurity project for 3 months in Saras.care, a non profitable organisation </p> 
            </p>
          </div>
        </div>
		<div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('F:/React/React/my-app/src/img/panimalar.jpg')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
              <p style={{textAlignVertical: "justify",textAlign: "justify"}}>
              <p> <h2>Bachelor's in Engineering: Computer Science and Engineering, Anna University, Chennai, India  </h2> </p> 
              <p>•  Secured first class with distinction (8.74 CGPA) and ranked <b> top 37 with Gold Medal </b> in overall Anna university</p>
			  <p>•	CSI Accredited Student, Computer Society of India</p>
              <p>•	Student Chairperson of IEEE Student Chapter - SYSTEMS, MAN & CYBERNETICS SOCIETY, Panimalar Engineering College</p> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;