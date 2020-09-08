import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Education, Experience } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
		//path to the components
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
		  <Route path="/education" exact component={() => <Education />} />
		  <Route path="/experience" exact component={() => <Experience />} />
		</Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
