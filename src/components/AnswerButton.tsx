import { AnswerButtonSchema } from "../interface"
const AnswerButton = ({value,answer}:AnswerButtonSchema) => {
  return (
         <button className="bg-red-700 border-2 border-red-700 bigbutton" onClick={answer}>
         {value}</button>
  )
}

export default AnswerButton
