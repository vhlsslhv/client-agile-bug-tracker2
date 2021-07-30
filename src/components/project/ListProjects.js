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
        <div className="container">
          <div className="row">
            <div class="col-md-4">
              <h2 className="d-flex justify-content-center my-4">List of Projects</h2>
              <div className="flexbox-project-cards" style={{ display: "inline-flex" }} >
                {projects.map((project) => {
                  return (
                    <div className="project-card align-items-space-b my-3 mx-3" key={project._id}>
                      <h5 className="card-title text-center my-1"><NavLink to={`/projects/${project._id}`}>
                        {project.title}
                      </NavLink> </h5>
                      {/* <img height="100px" width="100px" src={`/projects/${project._id}/${project.imageUrl}`} class="card-img-top" alt="project logo" /> */}
                      <div className="card-body text-center">
                        <p className="card-text">Some project description to go here</p>
                        <div className="card-button">
                          <div className="btn btn-primary">
                            <NavLink style={{ color: "azure" }} to={`/projects/${project._id}`}>View Issues</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListProjects;


