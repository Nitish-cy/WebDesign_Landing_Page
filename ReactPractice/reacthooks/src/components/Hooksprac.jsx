import React, { useEffect, useState } from 'react'

const Hooksprac = () => {
  const [count , setCount]=useState(1);
  const [name , setName]=useState('');

  useEffect(()=>{  
    //console.log( setInterval(count+1,1000))
    document.title=`You have clicked ${count} times`   
    console.log(document.title) 
    // return()=>{
    //   console.log('Component Unmounting Code')
    //   window.removeEventListener('mousemove',logMousePositioon)
    // }
  },[count])
  //for condition rendering of useEffect We have to use second parameter
  //like on what changes we wants to run useEffect
  return (
    <div >
      <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default Hooksprac
//Summary -
//Use effect will call after every render
// it is alternative of class component life cycle methods - componentDidMount
// componetDidUpdate , componetWillUnmount
//we can call any api Inside useEffect

// For calling useEffect only once we have to pass empty dependency array - same as componentDidmount
// If we wants to persorm componentWillUnmout using useEffect then we have to return one function from useEffect
 