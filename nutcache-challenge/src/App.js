import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import EditEmployee from "./pages/EditEmployee/EditEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AddEmployee" component={AddEmployee} />
          <Route path="/EditEmployee" component={EditEmployee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
