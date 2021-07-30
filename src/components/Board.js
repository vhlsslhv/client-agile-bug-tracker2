import React from "react";
import { getAllBoards } from "../api";
import { NavLink } from "react-router-dom";
import IssueDrag from './issues/IssueDrag';
import Issue from './issues/Issue';


class Board extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-12">
          <h2 className="d-flex justify-content-center">Project Boards</h2>
          <div style={{ display: "inline-flex" }}>
            {this.props.boards.map((board, index) => {
              return (
                <div className="issue-card">
                  <div className="card-header">
                    {/* <div className="text-center" key={board._id}>
                        <h4 to={`/Boards/${board._id}`}>
                          {board.title}
                        </h4>
                      </div> */}
                    <div className=" justify-content-centerlist-group list-group-flush">
                      <div className="list-group-title">{board.title}</div>
                      <div className="list-group-item">
                        <IssueDrag id="board-1" className="board">
                          {board.issues.map((issue) => {
                            return (<div id="card-1" className="card" draggable="true">
                              <p>{issue.title}</p>
                            </div>)
                          })}
                        </IssueDrag>
                      </div>
                    </div>
                  </div>
                </div>
              );

            })}

          </div>
        </div>
      </div>
    );
  }
}


export default Board;