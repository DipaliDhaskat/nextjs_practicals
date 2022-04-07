import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "./store/firebaseAuth";
import Cookies from 'js-cookie';
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Login = () => {

    const initialFieldValues = {
        email: '',
        password: '',
    }
    const [values, setValues] = useState(initialFieldValues)
    const router = useRouter();
    useEffect(() => {
        const emailCookie = Cookies.get("email")
        const passwordCookie = Cookies.get("password")

        setValues({
            email: emailCookie,
            password: passwordCookie,
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Log In successfully',
                })
                router.push('/')
            })
            .catch((err) => Swal.fire({
                icon: 'error',
                title: `${err?.message}`,
            }))

    }
    const handleRemember = (e) => {
        if (e.target.checked) {
            Cookies.set("email", values.email)
            Cookies.set("password", values.password)
        }
    }
    const handleGoogle = async (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                router.push('/')
                Swal.fire({
                    icon: 'success',
                    title: 'Log In successfully',
                })
            }).catch((error) => {
                console.log(error.message)
            });
    }
    const handleFacebook = async (e) => {
        e.preventDefault();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Log In successfully',
                })
                router.push('/')
            })
            .catch((error) => {
                console.log(error.message)
            });

    }
    return <div>
        {/* <h1>Login Page</h1> */}
        <div className="bg-gradient-primary">

            <div className="container">

                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={handleLogin}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." name="email" value={values.email} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" onChange={handleRemember} />
                                                        <label className="custom-control-label" htmlFor="customCheck" >
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                <hr />
                                                <button onClick={handleGoogle} className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </button>
                                                <button onClick={handleFacebook} className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="/forgotPassword">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="/register">Create an Account!</a>
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

    </div>
}

export default Login;