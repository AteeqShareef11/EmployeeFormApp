import { Search } from '@mui/icons-material'
import { InputAdornment, Paper, TableBody, TableCell,  TableRow, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import UseTable from './EmployeeComponents/UseTable'
import * as EmployeeService from '../Services/EmployeeService'
import EmployeeForm from  '../Employee/EmployeeForm'
import Control from '../Components/Controds/Control';
import MyPopUp from '../Components/MyPopUp';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Notification from '../Components/Controds/Notification';
import MyDialog from '../Components/Controds/MyDialog';


const useStyles = makeStyles(theme=>({
  root:{
    
        width:"70%",   
    
   },
   newBtn:{
       position:"absolute",
       right:"-100px"
   },
   pageContent:{
    margin :"50px",
    padding :"30px"

   }


})) 

const headCells = [
  {
    id:"fullName" , label:"Emplyee Name"
  },
  {
    id:"email" , label:"Email Address"
  },
  {
    id:"phoneNumber" , label:"Phone Number"
  },
  {
    id:"departmentId" , label:"Departments"
  },
  {
    id:"actions" , label:"Actions" , disableSorting :true
  },
]

const Employee = () => {

  const classes = useStyles();
  const [records,setRecords]=useState(EmployeeService.getAllEmployees)
  const [openPopUp,setOpenPopUp] = useState(false);
  const [filterFn,setFilterFn] = useState({fn: items=>{return items;}})
  const [recordForEdit,setRecordForEdit]= useState(null)
  const [notify,setNotify ]= useState({isOpen:false , message:"",type:""})
  const [confirmDialog,setConfirmDialog ]= useState({isOpen:false , title:"",subtitle:""})

 

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagintionAndSorting
  
  } = UseTable(records,headCells,filterFn)
 
  const handleInputChange =(e)=>{

    let inputValue = e.target.value
    console.log(inputValue)
    setFilterFn({
      fn: items=>{
        if(inputValue === "")
        return items
        else {
          return items.filter( x=> x.fullName.toLowerCase().includes(inputValue))
        }
      }
    })
    
  }
  const AddorEdit = (employee ,resetForm) =>{
    if(employee.id === 0)
    EmployeeService.insertEmployee(employee);
    else
    EmployeeService.updateEmployee(employee)
    setRecordForEdit(null)
    resetForm();
    setOpenPopUp(false);
    setRecords(EmployeeService.getAllEmployees);
    setNotify({
      isOpen: true,
      message:"submited sucessfully",
      type:"success "
    })

  } 


  const onDelete = id =>{
    setConfirmDialog({
      ...confirmDialog,
      isOpen:false
    })
    EmployeeService.deleteEmployee(id)
    setRecords(EmployeeService.getAllEmployees);
    setNotify({
      isOpen:true,
      message:"Deleted Successfully",
      type:"warning"
    })
  }

  const openInPopUp = item =>{
    setRecordForEdit(item)
    setOpenPopUp(true);

  }


  return (
    <>
          
   <Paper className={classes.pageContent}>
   <Toolbar>
           <Control.MyInput
           className={classes.root}
             label="Search From Here"
             variant="outlined"
             onChange={handleInputChange}
           
             InputProps={{
         startAdornment:(
           <InputAdornment position="start">
             <Search/>
           </InputAdornment>
         )
       }} />
     <Control.MyButton
     className={classes.newBtn}
       text="Add New"
       variant="outlined"
       color="primary"
       startIcon={<AddIcon/>}
       onClick={()=> {setOpenPopUp(true); setRecordForEdit(null);}}
     />
     </Toolbar>
     <TblContainer>
     <TblHead/>
       <TableBody>

       {
        recordsAfterPagintionAndSorting().map(item =>(
           <TableRow key={item.id}>
             <TableCell>{item.fullName}</TableCell>
             <TableCell>{item.email}</TableCell>
             <TableCell>{item.phoneNumber}</TableCell>
             <TableCell>{item.department}</TableCell>
             <TableCell>
             <Control.ActionsButton 
             color="primary"
             onClick={()=>{openInPopUp(item)}}
             >

             <EditIcon fontSize='small'
               
             />
             </Control.ActionsButton>
            
             </TableCell>

             <TableCell>
             <Control.ActionsButton 
             color="secondary"
             onClick={
               ()=> {
                 setConfirmDialog({
                   isOpen:true,
                   title:"Are Sure To Delete The Record",
                   subtitle:"You Can't undo this action again",
                   onConfirm: ()=> {onDelete(item.id)}

                 })
               }
             }
             >

             <CloseIcon fontSize='small'/>
             </Control.ActionsButton>
            
             </TableCell>
            
           </TableRow>
         ))
       }

       </TableBody>
     </TblContainer>
     <TblPagination/>
    <MyPopUp
    title="Employee Form"
    openPopUp={openPopUp}
    setOpenPopUp={setOpenPopUp}>
      <EmployeeForm
        recordForEdit={recordForEdit}
        AddorEdit={AddorEdit}
      />
    </MyPopUp>
    <Notification
      notify={notify}
      setNotify={setNotify}
     />
     </Paper>
     <MyDialog
       confirmDialog={confirmDialog}
       setConfirmDialog={setConfirmDialog}
     />
    



    </>
  )
}

export default Employee