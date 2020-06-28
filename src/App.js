import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">    
      {/* <Counter /> */}
      <EventBind />
      <FunctionClick />
      <ClassClick />
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
