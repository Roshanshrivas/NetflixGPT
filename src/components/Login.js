import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validation the form data
    
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(name.current.value, email.current.value, password.current.value);
    setErrorMessage(message);
    
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
          <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
          alt='logo'/>
        </div>
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
              {
                isSignInForm ? "Sign In" : "Sign Up"
              }
            </h1>
            {!isSignInForm && ( 
              <input 
               ref={name}
               type="text" 
               placeholder='Full Name' 
               className='p-2 my-2 w-full bg-gray-700'/>
              )}
            
               
            <input 
               ref={email}
               type="text" 
               placeholder='Email Address' 
               className='p-2 my-2 w-full bg-gray-700'/>

            <input 
              ref={password}
              type="password" 
              placeholder='Password' 
              className='p-2 my-2 w-full bg-gray-700'/>

              <p className='text-red-500 text-lg'>{errorMessage}</p>
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {
                isSignInForm ? 
                "New to Netflix? Sign Up Now" 
                :
                "Already Registered? Sign In Now"
              }
              </p>
        </form>
    </div>
  )
}

export default Login