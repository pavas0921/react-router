export const getAllPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";

  try {
    const request = await fetch(url);
    const data = await request.json();
    let pokemons = [];
    for (let item of data.results) {
      const pokemonDetails = await getOnePokemon(item.url);
      pokemons.push(pokemonDetails);
    }
    return pokemons;
  } catch (error) {}
};

export const getOnePokemon = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pokemon = {
      id: data.id,
      name: data.name,
      weight: data.weight,
      base_experience: data.base_experience,
      image: data.sprites.front_default,
    };
    return pokemon;
  } catch (error) {
    return error;
  }
};
