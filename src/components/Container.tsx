import { methods } from "../interface";
import AnswerButton from "./AnswerButton";
import DeleteButton from "./DeleteButton";
import NumberButton from "./NumberButton";
import ResetButton from "./ResetButton";

const Container = ({ update, answer, deleteItem, reset }: methods) => {
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-5  bg-secondary p-4 rounded-xl justify-items-center shadow-xl">
      <NumberButton value="7" update={update} />
      <NumberButton value="8" update={update} />
      <NumberButton value="9" update={update} />
      <DeleteButton value="DEL" deleteItem={deleteItem} />
      <NumberButton value="4" update={update} />
      <NumberButton value="5" update={update} />
      <NumberButton value="6" update={update} />
      <NumberButton value="+" update={update} />
      <NumberButton value="1" update={update} />
      <NumberButton value="2" update={update} />
      <NumberButton value="3" update={update} />
      <NumberButton value="-" update={update} />
      <NumberButton value="." update={update} />
      <NumberButton value="0" update={update} />
      <NumberButton value="/" update={update} />
      <NumberButton value="*" update={update} />
      <ResetButton value="RESET" reset={reset} />
      <AnswerButton value="=" answer={answer} />
    </div>
  );
};

export default Container;
