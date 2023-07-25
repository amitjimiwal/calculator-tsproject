const Container = () => {
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-5  bg-secondary p-4 rounded-xl justify-items-center">
      <button className="numberbtn">7</button>
      <button className="numberbtn">8</button>
      <button className="numberbtn">9</button>
      <button className="deletebtn">DEL</button>
      <button className="numberbtn">4</button>
      <button className="numberbtn">5</button>
      <button className="numberbtn">6</button>
      <button className="numberbtn">+</button>
      <button className="numberbtn">1</button>
      <button className="numberbtn">2</button>
      <button className="numberbtn">3</button>
      <button className="numberbtn">-</button>
      <button className="numberbtn">.</button>
      <button className="numberbtn">0</button>
      <button className="numberbtn">/</button>
      <button className="numberbtn">X</button>
      <button className="bg-primary border-2 border-primary bigbutton">
        RESET
      </button>
      <button className="bg-red-700 border-2 border-red-950 bigbutton">
        =
      </button>
    </div>
  );
};

export default Container;
