import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { PokemonDetail } from "../../src/components/PokemonDetail";
import { useData } from "../hooks";
import { getOnePokemon } from "../services/pokemonAPI";

const PokemonDetails = () => {
  const { id: idParam } = useParams();
  const { data: poke } = useData(
    [],
    getOnePokemon,
    `https://pokeapi.co/api/v2/pokemon/${idParam}`
  );

  const context = useContext(Context);
  const { id, name, weight, base_experience, image } = poke || {};

  useEffect(() => {
    context.pokemon.characters = poke;
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
