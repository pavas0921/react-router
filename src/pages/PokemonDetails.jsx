import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { PokemonDetail } from "../../src/components/PokemonDetail";

const PokemonDetails = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];
  const { name, weight, base_experience, image } = character || {};
  console.log(character);

  useEffect(() => {
    const item = characters.find((item) => item.id === +id);
    setCharacter(item);
  }, []);

  return (
    <PokemonDetail
      id={id}
      name={name}
      weight={weight}
      base_experience={base_experience}
      image={image}
    />
  );
};

export default PokemonDetails;
