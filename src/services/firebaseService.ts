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
  collection?: PokemonCard[];
}
export const createUserProfileDocument = async (user: User) => {
  if (!user) return;

  console.log("Checking user profile creation for:", user.email);

  const userRef = doc(db, "usuarios", user.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    console.log("Creating new user profile in Firestore for:", user.email);
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
      await setDoc(userRef, userProfile);
      console.log("User profile created successfully");
    } catch (error) {
      console.log("Error creating user profile:", error);
    }
  } else {
    console.log("User profile already exists! Welcome back!", user.email);
  }
};
