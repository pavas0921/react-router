export const getAllPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";

  try {
    const request = await fetch(url);
    const data = await request.json();
    let pokemons = [];
    for (let item of data.results) {
      const pokemonDetails = await getOnePokemon(item.url);
      pokemons.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        weight: pokemonDetails.weight,
        base_experience: pokemonDetails.base_experience,
        image: pokemonDetails.sprites.front_default,
      });
    }
    return pokemons;
  } catch (error) {}
};

export const getOnePokemon = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
