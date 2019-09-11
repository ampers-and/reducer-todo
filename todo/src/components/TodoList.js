import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

import InitialState from '../reducers/initialState';
import reducer from '../reducers/Reducer';

import TodoCard from './TodoCard';

//Styles
const Button = styled.button`
    width:fit-content;
    background-color:salmon;
    font-size:16px;
    color:white;
    border: solid 1px white;
    border-radius:6px;
    margin:10px;
    padding:10px;
`;

const Input = styled.input`
    width:200px;
    padding:10px;
    font-size:20px;
    border: solid 2px salmon;
    border-radius:6px;
    color:salmon;
`;


export default function TodoForm() {

    const [newTodo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(reducer, InitialState);
    console.log(state);

    const handleInput = event => {
        setNewTodo(event.target.value);
    };

    const handleSubmit = () => {
        dispatch({ type: 'ADD', payload:newTodo});
        setNewTodo('');
    }

    const toggleComplete = id => {
        dispatch({ type: 'TOGGLE-COMPLETED', payload:id})
    }

    const clearCompleted = () => {
        dispatch({ type:'CLEAR-COMPLETED'})
    }

    return(
        <div>
                <div className='todo-list'>
                    {state.todos.map( a => (
                        <TodoCard 
                            key={a.id}
                            todo={a}
                            toggleComplete={toggleComplete}/>
                    ))}
                </div>

                <div>
                    <Input
                    type='text'
                    name='newtodo'
                    placeholder='Add New Todo'
                    value={newTodo}
                    onChange={handleInput}
                    />
                    <div>
                        <Button 
                            onClick={handleSubmit}>
                            Add Todo
                        </Button>
                        <Button 
                            onClick={clearCompleted}>
                            Clear Completed
                        </Button> 
                    </div>
                </div> 
        </div>
    )
}