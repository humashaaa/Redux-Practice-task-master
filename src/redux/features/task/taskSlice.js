import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks : [],
    userTasks : []
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers : {
        addTask : (state, {payload})=>{
            if(state.tasks.length === 0){
                state.tasks.push({id : 1, status : "pending", ...payload})

            } else{ 
                const lastElement = state.tasks.at(-1)
                state.tasks.push({id : lastElement.id + 1 , status : "pending", ...payload})
            }

        },
        removeTask : (state, {payload})=>{
          state.tasks =  state.tasks.filter(item=> item.id !== payload)
        },
        updateStatus : (state, {payload})=>{
          state.tasks.find(item=> {
            if(item.id === payload){
                if(item.status === "pending"){
                    item.status = "In Progress"
                }
                else if(item.status === "In Progress"){
                    item.status = "Completed"
                }
            }
          })
        },
        CompleteStatus : (state, {payload})=>{
            state.tasks.find(item=> {
                if(item.id === payload.id){
                    item.status = payload.status
                }
            })

        }
        
        
    }
})

export const {addTask, updateStatus, removeTask, CompleteStatus} = taskSlice.actions

export default taskSlice.reducer