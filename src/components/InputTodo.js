import React, { useState } from 'react'

const InputTodo = (props) => {

    const [inputText, setInputText] = useState({title:""})

    let onChange = (e) => {
        setInputText({
            ...inputText,[e.target.name]:e.target.value
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({title:""})
        } else {
            alert("title null")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" name="title" className="input-text" placeholder="Add Todo..." value={inputText.title} onChange={onChange} />
            <button className="input-submit">Submit</button>
        </form>
    )
}

export default InputTodo

