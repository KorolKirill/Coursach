import React, { useState } from "react"
import {LoginApi} from "./api/Login.api";

const Auth = ({setShowAuth, setUserData}) => {

    let [authMode, setAuthMode] = useState("signin")

    let [authLogin, authSetLogin] = useState('')
    let [authPass, authSetPass] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [fullName, setFullName] = useState('')

    function createUser() {
        LoginApi.setNewUser(fullName, email, password).then((result) => {
            if (result.status === 200) {
                alert('Register success')
                setAuthMode('signin')
            }
        })
    }

    function loginIn(login, pass) {
        if (!login || !pass) {
            alert('Invalid email or password')
        }

        LoginApi.getUser(login).then((response) => {
            console.log(response)
            if (response?.data?.password === pass) {
                setUserData(response.data)
                setShowAuth(false)
            }
            else {
                alert('Invalid email or password')
            }
        })
    }

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="LoginContainerForm">
                <div className="LoginForm">
                    <div className="LoginContent">
                        <h3 className="LoginTitle">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                <a>Sign Up</a>
              </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                value={authLogin}
                                onChange={(event => {authSetLogin(event.target.value)})}
                                type="text"
                                placeholder="Enter email"
                                className="form-control mt-1"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                onChange={(event => {authSetPass(event.target.value)})}
                                value={authPass}
                                type="password"
                                placeholder="Enter password"
                                className="form-control mt-1"
                            />
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-3" style={{
                        display: 'flex',
                        justifyContent: 'center'}}>
                        <button onClick={() => {loginIn(authLogin, authPass)}} type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="LoginContainerForm">
            <div className="LoginForm">
                <div className="LoginContent">
                    <h3 className="LoginTitle">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            <a>Sign In</a>
            </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            onChange={(event => {setFullName(event.target.value)})}
                            value={fullName}
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            onChange={(event => {setEmail(event.target.value)})}
                            value={email}
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            onChange={(event => {setPassword(event.target.value)})}
                            value={password}
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div className="d-grid gap-2 mt-3" style={{
                    display: 'flex',
                    justifyContent: 'center'}}>
                    <button type="submit" className="btn btn-primary" onClick={() => {createUser()}}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Auth