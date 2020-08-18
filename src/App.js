import React from "react";
import ShowList from "./components/ShowList";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import ShowPage2 from "./components/ShowPage2";
import "./index.css"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/show/:id">
            <ShowPage2 />
          </Route>

          <Route path="/" exact>
            ShowList: <ShowList />
          </Route>

          <Router>
            <div>404 not found</div>
          </Router>
        </Switch>
      </Router>
    );
  }
}

export default App;
