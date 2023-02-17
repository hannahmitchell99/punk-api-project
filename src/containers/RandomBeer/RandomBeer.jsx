import React from 'react'
import RandomBeerComponent from '../../components/RandomBeerComponent/RandomBeerComponent'
import "./RandomBeer.scss"

const RandomBeer = (props) => {

    const {beer} = props
    let beerIndex = Math.floor((Math.random()*beer.length)+1)
    

    const beersJSX = beer.map((beer) => {
        return <RandomBeerComponent image = {beer.image_url} name = {beer.name}  abv = {beer.abv} ph={beer.ph} paired = {beer.food_pairing} key = {beer.id}/>
    })

  return (
    <div className='random-beer-container'>{beersJSX[beerIndex]}</div>

  )
}

export default RandomBeer