import React from 'react';
class Counter extends  React.Component{
    constructor(props){
        super(props)
        this.state={count:this.props.start}
    }
    
    render(){
    return (
        <div>
            <p>Counter :  {this.state.count}</p>
            <button onClick={()=>this.setState({count : this.state.count+1 }) } >Inceremnt</button>
        </div>
    );
    }
}

export default Counter;

Counter.defaultProps = {
    start : 1
}