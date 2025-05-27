import CardInCollection from "../../components/CardInCollection";
import NewCardButton from "../../components/NewCardButton";
import { useAuth } from "../../context/AuthContext";
const Home = () => {
  const { currentUser, loading } = useAuth();

  console.log("currentUser", currentUser);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Mi colección - {loading ? "cargando" : currentUser?.displayName}
      </h1>

      <div className="container justify-center mx-auto mt-10 flex flex-wrap gap-4">
        <NewCardButton />

        <CardInCollection />
        <CardInCollection />
      </div>
    </div>
  );
};

export default Home;
