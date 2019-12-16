import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import Login from './login';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import { Login, Signup, TodoList } from './components';
class App extends Component {
  render() {
    return (
      <div className="App">
<Router>
       <Switch>
          <Route path='/todo' component={TodoList}/>
          <Route path='/login' exact component={Login}/>
          {/* <Route path="/signup" exact component={Signup} /> */}
        </Switch>
      </Router>
      </div>
    );
  }
}
export default App;
