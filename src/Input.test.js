import { fireEvent, render, screen } from "@testing-library/react"
import TestComponent from "./Input"
test("on change event handling",() => {
    render(<TestComponent />);
    let input = screen.getByRole("textbox");
    fireEvent.change(input,{target: {value: 'abc'}});
    expect(input.value).toBe("abc");
})