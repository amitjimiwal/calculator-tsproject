import { NumberbuttonSchema } from "../interface"
const NumberButton = ({value,update}:NumberbuttonSchema) => {
  return (
         <button className="numberbtn" onClick={()=>{
                  update(value)
         }}>{value}</button>
  )
}

export default NumberButton
