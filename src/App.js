import Room from "./Page/Room/Room"
import Details from "./Page/Details/Details"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Room}/>
        <Route exact path="/details" component={Details}/>
   
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
