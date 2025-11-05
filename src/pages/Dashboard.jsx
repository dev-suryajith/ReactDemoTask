import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("userInfo"))
    if (storedUser && storedUser.isLoggedIn === "true") {
      setUser(storedUser)
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    navigate("/")
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {user ? (
        <>
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Welcome, {user.name}!</h1>
          <p className="text-lg text-gray-700 mb-6">You are now on your dashboard.</p>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </>
      ) : (
        <h1 className="text-2xl text-red-500">No user logged in.</h1>
      )}
    </div>
  )
}

export default Dashboard
