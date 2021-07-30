import React from "react";
import { getProject, deleteProject, addIssue } from "../../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Board from "../Board";
import IssueBoard from "../issues/IssueBoard";


class ProjectDetails extends React.Component {
    state = {
        id: "",
        title: "",
        description: "",
        imageUrl: "",
        boards: [],
        Issue: []
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


    /*     handleaddIssue = async () => {
            await createIssue(this.state.id);
            toast.success("Issue created.");
            this.props.history.push("/");
        }; 
     */

    handleDeleteProject = async () => {
        await deleteProject(this.state.id);
        toast.success("Project deleted.");
        this.props.history.push("/");
    };


    render() {
        const { id, title, description, imageUrl, boards } = this.state;
        return (
            <>
                <div className="row">
                    <div className="container-md-fluid">
                        <div className="col-md-4">
                            <div className="proj-details">
                                <div class="d-grid gap-3">
                                    <div class=" mt-3 mx-auto p-1 bg-light border"><h4>Project Name: </h4> <h6>{title}</h6></div>
                                    <div class="mx-auto p-1 bg-light border"><h4>Project Description: </h4> <h6>{description}</h6></div>
                                </div>
                                {imageUrl && (<img style={{ width: "100px" }} src={imageUrl} alt="project" />)}
                                <div class="proj-details-buttons d-flex flex-wrap bd-highlight ms-5 mb-3">
                                    <div class="p-2 bd-highlight">
                                        <button className="btn btn-outline-secondary" onClick={() => {
                                            this.props.history.push(`/projects/${id}/edit`);
                                        }}> Edit project
                                        </button>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button className="btn btn-outline-danger" onClick={this.handleDeleteProject}>Delete project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-md">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="d-flex justify-content-around">
                                <Board boards={boards} />
                                {/* <IssueBoard/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="proj-details-buttons d-flex bd-highlight mb-3">
                    <div class="mx-auto p-2 bd-highlight">
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            this.props.history.push(`/issues/new/${this.props.match.params.id}`);
                        }}>Create new issue
                        </button>
                    </div>
                </div>
            </>
        );
    }
}


export default ProjectDetails;


