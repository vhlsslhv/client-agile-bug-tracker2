import React from "react";
import { getProject, deleteProject } from "../../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Board from "../Board";


class Issues extends React.Component {
    state = {
        id: "",
        title: "",
        description: "",
        attachment: "",
        comments: [],
        status: "",   //to do | done | in progress | backlog | emergency
        dueDate: "", //date
        reporter: "", //username
        assignee: "", //username
    };




}

export default Issues;