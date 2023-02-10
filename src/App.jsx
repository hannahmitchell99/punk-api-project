import './App.scss';
import BeerCardContainer from './containers/BeerCardContainer/BeerCardContainer';
import Nav from './containers/Nav/Nav';
import beers from './data/punk';

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <BeerCardContainer beers={beers}/>
      
    </div>
  );
}

export default App;
