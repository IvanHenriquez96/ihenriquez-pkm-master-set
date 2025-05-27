import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"; // Ajusta la ruta si es diferente

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    // Usamos signInWithPopup para que se abra una ventana emergente
    const result = await signInWithPopup(auth, googleProvider);
    // El objeto 'result' contiene información sobre el usuario autenticado
    const user = result.user;

    console.log("Usuario autenticado con Google:", user);
    // Aquí puedes añadir lógica adicional, como guardar info del usuario en tu BD

    // También puedes obtener el token de credencial de Google si lo necesitas
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
  } catch (error) {
    // Manejar errores aquí
    const errorCode = error.code;
    const errorMessage = error.message;
    // El email de la cuenta del usuario que intentó iniciar sesión.
    const email = error.customData?.email;
    // El tipo de credential de Auth que se usó.
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error(
      "Error al iniciar sesión con Google:",
      errorMessage,
      errorCode
    );

    // Puedes mostrar un mensaje al usuario basado en el error
    if (errorCode === "auth/popup-closed-by-user") {
      console.log(
        "La ventana emergente de inicio de sesión fue cerrada por el usuario."
      );
    }
    // Otros errores comunes incluyen 'auth/cancelled-popup-request'
  }
}
