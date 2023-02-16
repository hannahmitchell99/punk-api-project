import { screen, render } from "@testing-library/react";
import BeerCard from "./BeerCard";
import beers from "../../data/punk";

it("should render the card name on the page", ()=>{
    render(<BeerCard name={beers.name} image={beers.image_url} description={beers.description.map((sentence) => ({sentence}
      ))}/>)

    const beerName = screen.queryByText(/buzz/i)

    expect(beerName).toBeInTheDocument
})