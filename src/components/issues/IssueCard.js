import React from "react";


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

    render() {
        return (
            <>
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
            </>
        )
    }
}

export default IssueCard;