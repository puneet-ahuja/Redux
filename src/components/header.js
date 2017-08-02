import React from 'react';

class Header extends React.Component{

    render(){
        return (
            <div >
                <input type="text" ref={(inputRef) => this.inputRef = inputRef} />
                <button type="botton" value="AddTask" onClick={()=>{this.props.onAddTask(this.inputRef.value)}}>AddTask</button>             
            </div>
        )
    }
}

export default Header;