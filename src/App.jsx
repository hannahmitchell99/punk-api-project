import { useEffect, useState } from "react";
import "./App.scss";
import BeerCardContainer from "./containers/BeerCardContainer/BeerCardContainer";
import Nav from "./containers/Nav/Nav";
//import beers from './data/punk';

const App = () => {
  const [beer, setBeerType] = useState([]);
  const [input, setInput] = useState("");
  const [abvCheck, setAbvCheck] = useState(false);
  const [classicCheck, setClassicCheck] = useState(false);
  const [acidCheck, setAcidCheck] = useState(false);
  const [defaultBeers, setDefaultBeers] = useState([])

  const getBeers = async () => {
    const res = await fetch(
      "https://api.punkapi.com/v2/beers?page=3&per_page=80"
    );
    const data = await res.json();
    setBeerType(data);
    setDefaultBeers(data);
  };

  const handleFilter = () => {
    const inputArray = beer.filter((beer) =>
      beer.name.toLowerCase().includes(input.toLowerCase())
    );
    const classicArray = beer.filter(
      (beer) =>
        beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010
    );
    const acidArray = beer.filter((beer) => beer.ph && beer.ph < 4);
    const abvArray = beer.filter((beer) => beer.abv && beer.abv >= 6);

    if (inputArray && acidCheck && classicCheck && abvCheck) {
      setBeerType(
        inputArray
          .filter(
            (beer) =>
              beer.first_brewed &&
              parseInt(beer.first_brewed.slice(-4)) < 2010
          )
          .filter((beer) => beer.ph && beer.ph < 4)
          .filter((beer) => beer.abv && beer.abv >= 6)
      );
    } else if (inputArray && acidCheck && classicCheck) {
      setBeerType(
        inputArray
          .filter((beer) => beer.ph && beer.ph < 4)
          .filter(
            (beer) =>
              beer.first_brewed &&
              parseInt(beer.first_brewed.slice(-4)) < 2010
          )
      );
    } else if (inputArray && abvCheck && classicCheck) {
      setBeerType(
        inputArray
          .filter((beer) => beer.abv && beer.abv >= 6)
          .filter(
            (beer) =>
              beer.first_brewed &&
              parseInt(beer.first_brewed.slice(-4)) < 2010
          )
      );
    } else if (inputArray && abvCheck & acidCheck) {
      setBeerType(
        inputArray
          .filter((beer) => beer.abv && beer.abv >= 6)
          .filter((beer) => beer.ph && beer.ph < 4)
      );
    } else if (inputArray && acidCheck) {
      setBeerType(inputArray.filter((beer) => beer.ph && beer.ph < 4));
    } else if (inputArray && classicCheck) {
      setBeerType(
        inputArray.filter(
          (beer) =>
            beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010
        )
      );
    } else if (inputArray && abvCheck) {
      setBeerType(inputArray.filter((beer) => beer.abv && beer.abv >= 6));
    } else if (classicCheck && acidCheck) {
      setBeerType(classicArray.filter((beer) => beer.ph && beer.ph < 4));
    } else if (classicCheck && abvCheck) {
      setBeerType(classicArray.filter((beer) => beer.abv && beer.abv >= 6));
    } else if (acidCheck && abvCheck) {
      setBeerType(acidArray.filter((beer) => beer.abv && beer.abv >= 6));
    } else if (classicCheck) {
      setBeerType(classicArray);
    } else if (acidCheck) {
      setBeerType(acidArray);
    } else if (abvCheck) {
      setBeerType(abvArray);
    } else if (inputArray) {
      setBeerType(inputArray);
    } else {
      setBeerType(beer);
    }
  };


  useEffect(() => {
    if(beer.length===0){
      getBeers()
    }
    //handleFilter();
    }, []);

    
  const handleInput = (event) => {
    setInput(event.target.value);
    handleFilter()
  };

  const handleABV = () => {
    setAbvCheck(!abvCheck);
    handleFilter()
  };

  const handleClassic = () => {
    setClassicCheck(!classicCheck);
    handleFilter()
  };

  const handleAcid = () => {
    setAcidCheck(!acidCheck);
    handleFilter()
  };

  return (
    <div className="App">
      <Nav
        handleInput={handleInput}
        handleABV={handleABV}
        handleClassic={handleClassic}
        handleAcid={handleAcid}
        abvCheck={abvCheck}
        classicCheck={classicCheck}
        acidCheck={acidCheck}
      />
      <BeerCardContainer beers={beer} />
    </div>
  );
};

export default App;



// const handleFilter = async() => {
//   getBeers()
//   const inputArray = beer.filter((beer)=>beer.name.toLowerCase().includes((input).toLowerCase()))
//   const classicArray = beer.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010)
//   const acidArray= beer.filter((beer) => beer.ph && beer.ph < 4)
//   const abvArray= beer.filter((beer)=> beer.abv && beer.abv >= 6)

//   if(inputArray && acidCheck && classicCheck && abvCheck){
//     setBeerType(inputArray.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010).filter((beer) => beer.ph && beer.ph < 4).filter((beer)=> beer.abv && beer.abv >= 6))
//   } else if (inputArray && acidCheck && classicCheck){
//     setBeerType(inputArray.filter((beer) => beer.ph && beer.ph < 4).filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010))
//   } else if (inputArray && abvCheck && classicCheck ){
//     setBeerType(inputArray.filter((beer)=> beer.abv && beer.abv >= 6).filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010))
//   } else if (inputArray && abvCheck & acidCheck){
//     setBeerType(inputArray.filter((beer)=> beer.abv && beer.abv >= 6)
//     .filter((beer) => beer.ph && beer.ph < 4))
//   } else if  (inputArray && acidCheck){
//     setBeerType(inputArray.filter((beer) => beer.ph && beer.ph < 4))
//   } else if (inputArray && classicCheck){
//     setBeerType(inputArray.filter((beer) => beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010))
//   } else if (inputArray && abvCheck) {
//     setBeerType(inputArray.filter((beer)=> beer.abv && beer.abv >= 6))
//   } else if (classicCheck && acidCheck){
//     setBeerType(classicArray.filter((beer) => beer.ph && beer.ph < 4))
//   } else if (classicCheck && abvCheck){
//     setBeerType(classicArray.filter((beer)=> beer.abv && beer.abv >= 6))
//   } else if(acidCheck && abvCheck){
//     setBeerType(acidArray.filter((beer)=> beer.abv && beer.abv >= 6))
//   }else if (classicCheck){
//     setBeerType(classicArray)
//   } else if (acidCheck) {
//     setBeerType(acidArray)
//   } else if (abvCheck){
//     setBeerType(abvArray)
//   } else if (inputArray){
//     setBeerType(inputArray)
//   } else {
//     setBeerType(beer)
//   }
// }
