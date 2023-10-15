import React from "react";
const arr1 = ["cricket", "honckey", "footb"];
const arr2 = ["Read", "Teach"];
const Radiobtn = () => {

   const handleChange=(item)=>{
    console.log(item)
   }
  return (
    <div>
      {arr1.map((item) => (
        <>
        <label>{item}</label>
          <input type="radio" id={item} value={item} name="radio" onChange={()=>handleChange(item)}></input>
        </>
      ))}
      
      <h1>Second Array</h1>
      {arr2.map((item) => (
        <>
        <label>{item}</label>
          <input type="radio" id={item} value={item} name="radio1"></input>
        </>
      ))}
    </div>
  );
};

export default Radiobtn;
