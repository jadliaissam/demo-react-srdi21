import './App.css';
import Demo from  './demo';
import React from 'react';
import Counter from './Counter';
import List from './List';
import Form from './Form';
class App extends React.Component{
  render(){
    return(
      <div>
        {/* Exercice Props, State, default Props */}
        <Counter start={2} />

        {/* Exercice Lifecycle Methods */}
        <Demo />
        {/*exercic List*/}
        <List/>;
        {/*exercice Form*/}
        <Form />
      </div>
    )
  }
}

export default App;
