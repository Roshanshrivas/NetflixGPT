import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }


  return (
    <div
      className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'
    >
      <img 
        className='w-44'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        alt='logo'/>
        { user && <div className='flex p-2'>
            <img 
              alt="usericon" 
              src={user?.photoURL} 
              className='w-12 h-12'
              />
              <button 
              onClick={handleSignOut}
              className='font-bold text-white '>(Sign Out)</button>
        </div>
        }
    </div>
  )
}

export default Header
