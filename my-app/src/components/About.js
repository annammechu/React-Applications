import React from "react";

//About page
function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <div>
			<img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('C:/React/my-app/src/img/cert.PNG')}
              alt=""
            />
			</div>
			<div>
			<img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('C:/React/my-app/src/img/cert2.PNG')}
              alt=""
            />
          </div>
		  </div>
		    <div class="col-lg-5">
            <h1 class="font-size: 11px; font-weight-dark">About ME !!!</h1>
            <p style={{textAlignVertical: "justify",textAlign: "justify"}}>
              <h1>Career summary</h1>
			  <p> I am Annapoorani Subramani a recent IT graduate with masters from RMIT University specialised in Software development and Business analysis.I enjoy innovation and love to experiment with different ideas, and known for inspiring and devising original, thought-provoking concepts. I have an artistic eye and strong work ethic, but also like to foster an element of fun.   </p>	
              <p><b>My SKILLS are:</b> </p>
			  <p><b>LANGUAGES</b> </p>
			  <p>•	Java, Spring MVC, JavaScript, Junit, Python, C, C++, ASP.net 3.1, Shopify</p>
			  <p>•	HTML, CSS, React.js, PHP, Linux, Unix</p>
              <p>
			  <b> TECHNOLOGIES </b>
			  </p>
			  <p>•	Amazon Web Service, Google Cloud Platform </p>
			  <p>•	SQLite Studio, jQuery, MySQL, SQLServer, Oracle, WEKA </p>
			  <p>•	Selenium, JMeter, GIT, Eclipse IDE, Apache Tomcat Server </p>
			  <p>•	Lucid Charts - UML Modelling and Designing </p>
			  <p>•	Scrum Tools - Trello, SVN, JIRA, Kanban, Atlassian Suite, Notion</p>
			  <p> 
			  <b> FRAMEWORKS </b>
			  </p>
              <p>•	Agile / SCRUM </p>
			  <p>•	OWASP SAMM, COBIT, VALIT</p>
			  <p> 
			  <b> MANAGEMENT SKILLS</b>
			  </p>
              <p>•	Change management</p>
			  <p>•	Risk Assessment</p>
			  <p> 
			  <b> SOFT SKILLS</b>
			  </p>
              <p>•	Team Player</p>
			  <p>•	Communication including public speaking</p>
              <p>•	Time Management</p>
			  <p>•	Planning and problem solving</p>
            </p>
		</div>
		<p>  </p>
		<p><h1 class="font-weight-light"><b>My Recommendations</b></h1></p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
			  style = {{ width: 500, height: 300 }}
              src={require('C:/React/my-app/src/img/recommendation.jpg')}
              alt=""
            />
        </div>
      </div>
    </div>
  );
}

export default About;