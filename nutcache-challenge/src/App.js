import React from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import AddEmployee from './pages/AddEmployee/AddEmployee';
import DeleteEmployee from './pages/Delete/DeleteEmployee';
import EditEmployee from './pages/EditEmployee/EditEmployee';
import DeleteConfirmation from './pages/Delete/DeleteConfirmation';
import SeeMore from './pages/SeeMore/SeeMore';

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/AddEmployee" component={AddEmployee}/>
          <Route path="/EditEmployee/:id" component={EditEmployee}/>
          <Route path="/DeleteEmployee" component={DeleteEmployee}/>
          <Route path="/DeleteConfirmation" component={DeleteConfirmation}/>
          <Route path="/SeeMore" component={SeeMore}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
