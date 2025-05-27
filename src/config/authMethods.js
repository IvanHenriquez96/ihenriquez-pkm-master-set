import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfileDocument } from "../services/firebaseService.ts";

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    console.log("Login or Registering with Google...");
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User authenticated with Google successfully:");
    console.log("Upserting user profile in Firestore...");
    // redirect to the home page after successful sign-in
    window.location.href = "/";
    await createUserProfileDocument(result.user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error during Google sign-in:", errorMessage, errorCode);
  }
}
