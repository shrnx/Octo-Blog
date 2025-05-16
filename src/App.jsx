import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import { login, logout } from "./features/authSlice.js"
import { set } from 'react-hook-form'
import { Footer, Header } from './components/index.js'
import { Outlet } from 'react-router-dom'

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
  // I will add loading screen instead of null
  return loading
    ? <div className='flex justify-center items-center h-screen bg-gray-400'>Loading...</div>
    : <>
      <div className='min-h-screen min-w-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
           Todo <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
}

export default App
