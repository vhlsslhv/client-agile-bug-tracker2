import React from "react";
import JiraApi from 'jira-client';
import { NavLink } from "react-router-dom";


class Issue extends React.Component {
    state = {
        jiraIssue: null
    }
    componentDidMount() {
        const jira = new JiraApi({
            protocol: 'https',
            host: 'jira.somehost.com',
            username: 'username',
            password: 'password',
            apiVersion: '2',
            strictSSL: true
          });
        jira.findIssue(12) //Id to be found?
        .then(issue => {
          console.log(`Status: ${issue.fields.status.name}`);
          this.setState({ jiraIssue: issue })
        })
        .catch(err => {
          console.error(err);
        });
    }
    render() {
        return (
            <>
            {this.state.jiraIssue ? <p>{this.state.jiraIssue}</p> : <p>
                No issue</p>}
            </>
        )
    }
}
export default Issue;