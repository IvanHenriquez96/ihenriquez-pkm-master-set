import type { PokemonCard } from "../interfaces/pokemon-card";

const CardInCollection = (data: PokemonCard) => {
  return (
    <div className="card card-border bg-base-100 w-80">
      <img src={data.images.small} alt={data.id} />
      <div className="card-body">
        <h2 className="card-title">
          {data.nationalPokedexNumbers[0]}-{data.name}
        </h2>
      </div>
    </div>
  );
};

export default CardInCollection;
