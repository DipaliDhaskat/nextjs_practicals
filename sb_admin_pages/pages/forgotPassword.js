import React, { useState } from 'react';
import {
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from './store/firebaseAuth'

const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleReset = (e) => {
        e.preventDefault();
        console.log(email)
        sendPasswordResetEmail(auth, email)
    }
    return <div className="bg-gradient-primary">
        <div className="container">

            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                            <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                                and we'll send you a link to reset your password!</p>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." name="email" value={email} onChange={handleEmail} />
                                            </div>
                                            <button onClick={handleReset} className="btn btn-primary btn-user btn-block">
                                                Reset Password
                                            </button>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="/register">Create an Account!</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="/login">Already have an account? Login!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default ForgotPassword;