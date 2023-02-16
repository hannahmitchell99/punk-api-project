import { screen, render } from "@testing-library/react";
import NavSearch from "./NavSearch";

it("should render the input on the page", () => {
    // Arrange
  render(<NavSearch/>)

  // Act
  const search = screen.getByRole('textbox')

  // Assert
  expect(search).toBeInTheDocument();
})

