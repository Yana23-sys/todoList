import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const { todos } = props
    
    return (
        <ul className='todoList'>
            {todos.map((todo, index) => {
                return (
                    <TodoCard key={index}>
                        {todo}
                    </TodoCard>
                )
            })}
        </ul>
    )
}