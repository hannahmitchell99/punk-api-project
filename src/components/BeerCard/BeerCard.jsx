import React from "react";
import "../BeerCard/BeerCard.scss";

const BeerCard = (props) => {
  const { image, name, description} = props;
  return (
    <div className="beer-card">
      <img className="beer-card__image" src={image} alt={name} />
      <div className="beer-card__info">
        <h2 className="beer-card__info--heading">{name}</h2>
        <div className="beer-card__info--description">
        {description.match(/[^.!?]+[.!?]+/g).map((sentence, index) => (
          <p key={name + index}>
            {sentence}
          </p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default BeerCard;


