import { useState } from 'react';
import './App.scss';
import BeerCardContainer from './containers/BeerCardContainer/BeerCardContainer';
import Nav from './containers/Nav/Nav';
import beers from './data/punk';

const App = () => {

  const [beerType, setBeerType] = useState(beers)

  const handleInput = (event) => {
    const inputArray = beers.filter((beer)=>beer.name.toLowerCase().includes((event.target.value).toLowerCase()))
    setBeerType(inputArray);
    };
  
  const handleSelectABV =(event) => {
    const inputArray = beers.filter((beer)=> beer.abv && beer.abv >= event.target.value)
    setBeerType(inputArray)
  }

  const handleSelectClassic = () => {
    const inputArray = beers.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010)
    setBeerType(inputArray)
  }
  const handleSelectAcid = () => {
    const inputArray = beers.filter((beer) => beer.ph && beer.ph < 4)
    setBeerType(inputArray)
  }
  return (
    <div className="App">
      <Nav handleInput={handleInput} handleChangeABV={handleSelectABV} handleChangeClassic = {handleSelectClassic} handleChangeAcid={handleSelectAcid}/>
      <BeerCardContainer beers={beerType}/>
      
    </div>
  );
}

export default App;
