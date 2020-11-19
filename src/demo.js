import React from 'react';
class Demo extends  React.Component{
    constructor(props){
        super(props)
        console.log("constructor");
        this.state={date:new Date()}
    }
    componentDidMount(){
        console.log("comDM");
        this.id=setInterval(() =>{
            this.setState({date:new Date()})
        },1000);
    }
    componentWillMount(){
        console.log("comWM");
    
    }
    componentWillUnmount(){
        clearInterval(this.id);
    }
    render(){
    return (<div><p>{this.state.date.toISOString()}</p></div>);
    }
}

export default Demo;