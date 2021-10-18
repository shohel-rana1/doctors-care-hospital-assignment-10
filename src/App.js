import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Departments from './Pages/Departments/Departments';
import Consultants from './Pages/Consultants/Consultants';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';

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
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/departments">
            <Departments></Departments>
          </Route>
          <Route path="/consultants">
            <Consultants></Consultants>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
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
