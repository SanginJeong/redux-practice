import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
function App() {
  const count = useSelector(state=>state.count); // 전달받은 state 객체에서 count만
  const dispatch = useDispatch();
  
  const increase = () => {
    dispatch({
      type: "INCREMENT",
      payload: {num:5}
    })
  }

  const decrease = () => {
    dispatch({
      type: "DECREMENT",
      payload: {num:5}
    })
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <Box/>
    </div>
  );
}

export default App;
