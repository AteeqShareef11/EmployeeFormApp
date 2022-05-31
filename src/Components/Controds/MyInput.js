import { TextField } from '@mui/material'
import React from 'react'

const MyInput = (props) => {

  const {label,value,variant,name,onChange,error,...other} = props

  return (
    <>
    <TextField
      label={label}
      variant={variant}
      name={name}
      value={value}
      onChange={onChange}
      {...other}

      {...(error && {error:true,helperText:error})}
    />

    </>
  )
}

export default MyInput