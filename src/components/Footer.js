import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
function Footer() {
  const [todos, setTodos] = useContext(DataContext);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodos);
    setCheckAll(checkAll);
  };

  return (
    <div className="row">
      <label htmlFor="all">
        <input
          type="checkbox"
          name="all"
          id="all"
          onChange={handleCheckAll}
          checked={checkAll}
        />
        All
      </label>
      <p>
        You have {todos.filter((todo) => todo.complete === false).length} To Do
      </p>
      <button id="delete" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}

export default Footer;
