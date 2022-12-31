import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from './actions';
const App = () => {

   const todo = useSelector((state) => state.data.todo);
   const dispatch = useDispatch();
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={()=>dispatch(addData())}>ADD DATA</button>
        <button onClick={()=>dispatch(deleteData())}>DELETE DATA</button>
        {
          todo && <div>
            {JSON.stringify(todo)}
          </div>
        }
      </div>
    );
}

export default App;
