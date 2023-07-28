import { methods } from "../interface";
import buttons from "../buttons";
import Button from "./Button";
const Container = ({update , answer ,deleteItem ,reset}:methods) => {
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-5  bg-secondary p-4 rounded-xl justify-items-center shadow-xl">
        {buttons.map((button)=>(
          <Button id={button.id} type={button.type} value={button.value} update={update} reset={reset} deleteItem={deleteItem} answer={answer}/>
        ))}

    </div>
  );
};

export default Container;
