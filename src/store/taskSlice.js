import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks:[{
        id:1,
        name:"name",
        title:"title",
        description:"description",
        start_date:"start_date",
        end_date:"end_date",
        status:"status"
    }]
}

export const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{

        addTask:(state, action)=>{
            const task = {
                id:nanoid(),
                name: action.payload.name,
                title:action.payload.title,
                description:action.payload.description,
                start_date:action.payload.start_date,
                end_date:action.payload.end_date,
                status:action.payload.status,
            }
            state.tasks.push(task)
        },

        removeTask:(state, action)=>{
            const id = action.payload
            state.tasks.filter((task)=>(task.id != id))
        },

        updateTask:(state, action)=>{
            
            const updatedtask = {
                id: action.payload.id,
                name: action.payload.name,
                title:action.payload.title,
                description:action.payload.description,
                start_date:action.payload.start_date,
                end_date:action.payload.end_date,
                status:action.payload.status,
            }
            state.tasks.map((task)=>(task.id === updatedtask.id ? {...updatedtask}:task))
        }


    }
})