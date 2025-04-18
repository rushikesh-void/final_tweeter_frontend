import React, { useEffect } from 'react'
import LeftSiderbar from './LeftSidebar'
// import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import  useOtherUsers  from '../hooks/useOtherUsers'

const Home = () => {

  const {user, otherUsers } = useSelector (store => store.user);
  const navigate = useNavigate()

  useEffect(()=>{
    if (!user){
      navigate ('/')
    }
    }, [user,navigate]);

    useOtherUsers(user?._id);
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSiderbar/>
      <Outlet/>
      <RightSidebar otherUsers={otherUsers}/>
     
      
    </div>
  )
}

export default Home
