import React from "react";
import { getAllBoards } from "../api";
import { NavLink } from "react-router-dom";
import IssueDrag from './issues/IssueDrag';
import Issue from './issues/Issue';


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
                  <div class="issue-card">
                    <div class="card-header">
                      <div class="text-center" key={board._id}>
                        <NavLink to={`/Boards/${board._id}`}>
                          {board.title}
                        </NavLink>
                      </div>
                      <ul class=" justify-content-centerlist-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">
                          <IssueDrag id="board-1" className="board">
                            <Issue id="card-1" className="card" draggable="true">
                              <p>Card one</p>
                            </Issue>
                          </IssueDrag></li>
                        <li class="list-group-item">
                          <IssueDrag id="board-2" className="board">
                            <Issue id="card-2" className="card" draggable="true">
                              <p>Card two</p>
                            </Issue>
                          </IssueDrag></li>
                      </ul>
                      <div class="card-footer">
                        <button to={`/Boards/${board._id}`} type="button" class="btn btn-outline-primary">Add a new issue</button>
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