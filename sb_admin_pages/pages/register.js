import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "./store/firebaseAuth";
import Swal from 'sweetalert2'

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Register = () => {

    const router = useRouter();
    const { register, handleSubmit, watch } = useForm({ shouldUseNativeValidation: true });


    const onSubmit = data => {

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() =>
            (updateProfile(auth.currentUser, {
                displayName: data.firstName + " " + data.lastName,
            }))
            )
            .then((res) =>
            (Swal.fire({
                icon: 'success',
                title: 'Register successfully',
            }),
                router.push('/login'))
            )
            .catch((err) => Swal.fire({
                icon: 'error',
                title: `${err?.message}`,
                text: "Email aleardy exits or somthing went wrong",
            }))
    }
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                router.push('/')
            }).catch((error) => {
                console.log(error.message)
            });
    };

    const handleFacebookSignIn = async (e) => {
        e.preventDefault();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                router.push('/')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    return <div className="bg-gradient-primary">
        <div className="container">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user" onSubmit={handleSubmit(onSubmit)} >
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                placeholder="First Name" name="firstName"
                                                {...register("firstName", {
                                                    required: "Please enter your first name.",
                                                    validate: (val) => {
                                                        if (!val.match(/^[a-zA-Z]*$/g)) {
                                                            return "Please enter only alphabates";
                                                        }
                                                    },
                                                })}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                placeholder="Last Name" name="lastName"
                                                {...register("lastName", {
                                                    required: "Please enter your last name.",
                                                    validate: (val) => {
                                                        if (!val.match(/^[a-zA-Z]*$/g)) {
                                                            return "Please enter only alphabates";
                                                        }
                                                    },
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email Address" name="email"  {...register("email", { required: true })}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" name="password"
                                                {...register("password", { required: "Please enter your password", minLength: 6 })}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleRepeatPassword" placeholder="Repeat Password" name="repeatPassword"
                                                {...register("repeatPassword", { required: true })}

                                                {...register("repeatPassword", {
                                                    required: true,
                                                    validate: (val) => {
                                                        if (watch('password') != val) {
                                                            return "Your passwords do no match";
                                                        }
                                                    },
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-user btn-block" type="submit">
                                        Register Account
                                    </button>
                                    <hr />
                                    <button className="btn btn-google btn-user btn-block" onClick={handleGoogleSignIn}>
                                        <i className="fab fa-google fa-fw"></i> Register with Google
                                    </button>
                                    <button className="btn btn-facebook btn-user btn-block" onClick={handleFacebookSignIn}>
                                        <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </button>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="/forgotPassword">Forgot Password?</a>
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
    </div>;
}


export default Register;