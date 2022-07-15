import Todo from "./Todo";

export default function TodoList({todos}) {
    console.log("Todos Array:" , todos)
  return (

    <div>
        {todos.map((todo)=>{
            return(
                <Todo todo={todo}/>
            )
        })}
    </div>
   

  )
}
