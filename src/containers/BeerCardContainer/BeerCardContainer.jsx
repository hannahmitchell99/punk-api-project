import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard';
import "../BeerCardContainer/BeerCardContainer.scss"



const BeerCardContainer = (props) => {

    const {beers} = props;

    const beersJSX = beers.map((beer) => {
        return <BeerCard image = {beer.image_url} name = {beer.name}  description = {beer.description}key = {beer.id}/>
    })

  return (
    <div className='beer-card-container'>
      <h1 className='beer-card-container__heading'>🍺Punk API🍺</h1>
    <div className="beer-card-container__display">{beersJSX}</div>
    </div>

  )
  
}

export default BeerCardContainer