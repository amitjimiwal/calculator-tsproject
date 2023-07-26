import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import View from "./components/View";
import { comma } from "postcss/lib/list";

function App() {
  const [commands, setcommands] = useState<Array<string>>([]);
  const setstate = (i: string) => {
    setcommands((prev) => {
      const newarr = [...prev];
      newarr.push(i);
      if (isNaN(Number(newarr[0]))) {
        alert("You can't enter first Number as Operator");
        return [];
      }
      return newarr;
    });
  };
  const calculate = () => {
    const resultarr: string[] = [];
    try {
      const output = eval(commands.join(""));
      console.log(commands.join(""));
      resultarr.push(output);
      setcommands(resultarr);
    } catch (error) {
      alert(error);
      setcommands([]);
    }
  };
  const ItemDelete = () => {
    const currrentinputs = commands;
    currrentinputs.pop();
    console.log(currrentinputs);
    setcommands([...currrentinputs]);
    console.log(commands);
  };
  const reset = () => {
    setcommands([]);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-parent">
      <h1 className="text-xl font-extrabold md:text-3xl mb-5">
        Calculator App
      </h1>
      <div className="bg-primary p-7  flex flex-col gap-5 rounded-xl">
        <div className="w-full sm:w-96 md:w-[400px]">
          <View display={commands} />
        </div>
        <div className="w-full sm:w-96  md:w-[400px] ">
          <Container
            update={setstate}
            answer={calculate}
            deleteItem={ItemDelete}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
