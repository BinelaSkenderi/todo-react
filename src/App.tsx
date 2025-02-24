import { SetStateAction, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos]=useState([]);
  const [inputVal, setInputVal]= useState("");

  const HandleChangeInput = (e: { target: { value: SetStateAction<string>; }; })=> {
    setInputVal(e.target.value)
  };

const HandleAddTodo = () => {
  if (inputVal.trim() === "") 
    return;
  setTodos([...todos,inputVal]);
  setInputVal("");
};

const handleDeleteTodo = (todo: string) => {
  setTodos((prev) => prev.filter((x)=> x !== todo));
};


  return (
    <div className="App">
      <div className="content-container">
        <h1>Todos</h1>

        <div className="input-container">
          <input type="text" value={inputVal} onChange={HandleChangeInput} />
          <button onClick={HandleAddTodo}>Add</button>
        </div>

        <div className="cards-container">
          {todos.map((todo)=> (
            <TodoCard handleDeleteTodo={handleDeleteTodo} todo={todo} key={todo} />
          ))}

        </div>
      </div>
    </div>

  );
}

export default App;

interface TodoCardProps {
  todo: string;
  handleDeleteTodo: (todo: string) => void;
}

function TodoCard(props: TodoCardProps) {
return (
  <div onClick={() => props.handleDeleteTodo(props.todo)} className='card-div'>
      {props.todo}
  </div>
);
}