import Todo from "./Todo";

export default function TodoList({todosArray,deleteTodo}) {
    // console.log("Todos Array:" , todosArray)
  return (

    <div>
        {todosArray.map((todoObject)=>{
            return(
                <Todo todoObject={todoObject}  deleteTodo={deleteTodo}/>
            )
        })}
    </div>
   

  )
}
