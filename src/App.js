import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';



function App() {
  return (
    <div className="App"> 
    <FragmentDemo />
    <Table />
    {/* <LifecycleA /> */}
    {/* <Form /> */}
    {/* <Inline /> */}
    {/* <Stylesheet /> */}
    {/* <NameList />  */}
    {/* <UserGreeting />  */}
      {/* <Counter /> */}
      {/* <EventBind />
      <FunctionClick />
      <ClassClick /> */}
      {/* <ParentComponent /> */}
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
