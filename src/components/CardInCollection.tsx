import PokeCardImg from "../assets/pokecard.png";

interface CardInCollectionProps {
  number: number;
  name: string;
}

const CardInCollection = ({ number, name }: CardInCollectionProps) => {
  return (
    <div className="card card-border bg-base-100 w-80  shadow-xl">
      <img
        src={PokeCardImg}
        alt="Pokemon Card"
        loading="lazy"
        className="grayscale w-64 object-cover  mx-auto mt-5"
      ></img>

      <div className="card-body">
        <h2 className="card-title mx-auto">
          {number}-{name}
        </h2>
      </div>
    </div>
  );
};

export default CardInCollection;
