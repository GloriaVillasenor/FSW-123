import {useState} from 'react'

function TodoForm(props) {

    const handleSubmit = (e) => {
        e.preventDefault()



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                />
                <button>Add Todo </button>
            </form> 
        </div>
    )
}

export default TodoForm