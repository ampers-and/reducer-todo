import React from 'react';
import styled from 'styled-components';

//Styles
const Card = styled.div`
    width:200px;
    height:150px;
    background-color:lightgoldenrodyellow;
    color:black;
    margin:10px;
    padding:10px;
`;

export default function TodoCard(props) {

    console.log(props);
    
    const clickHandler = (event) => {
        props.toggleComplete(props.todo.id)
        event.target.style.textDecoration = 'line-through';
    }

    return(
        <Card>
            <h4 onClick={clickHandler}>{props.todo.item}</h4>
            <h6>{props.todo.timeCompleted}</h6>
        </Card>
    )
}