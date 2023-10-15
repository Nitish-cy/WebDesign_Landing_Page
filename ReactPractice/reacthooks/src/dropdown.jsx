import React, { useState } from "react";

const Dropdown = () => {
const [country,setCountry]=useState('');
const [city,setCity]=useState('');
  const countries = ["India", "Pakistan"];
  let obj = {
    India: ["Sultanpur", "PryagRaj", "jaunpur"],
    Pakistan: ["Karachi", "Lahor"],
  };

const handleCountry=(event)=>{
console.log(event.target.value)
setCountry(event.target.value);
}

// const handleCity=()=>{ 
//     //console.log(event.target.value)
//     setCountry(event.target.value);
//     }

  return (
    <div>
      <select value={country} onChange={handleCountry}>
        <option>Select One Country</option>
        {countries.map((Country) => (
          <option key={Country} value={Country}>
            {Country}
          </option>
        ))}
      </select>

      <select>
        
      {countries && obj[country].map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}

        
      </select>
    </div>
  );
};

export default Dropdown;
