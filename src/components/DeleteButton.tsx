import { DeletebuttonSchema } from "../interface"
const DeleteButton = ({value,deleteItem}:DeletebuttonSchema) => {
  return (
         <button className="deletebtn" onClick={deleteItem}>{value}</button>
  )
}

export default DeleteButton
