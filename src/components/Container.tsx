interface Props{
  update:(input :string)=> void ;
  answer:()=> void;
  deleteItem:()=>void;
  reset:()=> void;
}
const Container = ({update , answer ,deleteItem ,reset}:Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-5  bg-secondary p-4 rounded-xl justify-items-center">
      <button className="numberbtn" onClick={()=>{update("7")}}>7</button>
      <button className="numberbtn" onClick={()=>{update("8")}}>8</button>
      <button className="numberbtn" onClick={()=>{update("9")}}>9</button>
      <button className="deletebtn" onClick={()=>{deleteItem()}}>DEL</button>
      <button className="numberbtn" onClick={()=>{update("4")}}>4</button>
      <button className="numberbtn" onClick={()=>{update("5")}}>5</button>
      <button className="numberbtn" onClick={()=>{update("6")}}>6</button>
      <button className="numberbtn" onClick={()=>{update("+")}}>+</button>
      <button className="numberbtn" onClick={()=>{update("1")}}>1</button>
      <button className="numberbtn" onClick={()=>{update("2")}}>2</button>
      <button className="numberbtn" onClick={()=>{update("3")}}>3</button>
      <button className="numberbtn" onClick={()=>{update("-")}}>-</button>
      <button className="numberbtn" onClick={()=>{update(".")}}>.</button>
      <button className="numberbtn" onClick={()=>{update("0")}}>0</button>
      <button className="numberbtn" onClick={()=>{update("/")}}>/</button>
      <button className="numberbtn" onClick={()=>{update("*")}}>X</button>
      <button className="bg-primary border-2 border-primary bigbutton" onClick={()=>{reset()}}>
       RESET </button>
      <button className="bg-red-700 border-2 border-red-950 bigbutton" onClick={()=>{answer()}}>
        =   </button>
    </div>
  );
};

export default Container;
