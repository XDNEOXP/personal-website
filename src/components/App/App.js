import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
             <Route exact path="/">
                <Home />
             </Route>
             <Route path="/about">
                <About />
             </Route>
             <Route path="/portfolio">
                <Portfolio />
             </Route>
             <Route path="/contact">
                <Contact />
             </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
