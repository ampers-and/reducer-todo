import React, { useReducer } from 'react';

import InitialState from '../reducers/initialState';
import reducer from '../reducers/Reducer';

export default function TodoList() {

    const [state, disptch] = useReducer(reducer, InitialState);
    console.log(state);

    return(
        <div>
            <div className='todo-list'>
                {state.map( a => (
                    <h2> {a.item} </h2> 
                ))}
            </div>
        </div>
    )
}