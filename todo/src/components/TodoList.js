import React, { useState, useReducer } from 'react';

import InitialState from '../reducers/initialState';
import reducer from '../reducers/Reducer';

import TodoCard from './TodoCard';

export default function TodoForm() {

    const [newTodo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(reducer, InitialState);
    console.log(state);

    const handleInput = event => {
        setNewTodo(event.target.value);
    };

    const handleSubmit = event => {
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
                    <input
                    type='text'
                    name='newtodo'
                    value={newTodo}
                    onChange={handleInput}
                    />
                    <button 
                        onClick={handleSubmit}>
                        Add Todo
                    </button>
                    <button 
                        onClick={clearCompleted}>
                        Clear Completed
                    </button>
                </div> 
        </div>
    )
}