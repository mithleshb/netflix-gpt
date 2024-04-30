import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';

const Body = () => {
    const dispatch=useDispatch();
   
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
    ])

   
  return (
    <div>
<RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body