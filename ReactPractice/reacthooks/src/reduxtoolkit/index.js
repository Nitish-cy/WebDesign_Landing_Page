

const store=require('./app/store')
const cakeActions=require('./features/cake/cakeslice').cakeActions

console.log('initial State',store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log('Updated state',store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
unsubscribe()
