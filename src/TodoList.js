import TodoItems from "./TodoItems";

function TodoList({todos, onChange, onDelet}){
return(
    <div>
        {
        todos.map((todo) =>{
            return(
                <TodoItems 
                key={todo.id}
                  todo={todo} 
                  onChange={onChange}
                  onDelet={onDelet}
                  />
            )
            
        })
        }
    </div>
)
}

export default TodoList;