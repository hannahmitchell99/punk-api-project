import './App.scss';
import BeerCard from './components/BeerCard/BeerCard';

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <BeerCard image = {"https://images.punkapi.com/v2/keg.png"} name ={"beer"} description={"this is the description"} foodPairing={"this is food pairing"}/>
    </div>
  );
}

export default App;
