import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
     {/* <Greet name="m si">
       <p>This is a child prop</p>
     </Greet>
     <Greet name="dff" />
     <Greet name="tree" />
     <Welcome name="forrest"/> */}
     {/* <Message /> */}
    </div>
  );
}

export default App;
