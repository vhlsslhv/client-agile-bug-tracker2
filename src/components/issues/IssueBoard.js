import React, { useState } from 'react';
import './Drag.css';
import IssueDrag from './IssueDrag';
import Issue from "./Issue";

function IssueBoard({ id, className, draggable, children}) {

    const [issues, SetIssues] = useState([]);

/*     state = {
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
    }; */

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

        return (
            <>
                <div
                    id={id}
                    className={className}
                    draggable={draggable}
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                >
                    {children}
                </div>

                <main className="flexbox">

                <IssueDrag id="board-1" className="board">
                    <Issue id="card-1" className="card" draggable="true">
                        <p>Card one</p>
                    </Issue>
                </IssueDrag>

                <IssueDrag id="board-2" className="board">
                    <Issue id="card-2" className="card" draggable="true">
                        <p>Card two</p>
                    </Issue>
                </IssueDrag>

                <IssueDrag id="board-3" className="board">
                    <Issue id="card-3" className="card" draggable="true">
                        <p>Card three</p>
                    </Issue>
                </IssueDrag>

                <IssueDrag id="board-4" className="board">
                    <Issue id="card-4" className="card" draggable="true">
                        <p>Card four</p>
                    </Issue>
                </IssueDrag>

                <IssueDrag id="board-5" className="board">
                    <Issue id="card-5" className="card" draggable="true">
                        <p>Card five</p>
                    </Issue>
                </IssueDrag>

            </main>


            </>
        )
    }


export default IssueBoard;