import React from 'react';
import './Drag.css';

function IssueDrag(props) {
    const drop = e=>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        
        const card = document.getElementById(card_id);
        card.style.display= "block";

        e.target.appendChild(card);
    };

    const dragOver = e=>{
        e.preventDefault();
    };

    return (
        <div 
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    );
};

export default IssueDrag;
