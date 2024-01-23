import logo from './logo.svg';
import './App.css';
import { useContext, useRef } from 'react';
import { Context } from './store/Context';
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './store';

function App() {

  const { state, dispatch } = useContext(Context);
  const inputRef = useRef();

  const handleAddTodo = e => {
    dispatch({
      type: ADD_TODO,
      payload: state.inputTodo,
    });

    dispatch({ type: SET_TODO_INPUT, payload: ''});
    inputRef.current.focus();

  }

  const handleDeleteTodo = index => {
    dispatch({
      type: DELETE_TODO,
      payload: index,
    });

    
  }

  const handleUpdateTodo = index => {
    dispatch({
      type: UPDATE_TODO,
      payload: {
        value: state.inputTodo,
        index,
      },
    });
    dispatch({ type: SET_TODO_INPUT, payload: ''});
  }


  return (
    <div className="App">
      <div>
        <input ref={inputRef} value={state.inputTodo} onChange={(e) => dispatch({ type: SET_TODO_INPUT, payload: e.target.value})} placeholder='Enter your todo...' />
        <button onClick={handleAddTodo}>add</button>
      </div>

      <div>
        {
          state.listTodo.map((todo, index) => {
            return <div key={index} className='todo'>
              <div>{todo}</div>
              <span onClick={() => handleDeleteTodo(index)}>&times;</span>
              <span onClick={() => handleUpdateTodo(index)}>sua</span>
            </div>
          })
        }
      </div>
      
    </div>
  );
}

export default App;
