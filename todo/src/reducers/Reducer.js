import React from 'react';
import InitialState from './initialState';

import moment from 'moment';


const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'ADD':
            return {
                todos:[
                    ...state.todos,
                    {
                        item:action.payload,
                        completed:false,
                        id:Date.now(),
                        timeCompleted:''
                    }
                ]
            }
    
        case 'TOGGLE-COMPLETED':
            return{
                todos:
                    state.todos.map( x => {
                        if(x.id === action.payload){
                            x.completed = !x.completed;
                            x.timeCompleted = moment().format('MMMM Do YYYY, h:mm:ss a');
                        }
                        return x;
                    })
                    
            }

        case 'CLEAR-COMPLETED':
            return{
                todos:
                    state.todos.filter(x => !x.completed)
            }
    }
    return state;
}

export default reducer;