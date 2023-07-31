import { ResetButtonSchema } from "../interface"
const ResetButton = ({value,reset}:ResetButtonSchema) => {
  return (
         <button className="bg-primary border-2 border-primary bigbutton" onClick={reset}>
         {value} </button>   
  )
}

export default ResetButton
