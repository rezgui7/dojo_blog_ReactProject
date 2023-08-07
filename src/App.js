import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './blogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contaner">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/Create'>
              <Create/>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;