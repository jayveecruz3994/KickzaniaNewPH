import React from 'react'
import './login.css'
import loginLogo from '../assets/images/logowhite.png'
import { useState } from 'react'
import { auth } from '../config/firebase'
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Navbar from '../components/Navbar'


const SignUp = ({isLoggedIn, setLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');


    const handleSignUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "/";
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
    
        try {
          await signInWithPopup(auth, provider);
          window.location.href = "/"
        } catch (error) {
          setError(error.message);
        }
      };
    
      
    return (
        <div className="log-in-container">
            <div className="log-in-logo-container">
                <img src={loginLogo} alt="" />
            </div>
            <div className="log-in-form">
                <h2>Sign Up</h2>
                <div className="log-in-form-content">
                    {error && <p>{error}</p>}
                    <form onSubmit={handleSignUp}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Email'
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Password'
                        />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder='Confirm Password'
                        />
                        <p><a href="/login">Already have an account?</a></p>
                        <button type="submit" className='loginBtn'>Sign Up</button>
                    </form>
                    <div className="google-signin-button-container">
                        <h3>OR</h3>
                        <button onClick={handleGoogleLogin} className='googleLoginBtn'><i><FcGoogle /></i> Sign up with Google</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default SignUp