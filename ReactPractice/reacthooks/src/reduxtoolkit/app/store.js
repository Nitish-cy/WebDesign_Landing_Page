

const configureStore =require('@reduxjs/toolkit').configureStore
const cakeReducer=require('../features/cake/cakeslice')
const store=configureStore({
    reducer:{
        cake:cakeReducer
    }
})