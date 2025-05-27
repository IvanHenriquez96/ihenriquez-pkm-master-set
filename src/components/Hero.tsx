import chespin from "./../assets/chespin.png";
// @ts-expect-error function exists but no types
import { signInWithGoogle } from "../config/authMethods.js";

const Hero = () => {
  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    // Opcional: Redirigir al usuario a otra página después de un inicio de sesión exitoso
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={chespin} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">¡Bienvenido, Entrenador!</h1>
          <p className="py-6">
            ¿Listo para la aventura definitiva? Con esta app, finalmente podrás
            llevar un registro perfecto de tu Master Set Pokémon. Olvídate de
            las listas interminables y los "lo tengo o no lo tengo" en el aire.
            Aquí, cada carta de tu colección tiene su lugar.
          </p>
          <button className="btn btn-primary" onClick={handleGoogleSignIn}>
            Empezar Ahora!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
