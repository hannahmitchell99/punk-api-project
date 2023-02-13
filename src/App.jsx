import { useState } from 'react';
import './App.scss';
import BeerCardContainer from './containers/BeerCardContainer/BeerCardContainer';
import Nav from './containers/Nav/Nav';
import beers from './data/punk';

const App = () => {

  const [beerType, setBeerType] = useState(beers)
  const [input, setInput]= useState("")
  const [abvCheck, setAbvCheck] = useState(false)
  const [classicCheck, setClassicCheck] = useState(false)
  const [acidCheck, setAcidCheck] = useState(false)
  
  const handleInput = (event) =>{
    setInput(event.target.value)
  }

  const handleABV = () => {
    setAbvCheck(!abvCheck)
  }

  const handleClassic = () => {
    setClassicCheck(!classicCheck)
  }

  const handleAcid = () => {
    setAcidCheck(!acidCheck)
  }

  const handleFilter = () => {

    const inputArray = beers.filter((beer)=>beer.name.toLowerCase().includes((input).toLowerCase()))
    const classicArray = beers.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010)
    const acidArray= beers.filter((beer) => beer.ph && beer.ph < 4)
    const abvArray= beers.filter((beer)=> beer.abv && beer.abv >= 6)

    if(inputArray && acidCheck && classicCheck && abvCheck){
      setBeerType(inputArray.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010).filter((beer) => beer.ph && beer.ph < 4).filter((beer)=> beer.abv && beer.abv >= 6))
    } else if (inputArray && acidCheck && classicCheck){
      setBeerType(inputArray.filter((beer) => beer.ph && beer.ph < 4).filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010))
    } else if (inputArray && abvCheck && classicCheck ){
      setBeerType(inputArray.filter((beer)=> beer.abv && beer.abv >= 6).filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010))
    } else if (inputArray && abvCheck & acidCheck){
      setBeerType(inputArray.filter((beer)=> beer.abv && beer.abv >= 6)
      .filter((beer) => beer.ph && beer.ph < 4))
    } else if  (inputArray && acidCheck){
      setBeerType(inputArray.filter((beer) => beer.ph && beer.ph < 4))
    } else if (inputArray && classicCheck){
      setBeerType(inputArray.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010))
    } else if (inputArray && abvCheck) {
      setBeerType(inputArray.filter((beer)=> beer.abv && beer.abv >= 6))
    } else if (classicCheck && acidCheck){
      setBeerType(classicArray.filter((beer) => beer.ph && beer.ph < 4))
    } else if (classicCheck && abvCheck){
      setBeerType(classicArray.filter((beer)=> beer.abv && beer.abv >= 6))
    } else if(acidCheck && abvCheck){
      setBeerType(acidArray.filter((beer)=> beer.abv && beer.abv >= 6))
    }else if (classicCheck){
      setBeerType(classicArray)
    } else if (acidCheck) {
      setBeerType(acidArray)
    } else if (abvCheck){
      setBeerType(abvArray)
    } else if (inputArray){
      setBeerType(inputArray)
    }
}
  return (
    <div className="App">
      <Nav handleInput={handleInput} handleABV={handleABV} handleClassic = {handleClassic} handleAcid={handleAcid}
      abvCheck = {abvCheck} classicCheck = {classicCheck} acidCheck={acidCheck} handleFilter={handleFilter} />
      <BeerCardContainer beers={beerType}/>
      
    </div>
  );
}

export default App;

// const handleInput = (event) => {
//   const inputArray = beers.filter((beer)=>beer.name.toLowerCase().includes((event.target.value).toLowerCase()))
//   setBeerType(inputArray)
//   };

//   const handleSelectABV =(event) => {
//     const abvArray = beers.filter((beer)=> beer.abv && beer.abv >= event.target.value)
//     setBeerType(abvArray)
//   }

//   const handleSelectClassic = () => {
//     const classicArray = beers.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010)
//     setBeerType(classicArray)
//   }
//   const handleSelectAcid = () => {
//     const acidArray = beers.filter((beer) => beer.ph && beer.ph < 4)
//     setBeerType(acidArray)
//   }
// //setBeerType(beers.filter(
//   (beer) => beer.name.toLowerCase().includes(input).toLowerCase() &&
//   (acidCheck || classicCheck || abvCheck)
// ))