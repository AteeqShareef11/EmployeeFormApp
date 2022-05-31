import React, { useEffect } from 'react'
import Control from '../Components/Controds/Control'
import { Grid } from '@mui/material'
import {makeStyles} from "@mui/styles"
import UseEmployeeForm from './EmployeeComponents/UseEmployeeForm'
import * as EmployeeService from '../Services/EmployeeService'
import Add from '@mui/icons-material/Add'



const useStyles = makeStyles(theme=>({
  root:{
    "& .MuiFormControl-root" :{
        width:"80%",
        margin : "5px"
    }
   },

   mybutton:{
       margin: "10px"
   }
})) 



const genderItems = [
  {
   id:"male" , title: "Male"
  },
  {
    id:"female" , title: "female"
  },
  {
    id:"other" , title: "Other"
  },

]

const initialValues ={
  id: 0,
  fullName:"",
  email:"",
  phoneNumber:"",
  city:"",
  gender:"male",
  departmentId:"",
  hireDate: new Date(),
  isPermanent : false,
}

const EmployeeForm = (props) => {

  const  {AddorEdit,recordForEdit} = props

  const classes = useStyles();


  const validations = (fieldValue =  values) =>{
    let  temp = {...errors}
    if("fullName" in fieldValue) 
    temp.fullName = fieldValue.fullName ? "" : "This field requires"
    if("email" in fieldValue)
    temp.email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(fieldValue.email) ? "" :"Email is not valid"
    if("phoneNumber" in fieldValue)
    temp.phoneNumber = fieldValue.phoneNumber.length > 9 ? "" :"Minimum 10 Number Requiired"
    if("departmentId" in fieldValue)
    temp.departmentId = fieldValue.departmentId.length !=0 ? "" : "This field requires"

    setErrors({
      ...temp
    })
    return Object.values(temp).every(x => x === "")
  }



  
  const { 
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = UseEmployeeForm(initialValues,true,validations);

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(validations()){
     AddorEdit(values , resetForm)
    } 
  }

  useEffect(() => {
       
    if(recordForEdit != null)
    setValues({
      ...recordForEdit
    })
 
  }, [recordForEdit]);

  return (
    <>
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid container>
        <Grid item md={6} xs={12}>
        <Control.MyInput
          label="Full Name"
          variant="outlined"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
          error={errors.fullName} 
        />
          <Control.MyInput
          label="Email"
          variant="outlined"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
        />
          <Control.MyInput
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleInputChange}
          error={errors.phoneNumber}
        />
          <Control.MyInput
          label="City"
          variant="outlined"
          name="city"
          value={values.city}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item md={6} xs={12}>
        <Control.MyRadioGroup
          name="gender"
          label="Gender"
          value={values.gender}
          items={genderItems}
          onChange={handleInputChange}
        />
          <Control.MySelect
          name="departmentId"
          label="Department"
          value={values.departmentId}
          options={EmployeeService.getDepartmentCollection()}
          onChange={handleInputChange}
          error = {errors.departmentId}
          />
          <Control.MyDatePicker
            name="hireDate"
            label="HireDate"
            onChange={handleInputChange}
            value={values.hireDate}

          />
          <Control.MyCheckBox
            label="Permanent Employee"
            name="isPermanent"
            value={values.isPermanent}
          />
          <Control.MyButton
           type="submit"
            text="Submit"
            color="primary"
            variant="contained"
          />
            <Control.MyButton
            text="Reset"
            color="secondary"
            variant="contained"
            onClick={resetForm}
          />
          </Grid>
      </Grid>
      </form>
    </>
  )
}

export default EmployeeForm