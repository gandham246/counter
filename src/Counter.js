import { useState } from "react";

export default function Counter(){
const [number,setNumber] = useState(0);
    return(
        <div>
            <button onClick={() =>setNumber(number+1)}>+</button>
            <span>{number}</span>
            <button onClick={() =>setNumber(number-1)}>-</button>
        </div>
    );
}