import React from 'react';

export default function TodoCard(props) {

    console.log(props);
    
    const clickHandler = (event) => {
        props.toggleComplete(props.todo.id)
        event.target.style.textDecoration = 'line-through';
    }

    return(
        <div className='todo'>
            <h2 onClick={clickHandler}>{props.todo.item}</h2>
            <p>{props.todo.timeCompleted}</p>
        </div>
    )
}