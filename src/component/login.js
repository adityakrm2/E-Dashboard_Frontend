import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }

    })
    const collectData = async () => {

        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json()
        console.warn(result)
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token", JSON.stringify(result.auth))
            navigate('/')
        } else {
            alert("please enter correct details")
        }


    }
    return (
        <div className="login">
            <h1> Login</h1>

            <input className="inputBox" type="text"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
            <input className="inputBox" type="text"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>

            <button onClick={collectData} className="appButton" type="button">Login</button>
        </div>
    )
}
export default Login