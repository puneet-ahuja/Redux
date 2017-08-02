import React from 'react';
import ReactDom from 'react-dom';
import {combineReducers , createStore} from 'redux';
import App from './components/app';

import {visibilityReducer , todo} from './reducers/todo-reducer';






const todoReducer = combineReducers({
    todo : todo,
    visibilityStatus : visibilityReducer
});

const store = createStore(todoReducer);





const render = ()=>{

    console.log("Render Call of index");

    ReactDom.render(
    <App store={store}/> ,
        document.getElementById('root')
);
}
store.subscribe(render);
render();