import React from "react";
import { getAllBoards } from "../api";
import { NavLink } from "react-router-dom";


class Board extends React.Component {
  render() {
    return (
      <>
        <div class="container-fluid">
          <div class="col-md-12">
            <h2 class="d-flex justify-content-center">Project Boards</h2>
            <div style={{ display: "inline-flex" }}>
              {this.props.boards.map((board) => {
                return (
                  <div key={board._id}>
                    <NavLink to={`/Boards/${board._id}`}>
                      {board.title}
                    </NavLink>
                    <div class="issue-card">
                      <div class="card-header">
                       to pass the board link
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                      </ul>
                      <div class="card-footer">
                        <button type="button" class="btn btn-outline-primary">Add a new issue</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </>
    );
  }
}


export default Board;