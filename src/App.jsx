import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import { login, logout } from "./features/authSlice.js"
import { set } from 'react-hook-form'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())    // Isse humesha humara state updated hi rahewga no matter logged in/out
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return loading
    ? null
    : <>
          <div></div>
      </>
}

export default App
