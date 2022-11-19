import "./counter.css"

type CounterProps = { 
    value: number
    setValue: (state:number)=>void 
}
export default function CounterByMe(props:CounterProps) {

return (
    <div>
        <div className='counter__row'>
        <button
            className='counter__button'
            aria-label="Decrement value"
            //disabled={props.valueError}
            onClick={()=>{
                //if(!props.valueError){
                    props.setValue(props.value - 1)
                //}else{
                  //  console.log("Error")
                }
               // }
            }
        >
            -
        </button>
        <span className='counter__value'>{props.value}</span>
        <span>minutes</span>
        <button
            className='counter__button'
            aria-label="Increment value"
            onClick={()=>props.setValue(props.value + 1)}     
        >
            +
        </button>
        </div>
    </div>
)
}
