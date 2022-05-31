import React, { useState } from 'react'

const UseEmployeeForm = (initialValues , validateOnChange=false , validations) => {
  const [values,setValues] = useState(initialValues);
  const [errors,setErrors] = useState({});



  const handleInputChange =(e) =>{
    const{name,value} = e.target
    console.log("name",name ,"value",value)

    setValues({
      ...values,
      [name]: value
    })
    if(validateOnChange)
    validations({[name]:value})
}

const resetForm = () =>{
  setValues(initialValues)
  setErrors({})
}


  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}

export default UseEmployeeForm