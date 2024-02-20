import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/Navbar/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/Navbar/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/Navbar/HomeMainbar/HomeMainbar'
const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
      
    </div>
  )
}

export default Home
