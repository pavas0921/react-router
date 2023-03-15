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
    getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${idParam}`)
  );

  console.log(poke);

  //const [character, setCharacter] = useState({});
  const context = useContext(Context);
  //const { pokemon } = context || {};
  //const { characters } = pokemon || [];
  const { id, name, weight, base_experience, image } = poke || {};

  useEffect(() => {
    context.pokemon.characters = poke;

    /*if (item) {
      context.pokemon.characters = poke;
      //setCharacter(item);
    } else {
      //getData(idParam);
    }
    //setCharacter(item);*/
  }, []);

  /*const getData = async (idParam) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idParam}`;
    const data = await getOnePokemon(url);
    const pokemon = {
      id: data.id,
      name: data.name,
      weight: data.weight,
      base_experience: data.base_experience,
      image: data.sprites.front_default,
    };
    console.log(pokemon);

    //setCharacter(pokemon);
  };*/

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
