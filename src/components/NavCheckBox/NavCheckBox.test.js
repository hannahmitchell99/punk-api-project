import { screen, render } from "@testing-library/react";
import NavCheckBox from "./NavCheckBox";


it("should render the checkboxes on the page", () => {
    // Arrange
  render(<NavCheckBox/>)

  // Act
  const checkboxABV = screen.getByRole('checkbox', {  name: /high abv \(above 6\.0%\)/i})
  const checkboxAcid = screen.getByRole('checkbox', {
    name: /acidic \(ph less than 4\)/i
  })
  const checkboxClassic = screen.getByRole('checkbox', {
    name: /classic range/i
  })

  // Assert 

  expect(checkboxABV).toBeInTheDocument
  expect(checkboxAcid).toBeInTheDocument
  expect(checkboxClassic).toBeInTheDocument
})


