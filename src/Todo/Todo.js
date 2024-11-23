import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(["Sujit", "Upadhyay"]);

  const addNewTodo = () => {
    if (value === "") {
      alert("Please enter valid task!");
      return;
    }
    setTodos([...todos, value]);
    setValue("");
  };

  const deleteItem = (index) => {
    let updatedTodo = [...todos].filter((item, i) => index !== i);
    setTodos(updatedTodo);
  };

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
        />
        <button onClick={addNewTodo}>Add Task</button>
      </div>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => deleteItem(index)}> delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
