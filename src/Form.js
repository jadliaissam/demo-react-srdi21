import React from 'react';
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state= {nom :"", cin : ""}
        
    }
    handleNom = (event)=>{
        let name = event.target.value
        if (name.length < 10)
          this.setState({nom : name})

    }
    handlecin = (event)=>{
        let cin = event.target.value.toUpperCase()

        this.setState({cin})
    }

    render(){
        return(
            <div>
                <form >
                    <label >Nom Complet</label>
                    <input value ={this.state.nom} onChange = {this.handleNom}/>
                    <label >CIN</label>
                    <input value ={this.state.cin} onChange = {this.handlecin}/>
                </form>
            </div>
        )
    }
}

export default Form;