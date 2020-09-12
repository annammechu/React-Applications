import React from "react";

//Recommendation page
function Recommendation() {
  return (
    <div className="recommendation">
      <div class="container">
        <div class="row align-items-center my-5">
         <p><h1 class="font-weight-light"><b>My Recommendation</b></h1></p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
			  style = {{ width: 500, height: 300 }}
              src={require('F:/React/React/my-app/src/img/recommendation.jpg')}
              alt=""
            />
        </div>
      </div>
    </div>
  );
}

export default Recommendation;