import React from "react";
import { addIssue, uploadFile } from "../../api";
import { toast } from "react-toastify";


class IssueCard extends React.Component {

    state = {
        Issues: [{
            id: "",
            title: "",
            description: "",
            attachment: "",
            comments: [],
            status: "",   //to do | done | in progress | backlog | emergency
            dueDate: "", //date
            reporter: "", //username
            assignee: "",
        }],
    };


    handleFormSubmit = async (event) => {
        event.preventDefault();
    
    /*     const uploadData = new FormData();
        uploadData.append("image", this.state.imageUrl);
    
        const response = await uploadFile(uploadData); */
    
        const newIssue = {
          title: this.state.title,
          description: this.state.description,
        };

        await addIssue(projects);
        toast.success("Issue created");
        this.props.history.push(`/projects/${projects.id}`);
      };

    render() {
        return (
            <>
                <form className="issue-card-body">
                    <div>
                        <label>Issue Title</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>Issue description</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>Issue Attachment</label>
                        <input type="file"></input>
                    </div>
                </form>
                <form className="issue-card-body">
                    <div>
                        <label>Assignee</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>Reporter</label>
                        <input type="text" ></input>
                    </div>

                    <div>
                        <label>Due date</label>
                        <input type="date"></input>
                    </div>
                </form>
                <div class="btn-group">
                    <button type="submit" class="btn btn-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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

            </>
        )
    }
}

export default IssueCard;