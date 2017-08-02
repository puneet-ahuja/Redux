import React from 'react';

class List extends React.Component{

  

    render(){
        let listItems = this.props.list.map((listItem)=>{
            return (
                <li key={listItem.id} className={listItem.completed ? 'completed' : 'active'} onClick={()=>{this.props.onLiClick(listItem.id)}}>{listItem.text}</li>
            )
        });
        return (
            <ul >
                {listItems}            
            </ul>
        )
    }
}

export default List;