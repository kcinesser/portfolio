import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/pages/Homepage/Homepage";
import Project from "./components/pages/Project/Project";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/:slug" exact component={Project} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
