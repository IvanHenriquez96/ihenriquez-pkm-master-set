import CardInCollection from "../../components/CardInCollection";
import NewCardButton from "../../components/NewCardButton";
import { useAuth } from "../../context/AuthContext";
import { pokemonList } from "../../constants/pokemonList";
import { useState } from "react";

const Home = () => {
  const { currentUser, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  //1.- need check in firestore if user has pokemon cards

  //2.-later, fetch the user's pokemon cards from Firestore

  //3.-later pass the fetched data to the pokemonList variable

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemons = pokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const totalPages = Math.ceil(pokemonList.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Mi colección - {loading ? "cargando" : currentUser?.displayName}
      </h1>

      <div className="container justify-center mx-auto mt-10 flex flex-wrap gap-4">
        <NewCardButton />

        {currentPokemons.map((pokemon) => (
          <CardInCollection
            key={pokemon.id}
            number={pokemon.id}
            name={pokemon.name}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4 mb-10">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="btn btn-primary" // Clase btn de DaisyUI y btn-primary para el color
        >
          Anterior
        </button>
        <span className="text-lg font-medium">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="btn btn-primary" // Clase btn de DaisyUI y btn-primary para el color
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
