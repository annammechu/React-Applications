import React from "react";
import ReactDOM from "react-dom";
import { Button } from '@material-ui/core';

//Contact page with form

class MyForm extends React.Component 
{
	render() {
    return (
      <form >
      <p> </p>       
	   <p>If you would like a call back</p>
        <p>
		<b>Enter your name:</b>
		</p>
        <input
          type="text"
	    />
		<p>
		<b>Enter your Phone number:</b>
		</p>
        <input
          type="value"
        />
		<p> </p>
		<p><App /></p>
	  </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));


function Contact() {
  return (
  
  <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-9">
            <h1 class="font-weight-light" 
			    style={{textAlignVertical: "right",textAlign: "right"}}>
				YOU CAN REACH ME AT  </h1>
            <p>
			 <h2>Cellphone: 0432869244 </h2>
            </p>
			<p>
			 <h2>Email: annapoorani.visalachi@gmail.com </h2>
            </p>
			<p>
			 <h2>Linkedin: https://www.linkedin.com/in/annapoorani-subramani-905499140/ </h2> 
            </p>
			<MyForm />
          </div>
        </div>
      </div>
    </div>
	
 );
}

//button using UI material
function App() {
  return <Button onClick={() => { alert('Values beat experience, when experience doesnt work hard. So please HIRE ME... !!!') }}>Click me </Button>;
}



export default Contact;

