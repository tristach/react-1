import TodoList from './TodoList'
import { useState, useRef } from 'react';
import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => { [...prevTodos, { id: uuidv4(), name: name, complete: 
        false}]
    })
    todoNameRef.current.value = null

  }

  return (
  <>

  <TodoList todos={todos}/>
  <input ref={todoNameRef} type="text"/>
  <button onClick={handleAddTodo}>Add Todo</button>
  <button>Clear Complete</button>
  <div>0 left to do</div>

  </>
  )
}

export default App;


/*




  const btnOne = "one"
  const btnTwo = "Secret"
  const btnThree = "three"

<div>
          Button test
          <Button btnName={btnOne}/>
          Button test two
          <Button btnName={btnTwo}/>
          Button test three
          <Button btnName={btnThree}/>
        </div>*/