import "./counter.css"
import {useState} from "react";

type CounterProps = { 
    value: number 
}
export default function CounterByMe(props:CounterProps) {
const[value, setValue]=useState(0);

return (
    <div>
        <div className='counter__row'>
        <button
            className='counter__button'
            aria-label="Decrement value"
            //disabled={props.valueError}
            onClick={()=>{
                //if(!props.valueError){
                    setValue(value - 1)
                //}else{
                  //  console.log("Error")
                }
               // }
            }
        >
            -
        </button>
        <span className='counter__value'>{value}</span>
        <span>minutes</span>
        <button
            className='counter__button'
            aria-label="Increment value"
            onClick={()=>setValue(value + 1)}     
        >
            +
        </button>
        </div>
    </div>
)
}
