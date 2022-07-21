import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  let [todosArray, setTodosArray] = useState([]);

  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // localStorage.setItem('todosArray',JSON.stringify())
    // console.log(JSON.stringify(todosArray))

    let tempArray = JSON.parse(localStorage.getItem("todosArray"));
    console.log("Temp Array Value :", tempArray);
    console.log("Type of Temparray:", typeof tempArray);

    // setTodosArray(tempArray)

    setTodosArray(JSON.parse(localStorage.getItem("todosArray")));
  }, []);

  function deleteTodo(todoToDelete) {
    if (window.confirm("Are you sure ")) {
      console.log("Delete Button Clicked");
      console.log("Todo To Be Deleted is :", todoToDelete);

      let newTodos = todosArray.filter((todosObj) => {
        return todosObj.id !== todoToDelete.id;
      });

      console.log(newTodos);

      //pass new array values to todoarray
      setTodosArray(newTodos);
      localStorage.setItem("todosArray", JSON.stringify(newTodos));
    } else {
      console.log("delete Cancelled");
    }
  }

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <TodoList todosArray={todosArray} deleteTodo={deleteTodo} />
      <NewTodoForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
