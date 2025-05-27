import axios from "axios";

const getPokemonCards = async () => {
  const response = await axios.get(
    "https://api.pokemontcg.io/v2/cards?pageSize=10"
  );

  return response.data.data;
};
export default getPokemonCards;
