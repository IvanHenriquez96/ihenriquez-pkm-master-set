import { doc, getDoc, setDoc } from "firebase/firestore"; // Importa las funciones necesarias
// @ts-expect-error function exists but no types
import { User } from "firebase/auth"; // Importa el tipo User de Firebase Auth
// @ts-expect-error function exists but no types
import { db } from "../config/firebase"; // Importa tu instancia de Firestore
import type { PokemonCard } from "../interfaces/pokemon-card";

interface UserProfile {
  email: string | null;
  username?: string;
  createdAt: string;
  total_cards_collected?: number;
  collection?: PokemonCard[]; // Asegúrate de que PokemonCard esté definido en tu proyecto
}
export const createUserProfileDocument = async (user: User) => {
  if (!user) return; // Si no hay usuario, sal de la función

  const userRef = doc(db, "usuarios", user.uid);

  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { email } = user;
    const createdAt = new Date().toISOString();

    const userProfile: UserProfile = {
      email,
      createdAt,
      username: email ? email.split("@")[0] : undefined,
      total_cards_collected: 0,
      collection: [],
    };

    try {
      // Usar setDoc para crear el documento con los datos iniciales
      await setDoc(userRef, userProfile);
      console.log(
        `Perfil de usuario creado en Firestore para: ${email} (UID: ${user.uid})`
      );
    } catch (error) {
      console.error("Error creando el perfil de usuario en Firestore:", error);
      // Aquí podrías manejar el error, quizás mostrando un mensaje al usuario
    }
  } else {
    // El documento ya existe. El usuario ya había iniciado sesión antes.
    // Puedes actualizar la fecha de última conexión aquí si lo deseas
    // try {
    //   await updateDoc(userRef, { lastLogin: new Date().toISOString() });
    //   console.log(`Perfil de usuario actualizado en Firestore para: ${user.email}`);
    // } catch (error) {
    //   console.error('Error actualizando el perfil de usuario en Firestore:', error);
    // }
    console.log(
      `Perfil de usuario ya existe en Firestore para: ${user.email} (UID: ${user.uid})`
    );
  }
};
