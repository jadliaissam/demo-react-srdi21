import './App.css';
import Demo from  './demo';
import React from 'react';
import Counter from './Counter';
class App extends React.Component{
  render(){
    return(
      <div>
        {/* Exercice Props, State, default Props */}
        <Counter start={2} />

        {/* Exercice Lifecycle Methods */}
        <Demo />
      </div>
    )
  }
}

export default App;
