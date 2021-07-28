import React from "react";
import { updateProject, getProject } from "../../api";
import { toast } from "react-toastify";

class UpdateProject extends React.Component {
  state = {
    id: "",
    title: "",
    description: "",
  };

  async componentDidMount() {
    const response = await getProject(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      title: response.data.title,
      description: response.data.description,
      
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateProject(this.state);
    toast.success("Project updated");
    this.props.history.push(`/projects/${this.state.id}`);
  };

  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>

        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={title}
        />

        <label>Description</label>
        <textarea value={description} onChange={this.handleChange} name="description" class="form-control" aria-label="With textarea"></textarea>
        {/* <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        /> */}
        
        <button type="submit" class="btn btn-outline-success">Update</button>
      </form>
    );
  }
}

export default UpdateProject;
