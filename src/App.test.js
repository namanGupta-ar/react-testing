import { render, screen } from "@testing-library/react";
import App from "./App";
test("Test First React App", () => {
  render(<App />);
  let text = screen.getByText(/First react test case/i);
  const title = screen.getByTitle("ferrari");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

// test("Testing Input Box", () => {
//   render(<App />);
//   let checkInput = screen.getByRole("textbox");
//   let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInputPlaceholder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("name","username")
//   expect(checkInput).toHaveAttribute("id","userId");
//   expect(checkInput).toHaveAttribute("type","text");
//   expect(checkInput).toHaveAttribute("value","Naman Gupta")
// });
