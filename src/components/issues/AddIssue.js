import React from "react";
import { addIssue } from "../../api";
import { toast } from "react-toastify";
import './IssueCreator.css';


class AddIssue extends React.Component {

    state = {
        title: "",
        description: ""
    };


    handleFormSubmit = async (event) => {
        event.preventDefault();

        /*     const uploadData = new FormData();
            uploadData.append("image", this.state.imageUrl);
        
            const response = await uploadFile(uploadData); */

        const newIssue = {
            title: this.state.title,
            description: this.state.description
        };

        await addIssue(newIssue, this.props.match.params.id);

        toast.success("Issue created");
        this.props.history.push("/");
    };

    handleChangeFile = (event) => {
        this.setState({
            imageUrl: event.target.files[0],
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    

    render() {
        const { title, description, status, attachment, assignee, reporter, dueDate, project, board, id } = this.state;
        return (
            <>
                <h3>Issue Creator</h3>
                <form onSubmit={this.handleFormSubmit} className="issue-card-body" encType="multipart/form-data">
                    <div className="issue-card-body">
                        <label  className="justify-content me-2">Issue Title:</label>
                        <input className="justify-content me-2"
                            type="text"
                            onChange={this.handleChange}
                            name="title"
                            value={title}

                        />
                    </div>

                    <div>
                        <label className="justify-content me-2">Issue description:</label>
                        <input className="justify-content me-2"
                            type="text"
                            onChange={this.handleChange}
                            name="description"
                            value={description}

                        />
                    </div>

                    <div>
                        <label className="justify-content me-2">Issue Attachment:</label>
                        <input className="justify-content me-2" type="file" name="attachment" onChange={this.handleChangeFile} />
                    </div>
                </form>
                <form onSubmit={this.handleFormSubmit} className="issue-card-details" encType="multipart/form-data">
                    <div className="justify-content-center">
                        <label className="justify-content me-2">Assignee:</label>
                        <input className="justify-content me-2"
                            type="text"
                            onChange={this.handleChange}
                            name="assignee"
                            value={assignee}
                        />
                        <label className="justify-content me-2">Reporter:</label>
                        <input className="justify-content me-2"
                            type="text"
                            onChange={this.handleChange}
                            name="reporter"
                            value={reporter}
                        />


                    </div>
                    <div className="pt-3">
                        <label className="justify-content me-2">Due date:</label>
                        <input className="justify-content me-2"
                            type="date"
                            onChange={this.handleChange}
                            name="dueDate"
                            value={dueDate}
                        />
                        <button type="submit" className="btn btn-secondary btn-sm dropdown-toggle mx-auto justify-content me-2" data-bs-toggle="dropdown" aria-expanded="false">
                            Assign to a board
                        </button>
                        <div class="dropdown-menu mx-auto">
                            <li>To do</li>
                            <li>In proggress</li>
                            <li>Done</li>
                            <li>Backlog</li>
                            <li>Emergency</li>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div class="btn-group ">
                    <button type="submit" className="btn btn-outline-success justify-content me-2">Create Issue</button>
                </div>
                </form>
               

            </>
        )
    }
}

export default AddIssue;

/* <div className="auth">
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
                </div> */
/* Needs to reroute to the login projects */
/* <div className="form-group-button">
                  <Button type="submit" variant="outline-primary">Login</Button>
                </div>

                <p className="forgot-password text-right">
                  Don't have an account yet? <NavLink to="/signup">Signup</NavLink> here.
                </p>

              </form>
            </div>
          </nav>
        </div>  */