import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { useData } from "../hooks";
import { getAllPokemon } from "../services/pokemonAPI";

const Pokemon = () => {
  const { data: characters } = useData([], getAllPokemon);
  const context = useContext(Context);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    context.pokemon.characters = characters;
    context.redirectDetailsRoute = "/pokemon";
    setLoader(false);
  }, [characters]);

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
