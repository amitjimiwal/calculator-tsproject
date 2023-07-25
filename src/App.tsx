import "./App.css";
import Container from "./components/Container";
import View from "./components/View";

function App() {
  return ( 
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl font-extrabold md:text-3xl mb-5">Calculator App</h1>
     <div className="bg-primary p-7  flex flex-col gap-5 rounded-xl">
     <div className="w-full sm:w-96 md:w-[400px]">
        <View/>
      </div>
      <div className="w-full sm:w-96  md:w-[400px] ">
        <Container />
      </div>
     </div>
    </div>
  );
}

export default App;
