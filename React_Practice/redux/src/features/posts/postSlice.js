import { createSlice } from "@reduxjs/toolkit";


const initialState =[
    {
        id:"1",
        title:"Learning Redux ToolKit",
        content:"Its Easy"
    },
    {
        id:"2",
        title:"Learning Redux ToolKit with youtube",
        content:"Its very very Easy"
    }
]

const postSlice =createSlice({
    name:"posts",
    initialState,
    reducers:{}
})

export const selectAllPosts =(state)=>state.posts

export default postSlice.reducer