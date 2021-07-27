import "./App.css";
import ListProjects from "./components/project/ListProjects";
import AddProject from "./components/project/AddProjects";
import TheNavbar from "./components/Navbar";
import ProjectDetails from "./components/project/ProjectDetails";
import UpdateProject from "./components/project/UpdateProject";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Board from "./components/Board";
import Navbar from 'react-bootstrap/Navbar';
/* import PrivateRoute from "./components/PrivateRoute"; */


import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Link } from "react-router-dom";
import { loggedIn } from "./api";
import React from "react";


class App extends React.Component {
  state = {
    loggedInUser: null,
  };


  setLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };


  //In case the page is refreshed I check if there's
  //an active session on the backend
  async componentDidMount() {
    const response = await loggedIn();
    if (!this.state.loggedInUser) {
      if (response.data._id) {
        this.setLoggedInUser(response.data);
      }
    }
  }

  render() {
    return (
      <>

        <TheNavbar
          loggedInUser={this.state.loggedInUser}
          setLoggedInUser={this.setLoggedInUser}
        />
        <Switch>

          <Route exact path="/login"
            render={(props) => {
              return (
                <Login {...props} setLoggedInUser={this.setLoggedInUser} />
              );
            }}
          />
          <Route exact path="/signup" component={Signup} />

        </Switch>


        <ToastContainer />



        <ToastContainer />
        <Switch>
          <Route exact path={["/", "/projects"]} component={ListProjects} />
          <Route exact path="/projects/add" component={AddProject} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/board" component={Board} />
          <Route exact path="/projects/:id/edit" component={UpdateProject} />
        </Switch>

      </>
    );
  }
}


export default App;