import { v4 as uuidv4 } from "uuid"

export const todoObj = [
    { 
        id: uuidv4(),
        text: 'do homework',
        isCompleted: true 
    },
    { 
        id: uuidv4(),
        text: 'do dishes',
        isCompleted: false
    },
    { 
        id: uuidv4(),
        text: 'watch 911',
        isCompleted: true
    },
    { 
        id: uuidv4(),
        text: 'go to the gym',
        isCompleted: true
    }
]