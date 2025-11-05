import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

function FormPage() {
    const [login, setLogin] = useState(false)
    return (
        <>
            <div className="mt-25 flex justify-center items-center ">
                {login ?
                    <Login setLogin={setLogin} />
                    :
                    <Register setLogin={setLogin} />
                }
            </div>
        </>
    )
}

export default FormPage