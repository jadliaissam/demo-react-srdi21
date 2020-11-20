import React from 'react';
class Demo extends  React.Component{
    constructor(props){
        super(props)
        console.log("constructor");
        this.state={date:new Date(), color : 'Black', hide: false }
        
    }
    componentDidMount(){
        console.log("comDM");
        this.id=setInterval(() =>{
            this.setState({date:new Date(),color:'black'})
        },1000);
    }
    componentWillMount(){
        console.log("comWM");
    
    }
    componentWillUnmount(){
        clearInterval(this.id);
    }
    changeColor = ( )=>{ this.setState({color : 'red'})}
    render(){
    return (<div>
        { !this.state.hide ? <p style={{color : this.state.color}}>{this.state.date.toISOString()}</p>:'horloge cache'}
    <button onClick ={ ()=> alert(this.state.date.toISOString())}>Aficher</button>
    <button onMouseOver ={this.changeColor}>Chnage color 1</button>
    <button onMouseOver ={()=>this.setState({color : 'green'})}>Chnage color 1</button>
    <button onClick= {()=> this.setState({hide:!this.state.hide})}>Toggle</button>
    

    </div>);
    }
}

export default Demo;