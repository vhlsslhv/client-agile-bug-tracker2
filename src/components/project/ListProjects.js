import React from "react";
import { getAllProjects } from "../../api";
import { NavLink } from "react-router-dom";
import "./Projects.css";

class ListProjects extends React.Component {
  state = {
    projects: [],
  };

  async componentDidMount() {
    const response = await getAllProjects();
    console.log("response.data", response.data)
    this.setState({
      projects: response.data,
    });

    console.log("response.data", response.data)
  }

  render() {
    const { projects } = this.state;
    return (
      <>
        <div class="container-fluid">
          <div class="col-md-6 row">
            <h2>List of Projects</h2>
            <ul >
              {projects.map((project) => {
                return (
                  <li key={project._id}>
                    <div class="project-card">
                      <h5 class="card-title"><NavLink to={`/projects/${project._id}`}>
                        {project.title}
                      </NavLink> </h5>
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ListProjects;


