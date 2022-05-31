import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const MyRadioGroup = (props) => {

    const {value,name,label,items,onChange} = props
  return (
    <>
    <FormControl>
    <FormLabel>{label}</FormLabel>
        <RadioGroup 
         name={name}
         value={value}
         onChange={onChange}
        row>
        {
            items.map((item)=> (

                <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />

            ))
        }

        </RadioGroup>
    </FormControl>

    </>
  )
}

export default MyRadioGroup