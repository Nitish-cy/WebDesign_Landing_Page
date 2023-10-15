
const createSlice=require('@reduxjs/toolkit').createSlice

const initialState={
    cumOfCakes:10,
}

const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            //no need to return manually bcz tolkit uses immer library 
            //internally and it will manage it
            // immer is used for updating state in store directly bcz it's work of Immer
            state.cumOfCakes--
        },
        restocked:(state,action)=>{
            //no need to create action type or action crator manually 
            // toolkit will do it by itselt with same name as reducer
            state.cumOfCakes+=action.payload
        },
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeActions=cakeSlice.actions