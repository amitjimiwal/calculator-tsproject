import { fireEvent, render, screen } from "@testing-library/react";
// import React from "react";
import NumberButton from "../src/components/NumberButton";
import AnswerButton from "../src/components/AnswerButton";
import DeleteButton from "../src/components/DeleteButton";
import ResetButton from "../src/components/ResetButton";


describe("Buttontest", () => {
  it("Number button working properly and rendering the text", () => {
    // creates a dummy  function to pass and test to the component
    const mockfunction = jest.fn();
    render(<NumberButton value="10" update={mockfunction} />);
    const button = screen.getByRole("button", { name: "10" });
    // rendering the value passed
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockfunction).toHaveBeenCalled();
  });
  it("Answer button working properly and rendering the text", () => {
    // creates a dummy  function to pass and test to the component
    const mockfunction = jest.fn();
    render(<AnswerButton value="=" answer={mockfunction} />);
    const button = screen.getByRole("button", { name: "=" });
    // rendering the value passed
    expect(button).toBeInTheDocument();
    //check if onclick the  event is fired
    fireEvent.click(button);
    expect(mockfunction).toHaveBeenCalled();
  });
  it("Reset button working properly and rendering the text", () => {
    // creates a dummy  function to pass and test to the component
    const mockfunction = jest.fn();
    render(<ResetButton value="RESET" reset={mockfunction} />);
    const button = screen.getByRole("button", { name: "RESET" });
    // rendering the value passed
    expect(button).toBeInTheDocument();
    //check if onclick the  event is fired
    fireEvent.click(button);
    expect(mockfunction).toHaveBeenCalled();
  });
  it("Delete button working properly and rendering the text", () => {
    // creates a dummy  function to pass and test to the component
    const mockfunction = jest.fn();
    render(<DeleteButton value="DEL" deleteItem={mockfunction} />);
    const button = screen.getByRole("button", { name: "DEL" });
    // rendering the value passed
    expect(button).toBeInTheDocument();
    //check if onclick the  event is fired
    fireEvent.click(button);
    expect(mockfunction).toHaveBeenCalled();
  });  
});
