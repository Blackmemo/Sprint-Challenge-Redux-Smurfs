import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SmurfList from '../components/SmurfList';
import './App.css';
import AddSmurf from './AddSmurf';
import UpdateSmurf from './UpdateSmurf';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '20px'
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <nav>
        <p>
        <Link style={linkStyle} to='/'>Home</Link>
        </p>
        <p>
        <Link style={linkStyle} to='/add'>Add a Smurf</Link>
        </p>
        </nav>
        <Route exact path="/" component={SmurfList} />
        <Route path="/update/:id" component={UpdateSmurf} />
        <Route path="/add" component={AddSmurf} />
      </div>
      </Router>
    );
  }
}

export default App;
