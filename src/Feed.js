import React from 'react'

class PostItem extends React.Component{
    render(){ 
        return(
            <div>
                <h4>{this.props.post.title}</h4>
                <img src="https://via.placeholder.com/200" width={200} heigth={200}  />
                <p>{this.props.post.body}</p>
            </div>
  
    )
  
    }
}


export default class Feed extends React.Component{

    constructor(props){  
        super(props)
        this.state={data:[], isLoading:true}
    }
    
  render(){ 
      return(
          <div>
              <p>{this.state.isLoading ? 
              "Loading..." 
              : this.state.data.map(elt=><PostItem key={elt.id} post={elt} />)
              }</p>
          </div>

  )

  }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data=> {
           this.setState({data:data, isLoading:false})
 
    })
}


}