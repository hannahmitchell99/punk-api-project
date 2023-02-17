import React from 'react'
import "../RandomBeerComponent/RandomBeerComponent.scss"


const RandomBeerComponent = ({name, image, abv, ph, paired}) => {
  return (
    <div className="random-beer">
      <h2 className='random-beer__main'>Spotlight Beer</h2>
      <img className="random-beer__image" src={image} alt={name} />
      <div className="random-beer__info">
        <h2 className="random-beer__info--heading">{name}</h2>
        <p className='random-beer__info--abv'>ABV: {abv}%</p>
        <p className='random-beer__info--ph'>pH: {ph}</p>
        <p className="random-beer__info--heading">Best Paired With🍽️</p>
        <div className="random-beer__info--tips"> 
        {paired.map((sentence, index) => (
          <p key={name + index}>
            {sentence}
          </p>
        ))}
        </div>
      </div>
    </div>
  )
}

export default RandomBeerComponent