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
  const [defaultBeers, setDefaultBeers] = useState([]);

  const getBeers = async () => {
    const res = await fetch(
      "https://api.punkapi.com/v2/beers?page=3&per_page=80"
    );
    const data = await res.json();
    setBeerType(data);
    setDefaultBeers(data);
  };

  let abv = false;
  let classic = false;
  let acidic = false;

  const handleInput = (event) => {
    setInput(event.target.value);
    handleFilter(abv, classic, acidic);
  };

  const handleABV = (event) => {
    if (event.target.checked) {
      abv = true;
    }
    setAbvCheck(!abvCheck);
    handleFilter(abv, classic, acidic);
  };

  const handleClassic = (event) => {
    if (event.target.checked) {
      classic = true;
    }
    setClassicCheck(!classicCheck);
    handleFilter(abv, classic, acidic);
  };

  const handleAcid = (event) => {
    if (event.target.checked) {
      acidic = true;
    }
    setAcidCheck(!acidCheck);
    handleFilter(abv, classic, acidic);
  };

  const handleFilter = (abv, classic, acidic) => {
    const inputArray = beer.filter((beer) =>
      beer.name.toLowerCase().includes(input.toLowerCase())
    );
    const classicArray = beer.filter(
      (beer) =>
        beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010
    );
    const acidArray = beer.filter((beer) => beer.ph && beer.ph < 4);
    const abvArray = beer.filter((beer) => beer.abv && beer.abv >= 6);

    if (
      inputArray &&
      acidic &&
      classic &&
      abv
    ) {
      setBeerType(
        inputArray
          .filter(
            (beer) =>
              beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010
          )
          .filter((beer) => beer.ph && beer.ph < 4)
          .filter((beer) => beer.abv && beer.abv >= 6)
      );
    } else if (inputArray && acidic && classic) {
      setBeerType(
        inputArray
          .filter((beer) => beer.ph && beer.ph < 4)
          .filter(
            (beer) =>
              beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010
          )
      );
    } else if (inputArray && abv && classic) {
      setBeerType(
        inputArray
          .filter((beer) => beer.abv && beer.abv >= 6)
          .filter(
            (beer) =>
              beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010
          )
      );
    } else if (inputArray && abv & acidic) {
      setBeerType(
        inputArray
          .filter((beer) => beer.abv && beer.abv >= 6)
          .filter((beer) => beer.ph && beer.ph < 4)
      );
    } else if (inputArray && acidic) {
      setBeerType(inputArray.filter((beer) => beer.ph && beer.ph < 4));
    } else if (inputArray && classic) {
      setBeerType(
        inputArray.filter(
          (beer) =>
            beer.first_brewed && parseInt(beer.first_brewed.slice(-4)) < 2010
        )
      );
    } else if (inputArray && abv) {
      setBeerType(inputArray.filter((beer) => beer.abv && beer.abv >= 6));
    } else if (classic && acidic) {
      setBeerType(classicArray.filter((beer) => beer.ph && beer.ph < 4));
    } else if (classic && abv) {
      setBeerType(classicArray.filter((beer) => beer.abv && beer.abv >= 6));
    } else if (acidic && abv) {
      setBeerType(acidArray.filter((beer) => beer.abv && beer.abv >= 6));
    } else if (classic) {
      setBeerType(classicArray);
    } else if (acidic) {
      setBeerType(acidArray);
    } else if (abv) {
      setBeerType(abvArray);
    } else if (inputArray) {
      setBeerType(inputArray);
    } else {
      setBeerType(beer);
    }
  };

  useEffect(() => {
    if (beer.length === 0) {
      getBeers();
    }
    handleFilter();
  }, []);

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
