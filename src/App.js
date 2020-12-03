import './App.css';
import Demo from  './demo';
import React from 'react';
import Counter from './Counter';
import List from './List';
import Form from './Form';
import Fetch from './Fetch';
import Feed from './Feed';
import CompA from './Ref';
import UserList from './UserList'
class App extends React.Component{
  render(){
    return(
      <div>
        <CompA /> 
        <UserList />

        {/* Exercice Props, State, default Props */}
        <Counter start={2} />

        {/* Exercice Lifecycle Methods */}
        <Demo />
        {/*exercic List*/}
        <List/>;
        {/*exercice Form*/}
        <Form />
        {/*exercice Fetch*/}
        <Fetch />
        {/*exercice Feed*/}
        <Feed />
      
      </div>
    )
  }
}

export default App;
