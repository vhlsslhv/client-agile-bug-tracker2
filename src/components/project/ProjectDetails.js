import React from "react";
import { getProject, deleteProject } from "../../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Board from "../Board";


class ProjectDetails extends React.Component {
    state = {
        id: "",
        title: "",
        description: "",
        imageUrl: "",
        boards: []
    };


    async componentDidMount() {
        const response = await getProject(this.props.match.params.id);
        this.setState({
            id: response.data._id,
            title: response.data.title,
            description: response.data.description,
            imageUrl: response.data.imageUrl,
            boards: response.data.boards
        });
    }


    /* handleCreateIssue = async () => {
        await createIssue(this.state.id);
        toast.success("Issue deleted.");
        this.props.history.push("/");
    }; */

    handleDeleteProject = async () => {
        await deleteProject(this.state.id);
        toast.success("Project deleted.");
        this.props.history.push("/");
    };


    render() {
        const { id, title, description, imageUrl, boards } = this.state;
        return (
            <>
                <div className="container-md-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="proj-details">
                                <div class="d-grid gap-3">
                                    <div class="    m-3 p-1 bg-light border"><h4>Project Name: </h4> <h6>{title}</h6></div>
                                    <div class="mx-3 p-1 bg-light border"><h4>Project Description: </h4> <h6>{description}</h6></div>
                                    
                                </div>
                                
                                
                                {imageUrl && (<img style={{ width: "100px" }} src={imageUrl} alt="project" />)}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="proj-details-buttons">
                                <button className="btn btn-primary" onClick={this.handleCreateIssue}>Create new issue</button>  
                                <button className="btn btn-outline-secondary" onClick={() => {
                                    this.props.history.push(`/projects/${id}/edit`);
                                }}> Edit project</button>   {/* Add handleCreate */}
                                <button className="btn btn-outline-danger" onClick={this.handleDeleteProject}>Delete project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-md">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="d-flex justify-content-around">
                                <Board boards={boards} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default ProjectDetails;
