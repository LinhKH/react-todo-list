

import React from 'react'
import TodoItem from './TodoItem'


const TodosList = (props) => {

    return (
        <>
            <ul>
                {props.todos.map((todo, key) => (
                    <TodoItem key={key} todo={todo}
                        handleChangeProps={props.handleChangeProps}
                        deleteTodoProps={props.deleteTodoProps}
                        setUpdate={props.setUpdate}

                    />
                ))}
            </ul>
        </>
    )
}

export default TodosList
