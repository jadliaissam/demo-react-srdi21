import React from 'react';
const tab = [ 
    {id : 1, nom : "ali", cin : 'BH12345'},
    {id : 2, nom : "Ahmed", cin : 'BH8765'},
    {id : 3, nom : "Ghali", cin : 'BH1678'}
]
class ListItem extends React.Component{
    render(){
        return<p>{this.props.nom}-{this.props.cin}</p>
    }
}
class List extends React.Component{
    render(){
        return(
            <div>
                <ul>
                  {tab.map(elt => <ListItem nom={elt.nom} cin={elt.cin}/>)}
                </ul>
            </div>
        )
    }
      
}    
 export default List;