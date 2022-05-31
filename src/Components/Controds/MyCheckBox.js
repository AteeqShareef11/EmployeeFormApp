import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const MyCheckBox = (props) => {
    const {label , value ,onChange} =props

  return (
    <>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
    </FormGroup>
    </>
  )
}

export default MyCheckBox