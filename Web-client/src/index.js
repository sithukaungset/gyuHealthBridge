import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Patient from './patient'
import Record from './record'
import './index.css'

const FullApp = () => (
  <Router>
    <div>
    <header className="App-header">
          <h1 className="App-title text-center">HealthCare FHIR</h1>
        </header>
      <Route path="/" component={Patient} />
      <Route path="/record" component={Record}/>

    </div>
  </Router>
);
class App extends React.Component {
  
  render() {
    return (
      <div>

      </div>

    );
  }
}

ReactDOM.render(<FullApp />, document.getElementById('root'));
