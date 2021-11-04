import {useState} from 'react'

function TodoForm(props) {
    const [value, setValue] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value === "") {
            setErrMsg("todo is empty")
            return
        } else {
            props.addTodo(value)
            setValue("")
        }
    }

    const handleChange = (e) => {
        if (errMsg) setErrMsg("")
        setValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <button>Add Todo </button>
            </form> 
            <div className="errMsg">{errMsg}</div>
        </div>
    )
}

export default TodoForm