import { btn, methods } from "../interface";

interface Props extends btn,methods{

}
const Button = ({id,type,value,update,reset,deleteItem,answer}:Props) => {
         switch (type){
                  case "numberbutton":
                           return (
                                    <button className="numberbtn" onClick={()=>{update(value)}} id={id}>{value}</button>
                           )
                  case "deletebutton":
                           return(
                                             <button className="deletebtn" onClick={()=>{deleteItem()}} id={id}>{value}</button>
                           )
                  case "resetbutton":
                           return(
                                    <button className="bg-primary border-2 border-primary bigbutton" onClick={()=>{reset()}} id={id}>
                                    {value} </button>   
                           )
                  case "answerbutton":
                           return(
                                    <button className="bg-red-700 border-2 border-red-700 bigbutton" onClick={()=>{answer()}}>
                                    {value}</button>
                           )
         }
                  
}


export default Button
