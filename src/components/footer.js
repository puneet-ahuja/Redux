import React from 'react';

class Footer extends React.Component{

    render(){
        return (
            <div >
                <button onClick={this.props.onShowAll}> Show All </button>
                <button onClick={this.props.onCompleted}> Completed </button>
                <button onClick={this.props.onIsActive}> IsActive </button>             
            </div>
        )
    }
}

export default Footer;