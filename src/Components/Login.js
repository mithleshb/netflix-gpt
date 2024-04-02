import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [IsSignInForm,setIsSignInForm]=useState(true);
    const toggleSignUpForm=()=>{
        setIsSignInForm(!IsSignInForm)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://8f430952.rocketcdn.me/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50">
        <h1 className="font-bold text-3xl py-3">{IsSignInForm?"Sign In":"Sign Up"}</h1>
        {!IsSignInForm && <input type="text" placeholder="FullName" className="p-2 my-2 w-full bg-slate-600" />}
        <input type="text" placeholder="Email Address" className="p-2 my-2 w-full bg-slate-600" />
        <input type="password" placeholder="password" className="p-2 my-2 w-full bg-slate-600" />
        <button className="p-3 my-4 bg-red-700 w-full rounded-lg">{IsSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-2 cursor-pointer" onClick={toggleSignUpForm}>{IsSignInForm ?"New to Netflix ? Sign Up Now":"Already Registered SignIn now"}</p>
      </form>
    </div>
  );
};

export default Login;
