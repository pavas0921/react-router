import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";

const Pokemon = () => {
  const [characters, setCharacters] = useState([]);
  const context = useContext(Context);
  console.log("*******", context);
  const [loader, setLoader] = useState(true);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  //Async/Await
  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();

    for (let item of data.results) {
      const pokemonDetails = await getOnePokemon(item.url);
      const image = pokemonDetails.sprites.front_default;
      pokemons.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        weight: pokemonDetails.weight,
        base_experience: pokemonDetails.base_experience,
        image: image,
      });
      context.pokemon.characters = pokemons;
      context.redirectDetailsRoute = "/pokemon";
      //console.log(pokemons);
    }

    setLoader(false);
    setCharacters(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const renderPokemons = () => <CardList list={characters}></CardList>;

  return (
    <>
      <Header>Header</Header>
      {loader && <div>Loading...</div>}
      {characters.length >= 1 && renderPokemons()}
      <Footer>Footer</Footer>
    </>
  );
};

export default Pokemon;
