import {fireEvent, render,screen} from '@testing-library/react';
// import React from 'react';
import Container from '../src/components/Container';

describe(Container, () => {
     it("renders the container properly",()=>{
         const mockfunction1=jest.fn()
         const mockfunction2=jest.fn()
         const mockfunction3=jest.fn()
         const mockfunction4=jest.fn()
         render(<Container update={mockfunction1} deleteItem={mockfunction2} reset={mockfunction3} answer={mockfunction4}/>)
         const containerddiv=screen.getByTestId("container");
         expect(containerddiv).toBeInTheDocument();
         // check if the button calls the update function all the other button tests are written in the Buttons.test.tsx file
         const button = screen.getByRole("button", { name: "8" });
         // rendering the value passed
         expect(button).toBeInTheDocument();
         fireEvent.click(button);
         expect(mockfunction1).toHaveBeenCalled();
     })
})
