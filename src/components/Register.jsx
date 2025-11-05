import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register({ setLogin }) {
  const navigate = useNavigate()
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    pass: "",
    isLoggedIn: "false"
  })

  const [isPassword, setPassword] = useState({
    password: "",
    confirmPassword: ""
  })

  const handleSubmition = () => {
    if (isPassword.password === isPassword.confirmPassword) {
      const updatedUser = {
        ...userdata,
        pass: isPassword.password,
        isLoggedIn: "true"
      }

      setUserData(updatedUser)
      sessionStorage.setItem("userInfo", JSON.stringify(updatedUser))
      alert("Registration successful!")
      navigate('/dashboard')
    } else {
      alert("Passwords do not match")
    }
  }

  console.log(userdata)

  return (
    <div className="w-[500px] bg-[#f3eeee] p-5 flex flex-col items-center gap-4 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">Sign Up</h1>

      <input value={userdata.name} onChange={(e) => setUserData({ ...userdata, name: e.target.value })} className="w-full rounded-lg p-2 border" type="text" placeholder="Enter your Name" />

      <input value={userdata.email} onChange={(e) => setUserData({ ...userdata, email: e.target.value })} className="w-full rounded-lg p-2 border" type="email" placeholder="Enter your Email" />

      <div className="flex gap-4 w-full">
        <input
          value={isPassword.password} onChange={(e) => setPassword({ ...isPassword, password: e.target.value })} className="w-1/2 rounded-lg p-2 border" type="password" placeholder="Enter your Password" />

        <input
          value={isPassword.confirmPassword} onChange={(e) => setPassword({ ...isPassword, confirmPassword: e.target.value })} className="w-1/2 rounded-lg p-2 border" type="password" placeholder="Confirm Password" />
      </div>

      <button onClick={handleSubmition} className="w-1/3 rounded-lg p-2 bg-blue-500 text-white font-bold hover:bg-blue-600" >
        Register
      </button>

      <p className="text-sm">
        Already have an account?
        <button onClick={() => setLogin(true)} className="text-blue-500 underline" href="/">
          Login here
        </button>
      </p>
    </div>
  )
}

export default Register
