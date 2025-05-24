import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth.js"
import { logout } from "../../features/authSlice.js"

function LogoutButton() {
    const dispatch = useDispatch();
    const logoutHandler = () => {   // we made an async function in authSlice logout, so this .logout() is a promise
        authService.logout().then(() => {
            dispatch(logout());
        }).catch((error) => console.error("Error: ", error))
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutButton