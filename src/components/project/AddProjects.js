import React from "react";
import { addProject, uploadFile } from "../../api";
import { toast } from "react-toastify";

class AddProject extends React.Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    /*     const uploadData = new FormData();
        uploadData.append("image", this.state.imageUrl);
    
        const response = await uploadFile(uploadData); */

    const newProject = {
      title: this.state.title,
      description: this.state.description,
    };

    await addProject(newProject);

    toast.success("Project created");
    this.props.history.push("/");
  };

  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <>
        <div class="container-fluid">
          <div class="row">
              <h2 className="text-center mt-3 ms-5">Add Project</h2>
            <div class="d-flex justify-content-center my-4">

              <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                <label className="justify-content me-2">Title:</label>
                <input className="justify-content me-2"
                  type="text"
                  onChange={this.handleChange}
                  name="title"
                  value={title}
                />
                <label className="justify-content me-2">Description:</label>
                <input className="justify-content me-2"
                  type="text"
                  onChange={this.handleChange}
                  name="description"
                  value={description}
                />
                <label className="justify-content me-2">Project image</label>
                <input className="justify-content me-2 mb-3" type="file" name="image" onChange={this.handleChangeFile} />
                <br/>
                <button type="submit" className="btn btn-outline-success justify-content">Create project</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddProject;
