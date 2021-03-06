import React from "react";
import LandingPage from "./pages/landingpage";
import CoreValues from "./pages/aboutus/corevalues";
import Privacy from "./pages/aboutus/privacy";
import Terms from "./pages/aboutus/terms";
import ContactUs from "./pages/contact/contactus";
import Locations from "./pages/contact/locations";
import Events from "./pages/contact/events";
import SpecialEvents from "./pages/catering/special";
import EventRooms from "./pages/catering/rooms";
import CafeMenu from "./pages/menus/cafemenu";
import CakeMenu from "./pages/menus/cakemenu";
import Blog from "./pages/blog/";
import ManagerLogin from "./pages/managerDash/managerLogin";
import ManagerView from "./pages/managerDash/managerView";
import CateringMenu from "./pages/catering";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
    <Router>
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/core-values" component={CoreValues}/>
    <Route exact path="/privacy" component={Privacy}/>
    <Route exact path="/terms" component={Terms}/>
    <Route exact path="/contact-us" component={ContactUs}/>
    <Route exact path="/locations" component={Locations}/>
    <Route exact path="/contact-events" component={Events}/>
    <Route exact path="/special-events" component={SpecialEvents}/>
    <Route exact path="/event-rooms" component={EventRooms}/>
    <Route exact path="/catering-menu" component={CateringMenu}/>
    <Route exact path="/cafemenu" component={CafeMenu}/>
    <Route exact path="/cakemenu" component={CakeMenu}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/managerlogin" component={ManagerLogin}/>
    <Route exact path="/managerdashboard" component={ManagerView}/>
    </Switch>
    </Router>;

export default App;
