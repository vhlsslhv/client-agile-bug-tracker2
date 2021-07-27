import React from "react";
import { signup } from "../../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Auth.css";

/* import { ConsoleWriter } from "istanbul-lib-report";
 */
class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        email: "",
        photo: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await signup(this.state);
            toast.success("Sign up successful");
            this.props.history.push("/login");
        } catch (e) {
            toast.error("Not possible to signup");
            console.log(e)
        }
    };

    render() {
        const { username, password, email, photo } = this.state;
        return (
            <>
                <div className="auth">
                    <nav className="signup-wrapper">
                        <div className="signup-inner">
                             
                                <form onSubmit={this.handleFormSubmit}>
                                    <h3>Sign Up</h3>

                                    <div className="form-group">
                                        <label>Profile Picture</label>
                                        <input type="file" name="photo" onChange={this.handleChange} value={photo} className="form-control" placeholder="No file uploaded yet..." required />
                                    </div>

                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" onChange={this.handleChange} value={username} className="form-control" placeholder="Choose a username" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" name="email" onChange={this.handleChange} value={email} className="form-control" placeholder="Enter a valid email" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" onChange={this.handleChange} name="password" value={password} className="form-control" placeholder="Enter your password" required />
                                    </div>

                                    <div className="form-group-button">
                                        <Button type="submit" variant="outline-primary">Sign Up</Button>
                                    </div>

                                    <p className="forgot-password text-right">
                                        Already have an account? Simply <NavLink to="/login">login</NavLink> here.
                                    </p>
                                </form>
                            
                        </div>
                    </nav>
            </div>
            </>
                    );
    }
}
export default Signup;





/*

import React from "react";
import { signup } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
class Signup extends React.Component {
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
      await signup(this.state);
      toast.success("Sign up successful");
      this.props.history.push("/login");
    } catch (e) {
      toast.error("Not possible to signup");
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
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </>
    );
  }
}
export default Signup;

*/