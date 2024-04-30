import React from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";
const Header = () => {
  const user =useSelector(store=>store.user)
  console.log(user,"userrrr")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
  
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(()=>{
         
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    ///unsubscribe when component is unmounted
    return ()=>unsubscribe()
},[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      { 
      user && (
        <div className="flex p-2">
      <img className="w-12 h-12" src={user?.photoURL}/>
      <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
      </div>
)}
    </div>
  );
};

export default Header;
