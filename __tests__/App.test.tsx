import { fireEvent, render, screen } from "@testing-library/react";
// import React from "react";
import App from "../src/App";
import expect from "expect";
describe(App, () => {
  it("jest running", () => {
    expect(true).toBe(true);
  });
  it("app display calculator text", () => {
    render(<App />);
    const text = screen.getByRole("heading", { name: "Calculator App" });
    expect(text).toBeInTheDocument();
  });
  it("root div is rendered", () => {
    render(<App />);
    const rootdiv = screen.getByTestId("root");
    expect(rootdiv).toBeInTheDocument();
  });
  it("testing update function", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "8" });
    // rendering the value passed
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const display = screen.getByTestId("display").textContent;
    expect(display).toEqual("8");
    const history = Number(screen.getByTestId("history").textContent);
    expect(history).toEqual(0);
  });
  it("testing delete function", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "8" });
    const button2 = screen.getByRole("button", { name: "DEL" });
    // rendering the value passed
    expect(button).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    fireEvent.click(button);
    fireEvent.click(button2);
    const display = screen.getByTestId("display").textContent;
    expect(display).toEqual("0");
    const history = Number(screen.getByTestId("history").textContent);
    expect(history).toEqual(0);
  });
  it("testing reset function", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "8" });
    const button2 = screen.getByRole("button", { name: "4" });
    const reset = screen.getByRole("button", { name: "RESET" });
    // rendering the value passed
    expect(button).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(reset).toBeInTheDocument();
    fireEvent.click(button);
    fireEvent.click(button2);
    fireEvent.click(reset);
    const display = screen.getByTestId("display").textContent;
    expect(display).toEqual("0");
    const history = Number(screen.getByTestId("history").textContent);
    expect(history).toEqual(0);
  });
  it("testing answer function", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "8" });
    const button2 = screen.getByRole("button", { name: "+" });
    const button3 = screen.getByRole("button", { name: "8" });
    const answer = screen.getByRole("button", { name: "=" });
    fireEvent.click(button);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(answer);
    const display = screen.getByTestId("display").textContent;
    expect(display).toEqual("16");
    const history = Number(screen.getByTestId("history").textContent);
    expect(history).toEqual(16);
  });
});
