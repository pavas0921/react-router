import React from "react";
import "./pokemon-detail.scss";

const PokemonDetail = ({ id, name, weight, base_experience, image }) => {
  return (
    <div className="pokemon-detail">
      <div className="pokemon-detail__card">
        <div className="pokemon-detail___img">
          <img className="pokemon-detail____img-redonda" src={image} alt="" />
        </div>
        <div className="pokemon-detail__info">
          <span>
            <b>Id:</b> {id}
          </span>

          <span>
            <b>Name:</b> {name}
          </span>
          <span>
            <b>Weight:</b> {weight}
          </span>

          <span>
            <b>Experience:</b> {base_experience}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
