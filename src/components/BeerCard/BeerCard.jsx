import React from "react";
import "../BeerCard/BeerCard.scss"

const BeerCard = (props) => {
    const {image, name, description, foodPairing} = props
    return (
        <div className="beer-card">
             <img className= "beer-card__image"src={image} alt={name}/>
            <div className="beer-card__info">
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{foodPairing}</p>
            </div>
        </div>
    )
}

export default BeerCard