import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import HeaderOfPage from "./HeaderOfPage"
import PeopleIcon from '@mui/icons-material/People';
// import EmployeeForm from '../Employee/EmployeeForm';
import Employee from '../Employee/Employee'
// import { Paper } from '@mui/material';





const Home = () => {
  return (
    <>
    <SideBar/>
     <Header/>
     <div className="App-Menu">
     <HeaderOfPage
       titleText="Employee Form"
       subtitleText="All Records Of Employee"
       logoIcon={<PeopleIcon fontSize='large'/>}

     />
     
     {/* <EmployeeForm/> */}
     
   <Employee/>

     </div>
   
     
    </>
  )
}

export default Home