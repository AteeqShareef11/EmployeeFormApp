import { FormControl, FormHelperText } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Select } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import React from 'react'

const MySelect = (props) => {
    const {name,value,label,options,error=null,onChange} = props
  return (
    <>
      <FormControl  {...(error && {error:true})}>
          <InputLabel>{label}</InputLabel>
          <Select
          value={value}
          name={name}
          label={label}
          onChange={onChange}
       
          >
          <MenuItem value=''>none</MenuItem>

          {
              options.map(
                item=>(
                  <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
              )
              )
          }

          </Select>
          {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </>
  )
}

export default MySelect