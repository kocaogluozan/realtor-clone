import React from "react";

//import icons
import { FcGoogle } from "react-icons/fc";

//import toast
import { toast } from "react-toastify";

//import useNavigate
import { useNavigate } from "react-router-dom";

//import firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const OAuth = () => {
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Check the user already exists:
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      //Go to home page after sign up:
      navigate("/");
    } catch (error) {
      toast.error("Couldn't authorize with Google");
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full bg-red-700 
                px-7 py-3 text-white uppercase text-sm font-medium hover:bg-red-800
                transition duration-150 ease-in-out active:bg-red-900 shadow-md 
                hover:shadow-lg active:shadow-lg rounded"
      onClick={onGoogleClick}
    >
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" /> Continue with
      Google
    </button>
  );
};

export default OAuth;
