import View from "../src/components/View";
import {render,screen} from '@testing-library/react'
// import React from "react";

describe(View,()=>{
         it("renders history and view passed without crashing", () => {
                  render(<View display={["3","+","4"]} history={400}/>)
                  // const history=screen.getByTestId("history").textContent;
                  // this gives in string output so we convert it into number
                  const history=Number(screen.getByTestId("history").textContent);
                  expect(history).toEqual(400);
                  const display=screen.getByTestId("display").textContent;
                  expect(display).toEqual("3+4");
         })
         it("renders the history and view if they are empty or undefined",()=>{
                  render(<View display={[]} history={undefined}/>)
                  const history=Number(screen.getByTestId("history").textContent);
                  expect(history).toEqual(0);
                  const display=screen.getByTestId("display").textContent;
                  expect(display).toEqual("0");
         })
})