import { useQuery } from "@tanstack/react-query";
import CardInCollection from "../../components/CardInCollection";
import NewCardButton from "../../components/NewCardButton";
import { useAuth } from "../../context/AuthContext";
import getPokemonCards from "../../api/getPokemonCards";
import type { PokemonCard } from "../../interfaces/pokemon-card";

const Home = () => {
  const { currentUser, loading } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getPokemonCards"],
    queryFn: getPokemonCards,
  });

  console.log("data:", data);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Mi colección - {loading ? "cargando" : currentUser?.displayName}
      </h1>

      <div className="container justify-center mx-auto mt-10 flex flex-wrap gap-4">
        <NewCardButton />

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        {data?.map((card: PokemonCard) => (
          <CardInCollection key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
