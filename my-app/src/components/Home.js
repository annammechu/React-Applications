import React from "react";

//Home page
function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
			  style = {{ width: 500, height: 600 }}
              src = {require('C:/React/my-app/src/img/pic.jpg')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
		    <p style={{textAlignVertical: "right",textAlign: "right"}}><h1 class="font-weight-light"><b>Annapoorani subramani</b></h1></p>
            <p style={{textAlignVertical: "right",textAlign: "right"}}><b>Master's of Information technology</b> </p>
          </div>
		  
        </div>
      </div>
    </div>
  );
}

export default Home;