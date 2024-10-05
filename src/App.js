//import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePage/Home";
import About from "./About/About";
import Contact from "./Contact_page/Contact";
import Signup from "./SignupPage/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  //useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/SignuP" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
