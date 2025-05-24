import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import { login, logout } from "./features/authSlice.js"
import { set } from 'react-hook-form'
import { Footer, Header } from './components/index.js'
import { Outlet } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())    // This ensures the state is always updated, whether logged in or out
        }
      })
      .finally(() => setLoading(false))
  }, [])
  // I will add loading screen instead of null
  return loading
    ? (
    <div className='flex justify-center items-center h-screen bg-gray-400'>
      <HashLoader color="#1F2937" />
    </div>
    ) : (
    <div className='min-h-screen min-w-screen flex flex-col items-center bg-gray-400'>
      <Header />
      <main className="w-full max-w-4xl px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App
