import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {createBrowserHistory} from 'history';
import AddUser from "./components/add-user.component";
import User from "./components/user.component";
import AllUsers from "./components/all-users.component";
import LoginPage from "./components/login.component";

const history = createBrowserHistory();

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.removeItem("user");
    history.push('/');
    // this.props.history.push("/users");
    window.location.reload();
  }

  render() {
    let tokenItem = localStorage.getItem("user");
    // console.log(tokenItem, 'tokenItem')

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              shvabe-test
            </a>
            {(tokenItem) ? <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/users"} className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} onClick={this.logOut} className="nav-link">
                  LogOut
                </Link>
              </li>
            </div>
                : <Redirect to={{
                  pathname: '/',
                  state: {referrer: window.location.pathname}
                }}/>
            }
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/login"]} component={LoginPage} />
              <Route exact path="/users" component={AllUsers} />
              <Route exact path="/add" component={AddUser} />
              <Route path="/users/:id" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
