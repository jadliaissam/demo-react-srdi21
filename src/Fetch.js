import React from "react"
export default class Fetch extends React.Component{
    hendleFetch = ()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data=> {
            console.log(data)
        })
    }
    render(){
        return(
            <div>
                <button onClick = {this.hendleFetch}>tester</button>
            </div>
        )
    }
}