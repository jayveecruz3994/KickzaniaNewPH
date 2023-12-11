import React from 'react'
import './login.css'
import loginLogo from '../assets/images/logowhite.png'
import { useState } from 'react'
import { auth } from '../config/firebase'
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Navbar from '../components/Navbar'
import NavigationBar from '../components/NavigationBar'
import App from '../App'



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailLogin = async (e) => {
        e.preventDefault();
          await signInWithEmailAndPassword(auth, email, password);
          window.location.href = '/'
        }
     

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider);
          window.location.href = '/'
      };
    
      
    return (
        <div className="log-in-container">
            <div className="log-in-logo-container">
                <img src={loginLogo} alt="" />
            </div>
            <div className="log-in-form">
                <h2>Sign In</h2>
                <div className="log-in-form-content">
                    {error && <p>{error}</p>}
                    <form onSubmit={handleEmailLogin}>
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
                        <a href="/signup">Don't have an account yet?</a>
                        <button type="submit" className='loginBtn'>Login</button>
                    </form>
                    <div className="google-signin-button-container">
                        <h3>OR</h3>
                        <button onClick={handleGoogleLogin} className='googleLoginBtn'><i><FcGoogle /></i> Login with Google</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Login