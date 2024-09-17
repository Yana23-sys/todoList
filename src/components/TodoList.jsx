import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const { todos } = props
    
    return (
        <ul className='todoList'>
            {todos.map((todo, index) => {
                return (
                    <TodoCard {...props} key={index} index={index}>
                        {todo}
                    </TodoCard>
                )
            })}
        </ul>
    )
}