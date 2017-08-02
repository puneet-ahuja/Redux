// const todoReducer = (state={} , action) =>{
//     return{
//     todo = todo(state.todo , action);
//     newState.visibilityStatus = visibilityReducer(state.visibilityStatus , action);
//     };
// }


export const todo = (state=[],action)=>{
    debugger;
    let newState = undefined;
    switch(action.type){
        
        case 'ADD_TASK' :
            let newId ;
            if(state.length === 0){
                newId = 0;
            }
            else{
                newId = state[state.length - 1].id +1;
            }
            let newTask = {
                id : newId,
                text : action.text,
                completed : false
            }
            newState = [...state ,newTask
            ];

            return newState;

        case 'TOGGLE_TASK':
            let id = action.id;
            newState = state.map((task)=>{
                if(id === task.id){
                    task.completed = !task.completed;
                }
                return task;
            });
            return newState;
        default : 
            return state;
    }
};


export const visibilityReducer =(state='SHOW_ALL' , action)=>{
    let newState;
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            newState = action.visibilityFilter;
            return newState;

        default:
            return state;
    }
}







// export default todoReducer;