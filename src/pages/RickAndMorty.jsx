import React, { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Loader } from "../components/Loader";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getAllCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setCharacters(data.results);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader />}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;
