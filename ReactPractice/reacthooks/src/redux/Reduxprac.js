import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_CAKE } from "./cakes/cakeTypes";
import {buyCake} from "./cakes/cakeAction"
const Reduxprac = () => {
  const numOfCake = useSelector((state) => state.numOfCake);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Number Of Cakes- : {numOfCake}</h1>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default Reduxprac;
