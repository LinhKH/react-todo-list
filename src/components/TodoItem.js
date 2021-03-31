import React, { useState } from 'react';
import styles from './TodoItem.module.css'

const TodoItem = (props) => {


    const [editing, setEditing] = useState(false)

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    const { completed, id, title } = props.todo

    function handleEditing() {

        setEditing(true);
        console.log(editing);
    }

    function handleUpdate(e, id) {
        props.setUpdate(e, id)
    }

    function handleUpdatedDone(event) {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={() => props.handleChangeProps(id)} />
                <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>

            </div>
            <input type="text" style={editMode} defaultValue={title} className={styles.textInput}
                onChange={e => { handleUpdate(e.target.value, id) }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );

}

export default TodoItem;