import React, { useState } from "react"
// import { Redirect } from 'react-router-dom'

export const Login = props => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    // const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const checkLogin = () => {
        if(username === "admin" && password === "1234") {
            props.history.push("/dashboard");
        } 
    }
    return (
        <div>
            <div>

            </div>
            <div> 
                Username: <input type="text" onChange={(e) => setUsername(e.target.value)} />
                Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => checkLogin()}>Submit</button>
            </div>
        </div>
    )
}