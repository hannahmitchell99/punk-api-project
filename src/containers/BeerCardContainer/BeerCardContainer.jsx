import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard';

const BeerCardContainer = (props) => {

    const {beers} = props;

    const beersJSX = beers.map((beer) => {
        return <BeerCard image = {beer.image_url} name = {beer.name}  description = {beer.description}key = {beer.id}/>
    })

  return (
    <div className="beer-card-container">{beersJSX}</div>
  )
  
}

export default BeerCardContainer