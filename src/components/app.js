import React from 'react';
import Footer from './footer';
import Header from './header';
import List from './list';

class App extends React.Component{

    addTask(value){
        debugger;
        this.props.store.dispatch({
            type:'ADD_TASK',
            text : value
        })
    }

    toggleTask(id){
        console.log('Task Toggling');
        this.props.store.dispatch({
            type:'TOGGLE_TASK',
            id:id
        });
    }



    render(){
        debugger;
        let currentState = this.props.store.getState();
        let listToDisplay = currentState.todo.filter((listItem)=>{
                                                            if(currentState.visibilityStatus === 'SHOW_ALL'){
                                                                return true;
                                                            }
                                                            else if(currentState.visibilityStatus === 'COMPLETED'){
                                                                return listItem.completed ? true : false ;
                                                            }
                                                            else{
                                                                return !listItem.completed ? true : false ;
                                                            }
                                                        });


        return (
            <div >
                <Header onAddTask={this.addTask.bind(this)} />
                <List list={listToDisplay} onLiClick={this.toggleTask.bind(this)} />
                <Footer 
                    onShowAll={()=>{
                        this.props.store.dispatch({type:'SET_VISIBILITY_FILTER',
                                                    visibilityFilter : 'SHOW_ALL'})
                        }
                    } 
                    onCompleted={()=>{
                        this.props.store.dispatch({type:'SET_VISIBILITY_FILTER',
                                                    visibilityFilter : 'COMPLETED'})
                        }
                     }
                     onIsActive={()=>{
                        this.props.store.dispatch({type:'SET_VISIBILITY_FILTER',
                                                    visibilityFilter : 'ACTIVE'})
                        }
                     } >
                </Footer>            
            </div>
        )
    }
}

export default App;





                                                                                                         