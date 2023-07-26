const Container = ({updatecommand , answer ,deleteItem ,reset}) => {
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-5  bg-secondary p-4 rounded-xl justify-items-center">
      <button className="numberbtn" onClick={()=>{updatecommand(7)}}>7</button>
      <button className="numberbtn" onClick={()=>{updatecommand("8")}}>8</button>
      <button className="numberbtn" onClick={()=>{updatecommand("9")}}>9</button>
      <button className="deletebtn" onClick={()=>{deleteItem()}}>DEL</button>
      <button className="numberbtn" onClick={()=>{updatecommand("4")}}>4</button>
      <button className="numberbtn" onClick={()=>{updatecommand("5")}}>5</button>
      <button className="numberbtn" onClick={()=>{updatecommand("6")}}>6</button>
      <button className="numberbtn" onClick={()=>{updatecommand("+")}}>+</button>
      <button className="numberbtn" onClick={()=>{updatecommand("1")}}>1</button>
      <button className="numberbtn" onClick={()=>{updatecommand("2")}}>2</button>
      <button className="numberbtn" onClick={()=>{updatecommand("3")}}>3</button>
      <button className="numberbtn" onClick={()=>{updatecommand("-")}}>-</button>
      <button className="numberbtn" onClick={()=>{updatecommand(".")}}>.</button>
      <button className="numberbtn" onClick={()=>{updatecommand("0")}}>0</button>
      <button className="numberbtn" onClick={()=>{updatecommand("/")}}>/</button>
      <button className="numberbtn" onClick={()=>{updatecommand("*")}}>X</button>
      <button className="bg-primary border-2 border-primary bigbutton" onClick={()=>{reset()}}>
       RESET </button>
      <button className="bg-red-700 border-2 border-red-950 bigbutton" onClick={()=>{answer()}}>
        =   </button>
    </div>
  );
};

export default Container;
