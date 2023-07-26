import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import View from "./components/View";
import { isInteger } from "formik";

function App() {
  const [commands,setcommands]=useState<Array<string>>([]);
  const setstate=(i : string)=>{
        setcommands((prev) =>{
          const newarr= [...prev];
          newarr.push(i)
          if(isNaN(Number(newarr[0]))){
            alert("Enter first number not operator");
            return [];
        }
          return newarr;
        } );
  }
const calculate=()=>{
  const resultarr :string[]=[];
  const output=eval(commands.join(''))
  resultarr.push(output)
  setcommands(resultarr);
}
const ItemDelete=()=>{
  const currrentinputs=commands;
  currrentinputs.pop();
  console.log(currrentinputs)
  setcommands([...currrentinputs]);
  console.log(commands)
}
const reset=()=>{
  setcommands([])
}
  return ( 
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl font-extrabold md:text-3xl mb-5">Calculator App</h1>
     <div className="bg-primary p-7  flex flex-col gap-5 rounded-xl">
     <div className="w-full sm:w-96 md:w-[400px]">
        <View display={commands}/>
      </div>
      <div className="w-full sm:w-96  md:w-[400px] ">
        <Container updatecommand={setstate} answer={calculate} deleteItem={ItemDelete} reset={reset}/>
      </div>
     </div>
    </div>
  );
}

export default App;
