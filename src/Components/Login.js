import React, { useRef, useState } from "react";
import Header from "./Header";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { addUser } from "../utils/userSlice";
import {useDispatch} from "react-redux"
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate=useNavigate()
  const dispatch=useDispatch()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  const handleButtomClick = () => {
    console.log(email.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //signup and signin logic
  if (!IsSignInForm) {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName:name.current.value, photoURL: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
        }).then(() => {
          // Profile updated!
          // ...
          const{uid,email,displayName,photoURL}=auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL }))
          // navigate("/browse")
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message )
        });
        console.log(user)
        // navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+errorMessage)
        // ..
      });
  }
   else 
  {
   /// sign in logic
   signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+": "+errorMessage)
  });

  }
}
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://8f430952.rocketcdn.me/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50"
      >
        <h1 className="font-bold text-3xl py-3">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="FullName"
            className="p-2 my-2 w-full bg-slate-600"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-slate-600"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-2 my-2 w-full bg-slate-600"
        />
        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
        <button
          onClick={handleButtomClick}
          className="p-3 my-4 bg-red-700 w-full rounded-lg"
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignUpForm}>
          {IsSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered SignIn now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
