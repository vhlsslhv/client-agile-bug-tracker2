import React from "react";
import { updateIssue, getIssue } from "../../api";
import { toast } from "react-toastify";

class UpdateIssue extends React.Component {
  state = {
    id: "",
    title: "",
    description: "",
    type: ""
  };

  async componentDidMount() {
    const response = await getIssue(this.props.match.params.id);
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
    await updateIssue(this.state);
    toast.success("Issue updated");
    this.props.history.push(`/issues/${this.state.id}`);
  };

  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className="issue-card-body" encType="multipart/form-data">
        <div>
          <label className="justify-content me-2">Title:</label>
          <input className="justify-content me-2"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
        </div>
        <div>
          <label className="justify-content me-2">Description:</label>
          <textarea value={description} onChange={this.handleChange} name="description" class="form-control" className="justify-content me-2" aria-label="With textarea"></textarea>
          {/* <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        /> */}
        </div>
        <div>
          <button className="justify-content me-2" type="submit" class="btn btn-outline-success">Update</button>
        </div>
      </form>
    );
  }
}

export default UpdateIssue;
