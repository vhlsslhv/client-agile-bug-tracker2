import React from "react";
import { getProject, deleteProject } from "../../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Board from "../Board";
import {getAllIssues, getAllBoards} from "../../api"


/*         id: "",
        title: "",
        description: "",
        attachment: "",
        comments: [],
        status: "",   
        dueDate: "", 
        reporter: "",
        assignee: "",  */

class Issue extends React.Component {
    state = {
        issues:[],
        boards:[],

    };

    async componentDidMount(){
        const response = await getAllIssues();
        const response2 = await getAllBoards();
        this.setState({
            issues: response.data,
            boards: [response2.data[0]],
        });
    }

    render() {
        return (
            <>
            {/* <h2>Issues</h2> */}
            <ul>
            {this.state.issues.map((issue) => {
            return (
            <li key={issue._id}>
                 <NavLink to={`/issues/${issue._id}`}>
                    {issue.title}
                </NavLink> 
            </li>   
            );
            }
            )}
            </ul>
            </>
        )
    }
    
    
}

export default Issue;
{/*                 <div className="container">
                    <div className="issue-card-body">
                        <div>Issue Title</div>
                        <div>Issue Attachment</div>
                        <div>Issue description</div>
                    </div>
                    <div className="issue-card-details">
                        <div>Assignee</div>
                        <div>Reporter</div>
                        <div>Due date</div>
                        <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Assign to a board
                            </button>
                            <ul class="dropdown-menu">
                                <li>To do</li>
                                <li>In proggress</li>
                                <li>Done</li>
                                <li>Backlog</li>
                                <li>Emergency</li>
                            </ul>
                        </div>
                    </div>
                </div> */}