import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import NavBar from '../HomeScreen/NavBar'
import { Plans } from './Plans'
import './ProfileScreen.css'

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
      <NavBar />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='profile avatar'
          />
          <div className='profileScreen__details'>
            <h2>You have logged in as : {user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans</h3>
              <Plans plan='Premium' pixels='4K + HDR' />
              <Plans plan='Basic' pixels='720p' />
              <Plans plan='Standard' pixels='1080p' />

              <button
                onClick={() => auth.signOut()}
                className='profileScreen__signOut'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
