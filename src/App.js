import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import Footer from "./components/Footer/Footer";
import AllCourses from "./components/AllCourses/AllCourses";
import AllPartnership from "./components/AllPartnership/AllPartnership";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allcourses">
            <AllCourses></AllCourses>
          </Route>
          <Route path="/aboutussection">
           <AboutUsSection></AboutUsSection>
          </Route>
          <Route path="/allpartnerShip">
              <AllPartnership></AllPartnership>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;