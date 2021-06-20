
import './App.css';
import Hero from './Hero.js'
import Footer from './Footer.js'
import Radisson from "./Agra/RadissonBlue.js"
import Le from "./Agra/lemeridian.js"
import Vivanta from "./Agra/vivanta.js"
import Card from './card-ui'
import Navbar from './Navbar.js';
import PersonalInfo from './Form.js'
import { BrowserRouter as Router,Switch,Link} from "react-router-dom";
import Jaipur from "./Jaipur/Jaipur1.js";
import Agra from "./Agra/Navbar1.js";
import Route from 'react-router-dom/Route';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home.js';

function App() {
  return (
  <div className="App">
     <Navbar/>
     <Router>
     <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/card" component={Card}/>
        <Route exact path="/hero" component={Hero}/>
        <Route exact path="/form" component={PersonalInfo}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/navbar" component={Navbar}/>
        <Route exact path="/jaipur" component={Jaipur}/>
        <Route exact path="/agra" component={Agra}/>
        <Route exact path="/radisson" component={Radisson}/>
        <Route exact path="/lemeridian" component={Le}/>
        <Route exact path="/vivanta" component={Vivanta}/>
        </Switch>
        </Router>
    </div>
);
}

export default App;
