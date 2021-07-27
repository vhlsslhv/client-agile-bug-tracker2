import React from "react";
import { login } from "../../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(this.state);
      this.props.setLoggedInUser(user.data);
      toast.success("Login successful");
      this.props.history.push("/");
    } catch (error) {
      toast.error("Invalid login");
      console.log(error)
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <div className="auth">
          <nav className="login-wrapper">
            <div className="login-inner">
              <form onSubmit={this.handleFormSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                  <label>Username</label>
                  <input type="text" name="username" onChange={this.handleChange} value={username} className="form-control" placeholder="Enter your username" />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" onChange={this.handleChange} value={password} className="form-control" placeholder="Enter password" />
                </div>
                {/* Needs to reroute to the login projects */}
                <div className="form-group-button">
                  <Button type="submit" variant="outline-primary">Login</Button>
                </div>

                <p className="forgot-password text-right">
                  Don't have an account yet? <NavLink to="/signup">Signup</NavLink> here.
                </p>

              </form>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
export default Login;


/*


import React from "react";
import { login } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(this.state);
      this.props.setLoggedInUser(user.data);
      toast.success("Login successful");
      this.props.history.push("/");
    } catch (e) {
      toast.error("Invalid login");
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <NavLink to="/signup">Signup</NavLink>
        </p>
      </>
    );
  }
}
export default Login;





*/