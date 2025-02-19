import { useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { decrement, increment } from './redux/slices/counter';

function App() {

  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();

  return (
    <div>
      hi there
      <h1>Count is {count} </h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
       "  "
      <button onClick={()=>dispatch(decrement())}>decrement</button>

    </div>
  )
}

export default App
