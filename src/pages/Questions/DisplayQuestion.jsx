import React from 'react'
import LeftSidebar from '../../components/Navbar/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/Navbar/RightSidebar/RightSidebar'
import QuestionsDetails from '../Questions/QuestionsDetails'
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <QuestionsDetails/>
        <RightSidebar/>
      </div>
      
    </div>
  )
}

export default DisplayQuestion
