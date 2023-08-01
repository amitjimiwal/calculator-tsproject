import {render} from '@testing-library/react'
import App from '../src/App'
import expect from 'expect';
describe(App,()=>{
         it("app display calculator text",()=>{
                  const {getByTestId} = render(<App />);
                  const text=getByTestId("count").textContent;
                  expect(text).toBe("Calculator App")
         })
         it("jest running",()=>{
                  expect(true).toBe(true)
         })
})