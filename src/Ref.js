import React from 'react';

class CompB extends React.Component{
    handle = ()=>{
        this.props.refA.current.style.backgroundColor='pink'
    }
    render(){
        return <div>
            <div> CompB </div>
            <button onClick={this.handle}> Test Ref</button>
        </div>
    }
}
class CompA extends React.Component {
    constructor (props){
        super(props) 
        this.refA= React.createRef()
    }
render(){
    return <div>
        <input ref={this.refA} type="text" />
<CompB refA={this.refA} />
    </div>
}

}
export default CompA;

