import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar/Navbar";
import Keyfeature from "./Pages/Keyfeature";
import Pricing from "./Pages/Pricing";
import Testimonials from "./Pages/Testimonials";
import Demo from "./Pages/Demo";
function App() {
  return (
    <>
    <div className='container' >
    {/* <Router> */}
      <Navbar/>
      <Home/>
      <Pricing/>
      <Testimonials/>
      {/* <switch>
      <Route path="/" component={Home}/>
      <Route path="/features" component={Keyfeature}/>
      <Route path="/testimonials" component={Testimonials}/>
      <Route path="/demo" component={Demo}/>
      </switch>
    </Router>  */}
      </div>
  
    </>
  );
}

export default App;
