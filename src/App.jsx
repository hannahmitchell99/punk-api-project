import './App.scss';
import BeerCardContainer from './containers/BeerCardContainer/BeerCardContainer';
import beers from './data/punk';

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <BeerCardContainer beers={beers}/>
    </div>
  );
}

export default App;
