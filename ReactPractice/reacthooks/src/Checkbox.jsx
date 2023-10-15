import React, { useState } from "react";
const arr = ["Nitish", "Mishra", "Shubham"];
const Checkbox = () => {
  const [copyArray, setCopyArray] = useState(arr);
  const [showDeleteButtons, setShowDeleteButtons] = useState(Array(arr.length).fill(false));

  let show = false;
  const handleDelete = (itemindex) => {
    //console.log(arr)
    console.log(itemindex);
    //console.log(copyArray)
    let filteredArray = copyArray.filter((ele, i) => {
      console.log(i + "  " + itemindex);
      console.log(i);
      return i !== itemindex;
    });
    //console.log(filteredArray)
    setCopyArray(filteredArray);
    //console.log("dkfdkl"+copyArray)
  };
 
  const handleCheckbox = (itemindex) => {
    // Toggle the visibility flag for the clicked checkbox
    setShowDeleteButtons((prev) => {
        console.log(prev)
      const updatedVisibility = [...prev];
      updatedVisibility[itemindex] = !updatedVisibility[itemindex];
      return updatedVisibility;
    });
  };
  return (
    <div>
      <ul>
        {copyArray.map((item, i) => (
          <li key={i}>
            <input type="checkbox" onChange={() => handleCheckbox(i)}></input>
            {item}
            {showDeleteButtons[i] && <button onClick={() => handleDelete(i)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkbox;
