import React, { useState } from 'react';
import "./Signup.css";
import log from "../img/loginprofile.png";

const Signup = () => {
    const [sign, setSign] = useState(true);
    const [emailStatus, setEmailStatus] = useState(true);

    const [signFormData, setSignFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        password: '',
        confirmPassword: '',
        address: ''
    });

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleSignupFormChange = (e) => {
        const { name, value } = e.target;
        setSignFormData({
            ...signFormData,
            [name]: value
        });
    };

    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name]: value
        });
    };

    return (
        <section className="signup-main">
            <div className='sign-section-1'>
                <img src="https://img.freepik.com/free-vector/wall-post-concept-illustration_114360-1690.jpg?w=740&t=st=1694838980~exp=1694839580~hmac=9f2150bdcd0438fa615a32df21d10cd9ecb458931fd85fbe6ef7b01da9ffa347" id='log-side' alt="" />
                <div className='sign-main'>
                    {
                        sign ? (
                            <>
                                <h6 className='m-2' style={{ fontSize: "30px", color: "#1e3238", fontWeight: "700" }}>Create Account</h6>
                                <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?w=740&t=st=1694839041~exp=1694839641~hmac=2e6b88c956fcc31a1b8f5846a24c8bbedfad645ca3e603c756b41a9c3d30be5f" id='log-up' alt="" />

                                <form className="sign-up-form">
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder='Enter your name'
                                        value={signFormData.name}
                                        onChange={handleSignupFormChange}
                                    />
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Enter your email'
                                        value={signFormData.email}
                                        onChange={handleSignupFormChange}
                                    />
                                    <input
                                        type="text"
                                        name='phone_number'
                                        placeholder='Enter phone number'
                                        value={signFormData.phone_number}
                                        onChange={handleSignupFormChange}
                                    />
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Enter password'
                                        value={signFormData.password}
                                        onChange={handleSignupFormChange}
                                    />
                                    <input
                                        type="password"
                                        name='confirmPassword'
                                        placeholder='Confirm password'
                                        value={signFormData.confirmPassword}
                                        onChange={handleSignupFormChange}
                                    />
                                    <input
                                        type="text"
                                        name='address'
                                        placeholder='Enter your address'
                                        value={signFormData.address}
                                        onChange={handleSignupFormChange}
                                    />
                                    {
                                        emailStatus ? (
                                            <div className='sign-verifier'>
                                                <div>
                                                    <input type="text" placeholder='Emailed Token' /> <button className='btn btn-success'>Verify</button>
                                                </div>
                                            </div>
                                        ) : ""
                                    }

                                    <button className='sign-up-button'>Sign Up</button>

                                </form>
                                <p className='w-100 text-center sign-shifter' onClick={() => setSign(!sign)}  >
                                    Already have an account? login here...
                                </p>
                            </>
                        ) : (
                            <>
                                <h6 className='m-2' style={{ fontSize: "30px", color: "#1e3238", fontWeight: "700" }}>Login Account</h6>
                                <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?w=740&t=st=1694839041~exp=1694839641~hmac=2e6b88c956fcc31a1b8f5846a24c8bbedfad645ca3e603c756b41a9c3d30be5f" id='log-up' alt="" />

                                <form className="login-form">
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Enter your email'
                                        value={loginFormData.email}
                                        onChange={handleLoginFormChange}
                                    />
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Enter your password'
                                        value={loginFormData.password}
                                        onChange={handleLoginFormChange}
                                    />
                                    <button className='login-up-button'>Log In</button>
                                </form>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Signup;
