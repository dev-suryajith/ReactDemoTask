import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Login({ setLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const storedUser = JSON.parse(sessionStorage.getItem('userInfo'))

    if (storedUser && storedUser.email === email && storedUser.pass === password) {
      alert(`Welcome back, ${storedUser.name}!`)
      sessionStorage.setItem('userInfo', JSON.stringify({ ...storedUser, isLoggedIn: "true" }))
      navigate('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="w-[500px] bg-[#f3eeee] p-5 flex flex-col items-center gap-4 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">Login</h1>

      <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg p-2 border" type="email" placeholder="Enter your email" />

      <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg p-2 border" type="password" placeholder="Enter your password" />

      <button onClick={handleLogin} className="w-1/3 rounded-lg p-2 bg-blue-500 text-white font-bold hover:bg-blue-600" > Login </button>

      <p className="text-sm"> Don’t have an account?{' '} <button onClick={() => setLogin(false)} className="text-blue-500 underline" > Create one </button> </p>
    </div>
  )
}

export default Login
