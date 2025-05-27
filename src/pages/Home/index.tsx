import { useAuth } from "../../context/AuthContext";
const Home = () => {
  const { currentUser, loading } = useAuth();

  console.log("currentUser", currentUser);

  return (
    <div>
      <h1>
        Home, acá va mi colección -{" "}
        {loading ? "cargando" : currentUser?.displayName}
      </h1>
    </div>
  );
};

export default Home;
