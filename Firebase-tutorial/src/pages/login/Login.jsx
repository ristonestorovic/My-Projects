import './login.scss'
import { useState } from 'react'
import { auth } from '../../firebase'

const Login = () => {
  const [error, setError] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <button type='submit'>Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>

    </div>
  )
}

export default Login;