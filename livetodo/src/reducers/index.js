import {combineReducers} from "redux";


const INITIAL_STATE = {
    items: [
        {title: 'Buy coffee'},
        {title: 'Buy coffee1'},
        {title: 'Buy coffee2'}
        
    ]
};

const todosReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'ITEM_CREATED':
            return {...state,items:action.payload};
        default:
            return state;
    }
};


export default combineReducers({
    todo:todosReducer
});