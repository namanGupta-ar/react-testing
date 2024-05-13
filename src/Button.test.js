import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"
import Button from "./Button";

afterEach(() => {
    cleanup();
});

test("Update Button event testing", () => {
    render(<Button />);
    const btn1 = screen.getByTestId('btn-1');
    fireEvent.click(btn1);
    expect(screen.getByText("updated data")).toBeInTheDocument();
})

test("Empty Button event testing", () => {
    render(<Button />);
    const btn2 = screen.getByTestId('btn-2');
    const btnVal = screen.getByTestId('btn-val');
    expect(btnVal).toBeInTheDocument();
    fireEvent.click(btn2);
    expect(btnVal).toHaveTextContent('Empty');
})


test("matched snapshot", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
})